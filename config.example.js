// ПРИМЕР правильной конфигурации для Gmail
// Скопируйте этот файл в config.js и заполните своими данными

const CONFIG = {
    email: {
        enabled: true, // Включить отправку на Gmail
        serviceId: 'service_abc123', // Замените на ваш Service ID из EmailJS
        templateId: 'template_xyz789', // Замените на ваш Template ID из EmailJS
        publicKey: 'abcdefghijklmnop', // Замените на ваш Public Key из EmailJS
        toEmail: 'your.email@gmail.com' // Замените на ваш Gmail адрес
    },
    
    telegram: {
        enabled: false,
        botToken: 'YOUR_BOT_TOKEN',
        chatId: 'YOUR_CHAT_ID'
    },
    
    useMethod: 'email' // Используем только email для Gmail
};
