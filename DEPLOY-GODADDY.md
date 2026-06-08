# Deploy FoxAirComm on GoDaddy cPanel

Your project has two parts:

| Part | Folder | On server |
|------|--------|-----------|
| Website (React) | `frontend/` | `public_html/` |
| Form email API (Node) | `server/` + root `package.json` | Node.js app (subdomain recommended) |

---

## Before you start

- GoDaddy hosting with **cPanel** and **Setup Node.js App** (most Deluxe/Ultimate plans).
- Domain: `foxaircomm.com`
- Email `info@foxaircomm.com` created in cPanel with a known password.

---

## Part 1 — Build the website on your PC

```powershell
cd C:\FoxAirComm\frontend
npm install
npm run build
```

Output folder: `frontend\dist\` (upload everything inside this folder).

Check `frontend\.env.production` — set your live API URL:

```env
VITE_API_URL=https://api.foxaircomm.com
```

If your Node app runs on the **same domain** with `/api` routing, use:

```env
VITE_API_URL=
```

Rebuild after changing: `npm run build`

---

## Part 2 — Upload the website to cPanel

1. Log in to **GoDaddy** → **Web Hosting** → **cPanel**.
2. Open **File Manager** → `public_html`.
3. **Delete old test files** in `public_html` if any (keep `cgi-bin` if present).
4. Upload **all files from** `frontend\dist\` into `public_html` (not the `dist` folder itself).
5. Confirm `.htaccess` is in `public_html` (for React routes like `/contact`, `/thank-you`).

Test: open `https://foxaircomm.com` — pages should load.

---

## Part 3 — Create API subdomain

1. cPanel → **Domains** → **Subdomains**
2. Create: `api.foxaircomm.com` → document root e.g. `api.foxaircomm.com` or `public_html/api`
3. You will point the **Node.js app** to this subdomain.

---

## Part 4 — Upload backend (Node.js)

1. cPanel → **File Manager** → home folder (e.g. `foxaircomm`)
2. Create folder: `nodejs-api`
3. Upload these into `nodejs-api`:

```
nodejs-api/
  package.json          (from project root)
  package-lock.json     (from project root)
  server/
    index.js
```

4. **Do not upload** `.env` via public FTP if possible — set env in cPanel UI (Part 5).

On your PC, zip `package.json`, `package-lock.json`, and `server/` folder for faster upload.

---

## Part 5 — Setup Node.js application

1. cPanel → **Setup Node.js App** → **Create Application**
2. Settings:

| Field | Value |
|-------|--------|
| Node.js version | 18.x or 20.x (latest available) |
| Application mode | Production |
| Application root | `nodejs-api` (your folder path) |
| Application URL | `api.foxaircomm.com` |
| Application startup file | `server/index.js` |

3. Click **Create** → **Run NPM Install**
4. Add **Environment variables** (same as local `.env`):

```
SMTP_HOST=mail.foxaircomm.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_TLS_REJECT_UNAUTHORIZED=false
SMTP_USER=info@foxaircomm.com
SMTP_PASS=your_email_password
MAIL_FROM=Fox Aircomm Website <info@foxaircomm.com>
MAIL_TO=info@foxaircomm.com
ALLOWED_ORIGINS=https://foxaircomm.com,https://www.foxaircomm.com
```

5. Click **Restart** on the Node.js app.

Test API: open `https://api.foxaircomm.com/api/health` — should show `{"ok":true}`.

---

## Part 6 — SSL (HTTPS)

1. cPanel → **SSL/TLS Status** or **Let's Encrypt**
2. Enable SSL for:
   - `foxaircomm.com`
   - `www.foxaircomm.com`
   - `api.foxaircomm.com`

---

## Part 7 — Test forms live

1. Open `https://foxaircomm.com`
2. Submit **Enquire** and **Contact** forms
3. Check inbox: `info@foxaircomm.com`
4. Confirm redirect to `/thank-you`

---

## Folder summary on server

```
/home/youruser/
  public_html/              ← React build (index.html, assets, .htaccess)
  nodejs-api/               ← Node backend
    package.json
    server/index.js
```

---

## Common issues

| Problem | Fix |
|---------|-----|
| 404 on `/contact` or refresh | `.htaccess` missing in `public_html` |
| Form error / network failed | Node app not running; check `api.foxaircomm.com/api/health` |
| CORS error | Add your domain to `ALLOWED_ORIGINS` and restart Node app |
| 535 Authentication Failed | Reset `info@foxaircomm.com` password in cPanel → update `SMTP_PASS` |
| Certificate error | Keep `SMTP_TLS_REJECT_UNAUTHORIZED=false` for GoDaddy mail |
| Still uses old email | Restart Node.js app after changing env vars |

---

## Updating the site later

**Frontend:** rebuild → upload new `dist` files to `public_html`.

**Backend:** upload changed `server/index.js` → cPanel Node.js app → **Restart**.

---

## Optional: same domain (no subdomain)

Some hosts allow routing `/api` to Node. If GoDaddy supports it in your plan, set `VITE_API_URL=` (empty) and configure the Node app URL to your domain with path `/api`. If unsure, use the **subdomain method** above — it works on most GoDaddy plans.
