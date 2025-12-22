// Конфигурация для отправки сообщений на Gmail
// Подробная инструкция в файле GMAIL_SETUP.md

const CONFIG = {
    // Настройки Email через EmailJS для Gmail
    // ШАГ 1: Зарегистрируйтесь на https://www.emailjs.com/
    // ШАГ 2: Добавьте Gmail как Email Service
    // ШАГ 3: Создайте Email Template
    // ШАГ 4: Скопируйте данные ниже из вашего аккаунта EmailJS
    email: {
        enabled: true, // Установите true после настройки EmailJS
        serviceId: 'YOUR_SERVICE_ID', // Service ID из раздела "Email Services" в EmailJS
        templateId: 'YOUR_TEMPLATE_ID', // Template ID из раздела "Email Templates" в EmailJS
        publicKey: 'YOUR_PUBLIC_KEY', // Public Key из раздела "Account" → "General" в EmailJS
        toEmail: 'your.email@gmail.com' // Ваш Gmail адрес, куда будут приходить сообщения
    },
    
    // Настройки Telegram (необязательно)
    telegram: {
        enabled: false,
        botToken: 'YOUR_BOT_TOKEN',
        chatId: 'YOUR_CHAT_ID'
    },
    
    // Используем только email для отправки на Gmail
    useMethod: 'email' // 'email', 'telegram', или 'both'
};
