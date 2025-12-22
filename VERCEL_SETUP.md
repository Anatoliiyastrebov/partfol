# Настройка формы обратной связи на Vercel

## Проблема
Vercel - это статический хостинг, поэтому обычный Node.js сервер не работает. Нужно использовать Vercel Serverless Functions.

## Решение
Создана serverless function в `api/contact.js`, которая обрабатывает отправку писем.

## Шаги настройки:

### 1. Установите Vercel CLI (если еще не установлен)

```bash
npm install -g vercel
```

### 2. Войдите в Vercel

```bash
vercel login
```

### 3. Установите зависимости

```bash
npm install
```

### 4. Настройте переменные окружения в Vercel

#### Через веб-интерфейс Vercel:
1. Зайдите на https://vercel.com
2. Выберите ваш проект
3. Перейдите в Settings → Environment Variables
4. Добавьте следующие переменные:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = ваш_email@gmail.com
SMTP_PASS = ваш_пароль_приложения_gmail
EMAIL_TO = ваш_email@gmail.com
```

#### Или через CLI:

```bash
vercel env add SMTP_HOST
# Введите: smtp.gmail.com

vercel env add SMTP_PORT
# Введите: 587

vercel env add SMTP_USER
# Введите: ваш_email@gmail.com

vercel env add SMTP_PASS
# Введите: ваш_пароль_приложения_gmail

vercel env add EMAIL_TO
# Введите: ваш_email@gmail.com
```

### 5. Деплой на Vercel

```bash
vercel --prod
```

Или через GitHub:
- Закоммитьте изменения
- Запушьте в GitHub
- Vercel автоматически задеплоит проект

### 6. Проверка работы

После деплоя форма должна работать на вашем Vercel URL.

## Структура проекта для Vercel:

```
portfol/
├── api/
│   └── contact.js          # Serverless function для формы
├── index.html              # Главная страница
├── styles.css              # Стили
├── script.js               # Frontend код (обновлен для Vercel)
├── package.json            # Зависимости
├── vercel.json             # Конфигурация Vercel
└── ...
```

## Как получить пароль приложения Gmail:

1. Включите двухфакторную аутентификацию в Google аккаунте
2. Перейдите: https://myaccount.google.com/apppasswords
3. Создайте новый пароль приложения для "Почта"
4. Используйте этот пароль в `SMTP_PASS`

## Проверка работы:

1. Откройте ваш сайт на Vercel
2. Откройте консоль браузера (F12)
3. Заполните и отправьте форму
4. В консоли должно быть: `✅ Сообщение успешно отправлено!`
5. Проверьте почту - должно прийти письмо

## Локальная разработка:

Для локальной разработки используйте:

```bash
vercel dev
```

Это запустит локальный сервер с поддержкой serverless functions.

## Troubleshooting:

### Проблема: "Сервер не настроен"
**Решение:** Проверьте, что все переменные окружения добавлены в Vercel

### Проблема: "Ошибка при отправке email"
**Решение:** 
- Проверьте правильность SMTP настроек
- Убедитесь, что используете пароль приложения (не обычный пароль)
- Проверьте логи в Vercel Dashboard → Functions

### Проблема: CORS ошибка
**Решение:** Serverless function автоматически обрабатывает CORS, но если проблема есть - проверьте настройки в `api/contact.js`

## Логи и отладка:

В Vercel Dashboard:
1. Выберите проект
2. Перейдите в Functions
3. Выберите функцию `contact`
4. Просмотрите логи выполнения

## Альтернатива: Отдельный backend

Если serverless functions не подходят, можно использовать:
- **Render.com** - бесплатный хостинг для Node.js
- **Railway.app** - простой деплой backend
- **Heroku** - классический вариант

В этом случае обновите `API_BASE_URL` в `script.js` на URL вашего backend.
