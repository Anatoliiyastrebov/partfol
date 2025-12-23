import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

// Загружаем переменные окружения из .env файла
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:8000';

// ============================================
// MIDDLEWARE
// ============================================

// CORS - разрешаем запросы с фронтенда (Vercel, localhost, и другие домены)
app.use(cors({
    origin: function (origin, callback) {
        // Разрешаем запросы без origin (например, из Postman, мобильные приложения)
        if (!origin) {
            return callback(null, true);
        }
        
        // Разрешаем localhost для разработки
        if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
            return callback(null, true);
        }
        
        // Разрешаем запросы с указанного FRONTEND_URL
        if (origin === FRONTEND_URL) {
            return callback(null, true);
        }
        
        // Разрешаем запросы с Vercel доменов (для продакшена)
        if (origin.includes('vercel.app') || origin.includes('vercel.com')) {
            return callback(null, true);
        }
        
        // Разрешаем все для гибкости (можно ограничить конкретными доменами)
        callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Парсинг JSON тела запроса
app.use(express.json());

// Логирование только в development режиме
if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
        next();
    });
}

// ============================================
// НАСТРОЙКА SENDGRID
// ============================================

// Проверяем наличие обязательных переменных окружения
const requiredEnvVars = ['SENDGRID_API_KEY', 'EMAIL_FROM', 'EMAIL_TO'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
    console.error('❌ ОШИБКА: Отсутствуют обязательные переменные окружения:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    process.exit(1);
}

// Устанавливаем API ключ SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

if (process.env.NODE_ENV !== 'production') {
    console.log('✅ SendGrid настроен');
    console.log(`📧 Отправитель: ${process.env.EMAIL_FROM}`);
    console.log(`📬 Получатель: ${process.env.EMAIL_TO}`);
}

// ============================================
// ВАЛИДАЦИЯ ДАННЫХ
// ============================================

/**
 * Валидирует данные формы обратной связи (оптимизированная версия)
 * @param {Object} data - Данные формы
 * @returns {{valid: boolean, errors: string[]}} - Результат валидации
 */
function validateContactForm(data) {
    const errors = [];
    
    // Быстрая проверка типов
    if (!data || typeof data !== 'object') {
        return { valid: false, errors: ['Неверный формат данных'] };
    }

    // Проверка имени (оптимизировано)
    const name = data.name?.trim();
    if (!name || name.length < 2) {
        errors.push('Имя должно содержать минимум 2 символа');
    } else if (name.length > 100) {
        errors.push('Имя не должно превышать 100 символов');
    }

    // Проверка email (оптимизировано)
    const email = data.email?.trim();
    if (!email) {
        errors.push('Email обязателен');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Некорректный формат email адреса');
        }
    }

    // Проверка сообщения (оптимизировано)
    const message = data.message?.trim();
    if (!message || message.length < 5) {
        errors.push('Сообщение должно содержать минимум 5 символов');
    } else if (message.length > 2000) {
        errors.push('Сообщение не должно превышать 2000 символов');
    }

    return {
        valid: errors.length === 0,
        errors
    };
}

// ============================================
// РОУТЫ
// ============================================

// Корневой роут
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Portfolio Backend API',
        version: '1.0.0',
        endpoints: {
            health: '/health',
            contact: 'POST /api/contact'
        },
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Проверка здоровья сервера
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Обработка формы обратной связи (оптимизированная)
app.post('/api/contact', async (req, res) => {
    try {
        // Быстрая валидация данных
        const validation = validateContactForm(req.body);
        if (!validation.valid) {
            return res.status(400).json({
                success: false,
                message: 'Ошибка валидации данных',
                errors: validation.errors
            });
        }

        // Извлекаем и очищаем данные
        const { name, email, message } = req.body;
        const cleanName = name.trim();
        const cleanEmail = email.trim();
        const cleanMessage = message.trim();

        // Формируем содержимое письма для SendGrid (минимальный текст)
        const msg = {
            to: process.env.EMAIL_TO,
            from: process.env.EMAIL_FROM,
            subject: `Новое сообщение с сайта от ${cleanName}`,
            text: `Новое сообщение через форму обратной связи на сайте.\n\nИмя отправителя: ${cleanName}\nEmail отправителя: ${cleanEmail}\n\nСообщение:\n${cleanMessage}\n\n---\nАвтоматическое сообщение с сайта портфолио.`
        };

        // Отправляем email через SendGrid (без ожидания полного ответа)
        const sendPromise = sgMail.send(msg);
        
        // Отвечаем клиенту сразу после начала отправки (не ждем завершения)
        res.status(200).json({
            success: true,
            message: 'Сообщение успешно отправлено'
        });
        
        // Обрабатываем результат отправки асинхронно (не блокируем ответ)
        sendPromise.then(([response]) => {
            if (process.env.NODE_ENV !== 'production') {
                console.log('✅ Email успешно отправлен через SendGrid');
            }
        }).catch((error) => {
            // Логируем ошибку, но клиент уже получил успешный ответ
            console.error('❌ Ошибка при отправке email через SendGrid:', error.message);
            if (error.response?.body?.errors) {
                error.response.body.errors.forEach(err => {
                    console.error(`   - ${err.message}`);
                });
            }
        });

    } catch (error) {
        // Только критические ошибки валидации
        res.status(500).json({
            success: false,
            message: 'Произошла ошибка при отправке сообщения. Попробуйте позже.'
        });
    }
});

// Обработка несуществующих роутов
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Роут не найден'
    });
});

// Обработка ошибок
app.use((err, req, res, next) => {
    console.error('❌ Необработанная ошибка:', err);
    res.status(500).json({
        success: false,
        message: 'Внутренняя ошибка сервера'
    });
});

// ============================================
// ЗАПУСК СЕРВЕРА
// ============================================

app.listen(PORT, () => {
    console.log('\n🚀 Сервер запущен!');
    console.log(`📡 Порт: ${PORT}`);
    console.log(`🌐 Health check: http://localhost:${PORT}/health`);
    console.log(`📧 API endpoint: http://localhost:${PORT}/api/contact`);
    console.log(`🔗 Frontend URL: ${FRONTEND_URL}`);
    console.log('');
});
