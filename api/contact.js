// Vercel Serverless Function для обработки формы обратной связи
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Обработка OPTIONS запроса для CORS
    if (req.method === 'OPTIONS') {
        return res.status(200).json({}).end();
    }

    // Обработка OPTIONS запроса для CORS
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    // Разрешаем только POST запросы
    if (req.method !== 'POST') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(405).json({
            success: false,
            message: 'Метод не разрешен. Используйте POST.'
        });
    }

    // Проверяем наличие обязательных переменных окружения
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'EMAIL_TO'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
        console.error('❌ ОШИБКА: Отсутствуют переменные окружения:', missingVars);
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(500).json({
            success: false,
            message: 'Сервер не настроен. Отсутствуют необходимые переменные окружения.'
        });
    }

    try {
        console.log('📧 Получен запрос на отправку сообщения');
        console.log('📝 Полученные данные:', JSON.stringify(req.body, null, 2));

        // Валидация данных
        const { name, email, message } = req.body;

        // Проверка имени
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            return res.status(400).json({
                success: false,
                message: 'Имя должно содержать минимум 2 символа',
                errors: ['Имя должно содержать минимум 2 символа']
            });
        }

        if (name.trim().length > 100) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            return res.status(400).json({
                success: false,
                message: 'Имя не должно превышать 100 символов',
                errors: ['Имя не должно превышать 100 символов']
            });
        }

        // Проверка email
        if (!email || typeof email !== 'string') {
            res.setHeader('Access-Control-Allow-Origin', '*');
            return res.status(400).json({
                success: false,
                message: 'Email обязателен',
                errors: ['Email обязателен']
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            return res.status(400).json({
                success: false,
                message: 'Некорректный формат email адреса',
                errors: ['Некорректный формат email адреса']
            });
        }

        // Проверка сообщения
        if (!message || typeof message !== 'string' || message.trim().length < 5) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            return res.status(400).json({
                success: false,
                message: 'Сообщение должно содержать минимум 5 символов',
                errors: ['Сообщение должно содержать минимум 5 символов']
            });
        }

        if (message.trim().length > 2000) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            return res.status(400).json({
                success: false,
                message: 'Сообщение не должно превышать 2000 символов',
                errors: ['Сообщение не должно превышать 2000 символов']
            });
        }

        // Очищаем данные
        const cleanName = name.trim();
        const cleanEmail = email.trim();
        const cleanMessage = message.trim();

        console.log(`📝 Данные формы: имя="${cleanName}", email="${cleanEmail}"`);

        // Создаём транспорт для отправки email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT, 10),
            secure: process.env.SMTP_PORT === '465', // true для порта 465, false для других
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

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
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(200).json({
            success: true,
            message: 'Сообщение успешно отправлено',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('❌ Ошибка при отправке email:', error.message);
        console.error('   Детали:', error);

        // Отправляем общий ответ об ошибке (не раскрываем детали для безопасности)
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(500).json({
            success: false,
            message: 'Произошла ошибка при отправке сообщения. Попробуйте позже.'
        });
    }
}
