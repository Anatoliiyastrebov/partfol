# 🚀 Инструкция по размещению сайта в интернете

## Текущая ситуация

**Сейчас отправка писем работает ТОЛЬКО локально:**
- Backend работает на `localhost:3001`
- Frontend отправляет запросы на `http://localhost:3001`
- Это работает только на вашем компьютере

**Для работы в интернете нужно:**
1. Разместить backend на сервере/хостинге
2. Разместить frontend на хостинге
3. Настроить CORS и URL

---

## Варианты размещения

### Вариант 1: Бесплатный хостинг (рекомендуется для начала)

#### A) Render.com (бесплатный план)

**Backend:**
1. Зарегистрируйтесь на [Render.com](https://render.com)
2. Создайте новый "Web Service"
3. Подключите ваш GitHub репозиторий
4. Настройки:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**: Добавьте все переменные из `.env`
5. Получите URL типа: `https://your-backend.onrender.com`

**Frontend:**
1. Создайте новый "Static Site" на Render
2. Подключите репозиторий
3. Настройки:
   - **Root Directory**: `/` (корень проекта)
   - **Build Command**: (оставьте пустым, у нас статический сайт)
   - **Publish Directory**: `/` (корень проекта)
4. Получите URL типа: `https://your-site.onrender.com`

**Обновление frontend:**
В файле `script.js` измените:
```javascript
const API_BASE_URL = 'https://your-backend.onrender.com';
```

В `.env` на Render для backend:
```env
FRONTEND_URL=https://your-site.onrender.com
```

---

#### B) Railway.app (бесплатный план)

**Backend:**
1. Зарегистрируйтесь на [Railway.app](https://railway.app)
2. Создайте новый проект
3. Добавьте "GitHub Repo"
4. Выберите папку `server`
5. Добавьте переменные окружения из `.env`
6. Получите URL типа: `https://your-backend.railway.app`

**Frontend:**
1. Создайте новый проект
2. Добавьте "Static Files"
3. Загрузите файлы frontend
4. Получите URL

---

#### C) Vercel (для frontend) + Railway (для backend)

**Backend на Railway:**
- Следуйте инструкциям выше для Railway

**Frontend на Vercel:**
1. Зарегистрируйтесь на [Vercel.com](https://vercel.com)
2. Импортируйте проект из GitHub
3. Настройки:
   - **Framework Preset**: Other
   - **Root Directory**: `/`
4. В настройках проекта добавьте переменную окружения:
   - `NEXT_PUBLIC_API_URL` = `https://your-backend.railway.app`
5. Обновите `script.js`:
```javascript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://your-backend.railway.app';
```

---

### Вариант 2: Платный хостинг (VPS)

Если у вас есть VPS сервер (DigitalOcean, AWS, Hetzner и т.д.):

1. **Установите Node.js на сервере:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Загрузите файлы на сервер:**
```bash
# Используйте scp, rsync или git clone
scp -r server/ user@your-server:/var/www/portfolio-backend/
scp -r *.html *.css *.js images/ user@your-server:/var/www/portfolio-frontend/
```

3. **Настройте backend:**
```bash
cd /var/www/portfolio-backend
npm install
# Создайте .env файл
nano .env
# Заполните переменные
```

4. **Запустите backend через PM2:**
```bash
npm install -g pm2
pm2 start server.js --name portfolio-backend
pm2 save
pm2 startup
```

5. **Настройте Nginx для frontend и backend:**
```nginx
# Frontend
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio-frontend;
    index index.html;
}

# Backend
server {
    listen 80;
    server_name api.yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Что нужно изменить в коде

### 1. Обновите URL в script.js

**Для локальной разработки:**
```javascript
const API_BASE_URL = 'http://localhost:3001';
```

**Для продакшена:**
```javascript
// Автоматическое определение окружения
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001' 
    : 'https://your-backend-url.com';
```

Или создайте файл `config.js`:
```javascript
const CONFIG = {
    API_URL: 'https://your-backend-url.com' // Замените на ваш URL
};
```

### 2. Обновите CORS в backend

В `server/server.js` обновите `FRONTEND_URL` в `.env`:
```env
FRONTEND_URL=https://your-frontend-url.com
```

Или для нескольких доменов:
```javascript
app.use(cors({
    origin: [
        'https://your-frontend-url.com',
        'https://www.your-frontend-url.com',
        'http://localhost:8000' // для разработки
    ],
    credentials: true
}));
```

---

## Проверка работы

После размещения:

1. **Проверьте backend:**
```bash
curl https://your-backend-url.com/health
```

2. **Проверьте отправку:**
```bash
curl -X POST https://your-backend-url.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тест",
    "email": "test@example.com",
    "message": "Тестовое сообщение"
  }'
```

3. **Откройте сайт в браузере и отправьте тестовое сообщение**

---

## Важные замечания

### Безопасность:
- ✅ **НЕ коммитьте `.env` файл в git**
- ✅ Используйте переменные окружения на хостинге
- ✅ Ограничьте CORS только вашими доменами
- ✅ Используйте HTTPS в продакшене

### Производительность:
- Backend должен работать 24/7
- Используйте PM2 или встроенные процессы хостинга
- Настройте автоматический перезапуск при сбоях

### Мониторинг:
- Проверяйте логи backend
- Настройте уведомления об ошибках
- Отслеживайте количество отправленных писем

---

## Быстрый старт для Render.com

1. **Backend:**
   - Создайте Web Service
   - Root Directory: `server`
   - Build: `npm install`
   - Start: `npm start`
   - Добавьте переменные из `.env`

2. **Frontend:**
   - Создайте Static Site
   - Root Directory: `/`
   - Обновите `API_BASE_URL` в `script.js`

3. **Готово!** Ваш сайт будет доступен в интернете

---

## Поддержка

Если возникли проблемы:
- Проверьте логи на хостинге
- Убедитесь, что переменные окружения заполнены
- Проверьте CORS настройки
- Убедитесь, что backend запущен и доступен
