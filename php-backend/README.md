# Fox Aircomm – PHP Mail Backend

Drop-in replacement for the Node.js/Express mail server.  
Requires **PHP ≥ 8.1** and **Composer** (for PHPMailer).

---

## File structure

```
php-backend/
├── .env              ← your SMTP credentials (never commit)
├── .htaccess         ← Apache routing + file protection
├── composer.json
├── config.php        ← reads .env, defines constants
├── helpers.php       ← CORS, JSON helpers, validation utils
├── mailer.php        ← PHPMailer wrapper
└── index.php         ← router + all three form endpoints
```

---

## Setup

### 1. Install PHPMailer

```bash
composer install
```

This creates `vendor/` with PHPMailer and its autoloader.

### 2. Configure `.env`

Edit `.env` with your SMTP details (already pre-filled for cPanel/GoDaddy):

```env
SMTP_HOST=mail.foxaircomm.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_TLS_REJECT_UNAUTHORIZED=false   # bypasses GoDaddy cert mismatch
SMTP_USER=info@foxaircomm.com
SMTP_PASS=your_password_here

MAIL_FROM="Fox Aircomm Website <info@foxaircomm.com>"
MAIL_TO=info@foxaircomm.com

ALLOWED_ORIGINS=https://foxaircomm.com,https://www.foxaircomm.com
```

### 3. Upload to cPanel

Upload all files **including** `vendor/` to a directory inside `public_html`,  
e.g. `public_html/api/`.

> **Keep `.env`, `config.php`, `mailer.php`, and `helpers.php` protected.**  
> The `.htaccess` already blocks direct browser access to them.

---

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET`  | `/api/health` | Returns `{"ok":true}` |
| `POST` | `/api/forms/enquiry` | Enquiry modal form (JSON body) |
| `POST` | `/api/forms/contact` | Contact page form (JSON body) |
| `POST` | `/api/forms/career` | Career application (multipart, includes CV file) |

---

## Update `formsApi.js` (frontend)

Change the base URL from `http://localhost:5173` to wherever you deploy this:

```js
const BASE_URL = 'http://localhost/php-backend'; // point at your PHP backend
```

---

## No Apache? (Nginx)

Add to your server block:

```nginx
location /api/ {
    try_files $uri $uri/ /api/index.php?$query_string;
}
```
