import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Загружаем переменные окружения из .env файла
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:8000';

// ============================================
// MIDDLEWARE
// ============================================

// CORS - разрешаем запросы с фронтенда
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));

// Парсинг JSON тела запроса
app.use(express.json());

// Логирование всех запросов
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// ============================================
// НАСТРОЙКА NODEMAILER
// ============================================

// Проверяем наличие обязательных переменных окружения
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'EMAIL_TO'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
    console.error('❌ ОШИБКА: Отсутствуют обязательные переменные окружения:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    console.error('\n📝 Создайте файл .env на основе .env.example и заполните все поля.');
    process.exit(1);
}

// Создаём транспорт для отправки email
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_PORT === '465', // true для порта 465, false для других портов
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// Проверяем подключение к SMTP серверу при запуске
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ Ошибка подключения к SMTP серверу:', error.message);
        console.error('💡 Проверьте правильность SMTP_HOST, SMTP_PORT, SMTP_USER и SMTP_PASS в .env');
    } else {
        console.log('✅ Подключение к SMTP серверу успешно установлено');
    }
});

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

        // Формируем содержимое письма
        const mailOptions = {
            from: `"Портфолио сайт" <${process.env.SMTP_USER}>`,
            to: process.env.EMAIL_TO,
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

        // Отправляем email
        console.log('📤 Отправка email...');
        const info = await transporter.sendMail(mailOptions);
        
        console.log('✅ Email успешно отправлен!');
        console.log(`   Message ID: ${info.messageId}`);
        console.log(`   Получатель: ${process.env.EMAIL_TO}`);

        // Успешный ответ
        res.status(200).json({
            success: true,
            message: 'Сообщение успешно отправлено',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('❌ Ошибка при отправке email:', error.message);
        console.error('   Детали:', error);

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
