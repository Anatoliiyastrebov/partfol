# 📋 DNS записи для Domain Authentication в SendGrid

## DNS записи для домена `anatolii-yastrebov.vercel.app`

Эти DNS записи нужно добавить в настройки DNS вашего домена для Domain Authentication в SendGrid.

---

## 📝 CNAME записи

### 1. Основная запись для SendGrid

**Тип:** CNAME  
**Имя хоста:** `em9517.anatolii-yastrebov.vercel.app`  
**Значение:** `u58316196.wl197.sendgrid.net`  
**TTL:** 3600 (или по умолчанию)

---

## 🔐 DKIM записи (DomainKeys Identified Mail)

### 2. DKIM запись 1

**Тип:** CNAME  
**Имя хоста:** `s1._domainkey.anatolii-yastrebov.vercel.app`  
**Значение:** `s1.domainkey.u58316196.wl197.sendgrid.net`  
**TTL:** 3600 (или по умолчанию)

### 3. DKIM запись 2

**Тип:** CNAME  
**Имя хоста:** `s2._domainkey.anatolii-yastrebov.vercel.app`  
**Значение:** `s2.domainkey.u58316196.wl197.sendgrid.net`  
**TTL:** 3600 (или по умолчанию)

---

## 🛡️ DMARC запись

### 4. DMARC запись

**Тип:** TXT  
**Имя хоста:** `_dmarc.anatolii-yastrebov.vercel.app`  
**Значение:** `v=DMARC1; p=none;`  
**TTL:** 3600 (или по умолчанию)

---

## 📋 Сводная таблица

| Тип | Имя хоста | Значение | TTL |
|-----|-----------|----------|-----|
| CNAME | `em9517.anatolii-yastrebov.vercel.app` | `u58316196.wl197.sendgrid.net` | 3600 |
| CNAME | `s1._domainkey.anatolii-yastrebov.vercel.app` | `s1.domainkey.u58316196.wl197.sendgrid.net` | 3600 |
| CNAME | `s2._domainkey.anatolii-yastrebov.vercel.app` | `s2.domainkey.u58316196.wl197.sendgrid.net` | 3600 |
| TXT | `_dmarc.anatolii-yastrebov.vercel.app` | `v=DMARC1; p=none;` | 3600 |

---

## 🔧 Как добавить DNS записи

### Если домен на Vercel:

1. **Vercel Dashboard** → ваш проект → **Settings** → **Domains**
2. Найдите домен `anatolii-yastrebov.vercel.app`
3. Перейдите в настройки DNS (если доступно)
4. Добавьте все 4 записи выше

**⚠️ Примечание:** Если Vercel не позволяет управлять DNS для `.vercel.app` домена, вам нужно:
- Использовать свой собственный домен (например, `anatolii-yastrebov.com`)
- Настроить DNS записи у вашего DNS провайдера

### Если домен на другом провайдере:

1. Войдите в панель управления вашего DNS провайдера:
   - **Namecheap**: https://www.namecheap.com/myaccount/login/
   - **GoDaddy**: https://www.godaddy.com/
   - **Cloudflare**: https://dash.cloudflare.com/
   - Или где у вас настроен DNS

2. Найдите раздел **DNS Records** / **DNS Management**

3. Добавьте все 4 записи:
   - 3 CNAME записи
   - 1 TXT запись

4. Сохраните изменения

---

## ✅ Проверка DNS записей

После добавления DNS записей подождите 15-30 минут и проверьте:

### Онлайн-инструменты:

1. **MXToolbox**: https://mxtoolbox.com/
   - Введите домен: `anatolii-yastrebov.vercel.app`
   - Проверьте CNAME и TXT записи

2. **What's My DNS**: https://www.whatsmydns.net/
   - Выберите тип записи (CNAME или TXT)
   - Введите имя хоста
   - Проверьте, что значение совпадает

### Проверка через командную строку:

```bash
# Проверка CNAME записи
dig em9517.anatolii-yastrebov.vercel.app CNAME

# Проверка DKIM записи 1
dig s1._domainkey.anatolii-yastrebov.vercel.app CNAME

# Проверка DKIM записи 2
dig s2._domainkey.anatolii-yastrebov.vercel.app CNAME

# Проверка DMARC записи
dig _dmarc.anatolii-yastrebov.vercel.app TXT
```

---

## 🔄 Верификация в SendGrid

1. **SendGrid Dashboard**: https://app.sendgrid.com/settings/sender_auth/domains

2. Найдите ваш домен `anatolii-yastrebov.vercel.app`

3. Нажмите **"Verify"** или дождитесь автоматической проверки

4. Статус должен измениться на **"Verified"** (зелёная галочка)

5. Обычно проверка занимает 15-30 минут, максимум 48 часов

---

## 📧 Обновление EMAIL_FROM

После верификации домена обновите `EMAIL_FROM` на Render:

1. **Render Dashboard** → ваш сервис → **Environment**

2. Измените `EMAIL_FROM` на:
   ```
   contact@anatolii-yastrebov.vercel.app
   ```
   Или любой другой адрес на этом домене:
   - `noreply@anatolii-yastrebov.vercel.app`
   - `info@anatolii-yastrebov.vercel.app`
   - `mail@anatolii-yastrebov.vercel.app`

3. Сохраните изменения

4. Сделайте **Manual Deploy**:
   - Render Dashboard → Deployments → ⋯ → **Manual Deploy**

---

## ⚠️ Важные замечания

1. **Vercel домены**: Если вы используете `.vercel.app` домен, Vercel может не позволять управлять DNS записями. В этом случае:
   - Используйте свой собственный домен
   - Или свяжитесь с поддержкой Vercel

2. **Распространение DNS**: После добавления записей может потребоваться до 48 часов для полного распространения

3. **TTL**: Рекомендуется использовать TTL 3600 секунд (1 час) для быстрого обновления

4. **Проверка**: Всегда проверяйте DNS записи перед верификацией в SendGrid

---

## ✅ Чек-лист

- [ ] Добавлена CNAME запись: `em9517.anatolii-yastrebov.vercel.app` → `u58316196.wl197.sendgrid.net`
- [ ] Добавлена CNAME запись: `s1._domainkey.anatolii-yastrebov.vercel.app` → `s1.domainkey.u58316196.wl197.sendgrid.net`
- [ ] Добавлена CNAME запись: `s2._domainkey.anatolii-yastrebov.vercel.app` → `s2.domainkey.u58316196.wl197.sendgrid.net`
- [ ] Добавлена TXT запись: `_dmarc.anatolii-yastrebov.vercel.app` → `v=DMARC1; p=none;`
- [ ] Проверены DNS записи через онлайн-инструменты
- [ ] Домен verified в SendGrid (статус "Verified")
- [ ] `EMAIL_FROM` обновлён на `contact@anatolii-yastrebov.vercel.app` в Render
- [ ] Сделан Manual Deploy на Render
- [ ] Протестирована отправка письма
- [ ] Письмо пришло (не в спам!)

---

## 🔗 Полезные ссылки

- **SendGrid Domain Authentication**: https://app.sendgrid.com/settings/sender_auth/domains
- **MXToolbox DNS Checker**: https://mxtoolbox.com/
- **What's My DNS**: https://www.whatsmydns.net/
- **Vercel Domains**: https://vercel.com/docs/concepts/projects/domains

После добавления всех DNS записей и верификации домена в SendGrid, письма должны доставляться нормально, без попадания в спам.
