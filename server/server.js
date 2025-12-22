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

// Логирование всех запросов
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// ============================================
// НАСТРОЙКА SENDGRID
// ============================================

// Проверяем наличие обязательных переменных окружения
const requiredEnvVars = ['SENDGRID_API_KEY', 'EMAIL_FROM', 'EMAIL_TO'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
    console.error('❌ ОШИБКА: Отсутствуют обязательные переменные окружения:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    console.error('\n📝 Создайте файл .env на основе .env.example и заполните все поля.');
    console.error('\n💡 Необходимые переменные:');
    console.error('   - SENDGRID_API_KEY: API ключ из SendGrid Dashboard');
    console.error('   - EMAIL_FROM: Email адрес отправителя (должен быть verified в SendGrid)');
    console.error('   - EMAIL_TO: Email адрес получателя');
    process.exit(1);
}

// Устанавливаем API ключ SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Проверяем, что EMAIL_FROM является verified sender в SendGrid
// (SendGrid автоматически проверит это при отправке)
console.log('✅ SendGrid настроен');
console.log(`📧 Отправитель: ${process.env.EMAIL_FROM}`);
console.log(`📬 Получатель: ${process.env.EMAIL_TO}`);
console.log('⚠️  Убедитесь, что EMAIL_FROM является verified sender в SendGrid Dashboard');

// ============================================
// ВАЛИДАЦИЯ ДАННЫХ
// ============================================

/**
 * Валидирует данные формы обратной связи
 * @param {Object} data - Данные формы
 * @returns {{valid: boolean, errors: string[]}} - Результат валидации
 */
function validateContactForm(data) {
    const errors = [];

    // Проверка имени
    if (!data.name || typeof data.name !== 'string') {
        errors.push('Поле "name" обязательно и должно быть строкой');
    } else if (data.name.trim().length < 2) {
        errors.push('Имя должно содержать минимум 2 символа');
    } else if (data.name.trim().length > 100) {
        errors.push('Имя не должно превышать 100 символов');
    }

    // Проверка email
    if (!data.email || typeof data.email !== 'string') {
        errors.push('Поле "email" обязательно и должно быть строкой');
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email.trim())) {
            errors.push('Некорректный формат email адреса');
        }
    }

    // Проверка сообщения
    if (!data.message || typeof data.message !== 'string') {
        errors.push('Поле "message" обязательно и должно быть строкой');
    } else if (data.message.trim().length < 5) {
        errors.push('Сообщение должно содержать минимум 5 символов');
    } else if (data.message.trim().length > 2000) {
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

// Обработка формы обратной связи
app.post('/api/contact', async (req, res) => {
    try {
        console.log('📧 Получен запрос на отправку сообщения');
        console.log('📝 Полученные данные:', JSON.stringify(req.body, null, 2));

        // Валидация данных
        const validation = validateContactForm(req.body);
        if (!validation.valid) {
            console.log('❌ Ошибка валидации:', validation.errors);
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

        console.log(`📝 Данные формы: имя="${cleanName}", email="${cleanEmail}"`);

        // Формируем содержимое письма для SendGrid
        const msg = {
            to: process.env.EMAIL_TO,
            from: process.env.EMAIL_FROM, // Должен быть verified sender в SendGrid
            subject: `Новое сообщение с сайта портфолио от ${cleanName}`,
            text: `
Вы получили новое сообщение через форму обратной связи на вашем сайте.

Имя отправителя: ${cleanName}
Email отправителя: ${cleanEmail}

Сообщение:
${cleanMessage}

---
Это автоматическое сообщение с сайта портфолио.
            `.trim(),
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #6366f1;">Новое сообщение с сайта портфолио</h2>
                    <p>Вы получили новое сообщение через форму обратной связи на вашем сайте.</p>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Имя отправителя:</strong> ${cleanName}</p>
                        <p><strong>Email отправителя:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
                    </div>
                    
                    <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #6366f1; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Сообщение:</h3>
                        <p style="white-space: pre-wrap; color: #555;">${cleanMessage}</p>
                    </div>
                    
                    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                    <p style="color: #999; font-size: 12px;">Это автоматическое сообщение с сайта портфолио.</p>
                </div>
            `
        };

        // Отправляем email через SendGrid
        console.log('📤 Отправка email через SendGrid...');
        const [response] = await sgMail.send(msg);
        
        console.log('✅ Email успешно отправлен через SendGrid!');
        console.log(`   Status Code: ${response.statusCode}`);
        console.log(`   Получатель: ${process.env.EMAIL_TO}`);
        console.log(`   Отправитель: ${process.env.EMAIL_FROM}`);

        // Успешный ответ
        res.status(200).json({
            success: true,
            message: 'Сообщение успешно отправлено',
            statusCode: response.statusCode
        });

    } catch (error) {
        console.error('❌ Ошибка при отправке email через SendGrid:', error.message);
        
        // Более детальная обработка ошибок SendGrid
        if (error.response) {
            console.error('   Status Code:', error.response.statusCode);
            console.error('   Body:', JSON.stringify(error.response.body, null, 2));
            
            // Проверяем типичные ошибки SendGrid
            if (error.response.body?.errors) {
                error.response.body.errors.forEach(err => {
                    console.error(`   - ${err.message}`);
                    if (err.message.includes('verified')) {
                        console.error('   ⚠️  EMAIL_FROM должен быть verified sender в SendGrid Dashboard!');
                    }
                });
            }
        } else {
            console.error('   Детали ошибки:', error);
        }

        // Отправляем общий ответ об ошибке (не раскрываем детали для безопасности)
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
