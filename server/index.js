import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();

const PORT = Number(process.env.PORT || 5174);
const MAIL_TO = (process.env.MAIL_TO || 'info@foxaircomm.com').trim();
const MAIL_FROM =
  process.env.MAIL_FROM?.trim() ||
  `"Fox Aircomm Website" <${process.env.SMTP_USER || 'info@foxaircomm.com'}>`;

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); // server-to-server / curl
      if (allowedOrigins.length === 0) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error(`Origin not allowed: ${origin}`));
    },
  }),
);

app.use(express.json({ limit: '256kb' }));

function requiredString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure =
    String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS?.replace(/^['"]|['"]$/g, '');

  if (!host || !user || !pass) {
    throw new Error('Missing SMTP env vars. Set SMTP_HOST, SMTP_USER, SMTP_PASS.');
  }

  const tlsServername = process.env.SMTP_TLS_SERVERNAME?.trim() || host;
  const rejectUnauthorized =
    String(process.env.SMTP_TLS_REJECT_UNAUTHORIZED ?? 'true').toLowerCase() === 'true';

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: {
      servername: tlsServername,
      rejectUnauthorized,
    },
  });
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.post('/api/forms/enquiry', async (req, res) => {
  try {
    const { fullName, email, businessName, contactNumber, typeOfService, consent } = req.body || {};

    if (!requiredString(fullName) || !requiredString(email) || consent !== true) {
      return res.status(400).json({ ok: false, message: 'Please fill required fields.' });
    }

    const transporter = createTransporter();

    const subject = `New Enquiry: ${fullName}`;
    const html = `
      <h2>New ENQUIRE NOW submission</h2>
      <p><b>Full name:</b> ${escapeHtml(fullName)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Business name:</b> ${escapeHtml(businessName || '')}</p>
      <p><b>Contact number:</b> ${escapeHtml(contactNumber || '')}</p>
      <p><b>Service:</b> ${escapeHtml(typeOfService || '')}</p>
      <p><b>Consent:</b> ${consent ? 'Yes' : 'No'}</p>
      <hr/>
      <p><small>Sent from foxaircomm website</small></p>
    `;

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject,
      html,
    });

    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, message: err?.message || 'Failed to send email.' });
  }
});

app.post('/api/forms/contact', async (req, res) => {
  try {
    const { fullName, email, businessName, contactNumber, typeOfService, message, consent } = req.body || {};

    if (!requiredString(fullName) || !requiredString(email) || !requiredString(contactNumber) || consent !== true) {
      return res.status(400).json({ ok: false, message: 'Please fill required fields.' });
    }

    const transporter = createTransporter();

    const subject = `Contact Us: ${fullName}`;
    const html = `
      <h2>New Contact Us submission</h2>
      <p><b>Full name:</b> ${escapeHtml(fullName)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Business name:</b> ${escapeHtml(businessName || '')}</p>
      <p><b>Contact number:</b> ${escapeHtml(contactNumber)}</p>
      <p><b>Service:</b> ${escapeHtml(typeOfService || '')}</p>
      <p><b>Message:</b><br/>${escapeHtml(message || '').replaceAll('\n', '<br/>')}</p>
      <p><b>Consent:</b> ${consent ? 'Yes' : 'No'}</p>
      <hr/>
      <p><small>Sent from foxaircomm website</small></p>
    `;

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject,
      html,
    });

    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, message: err?.message || 'Failed to send email.' });
  }
});

app.post('/api/forms/career', upload.single('cvFile'), async (req, res) => {
  try {
    const { name, email, phone, role, project, salary } = req.body || {};
    const file = req.file;

    if (!requiredString(name) || !requiredString(email) || !requiredString(phone) || !requiredString(role) || !requiredString(salary)) {
      return res.status(400).json({ ok: false, message: 'Please fill required fields.' });
    }
    if (!file) {
      return res.status(400).json({ ok: false, message: 'CV file is required.' });
    }

    const allowedMimes = new Set([
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]);
    if (!allowedMimes.has(file.mimetype)) {
      return res.status(400).json({ ok: false, message: 'CV must be PDF/DOC/DOCX.' });
    }

    const transporter = createTransporter();

    const subject = `Career Application: ${name} (${role})`;
    const html = `
      <h2>New Career Application</h2>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Phone:</b> ${escapeHtml(phone)}</p>
      <p><b>Role:</b> ${escapeHtml(role)}</p>
      <p><b>Project:</b><br/>${escapeHtml(project || '').replaceAll('\n', '<br/>')}</p>
      <p><b>Salary:</b><br/>${escapeHtml(salary).replaceAll('\n', '<br/>')}</p>
      <hr/>
      <p><small>Sent from foxaircomm website</small></p>
    `;

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject,
      html,
      attachments: [
        {
          filename: file.originalname,
          content: file.buffer,
          contentType: file.mimetype,
        },
      ],
    });

    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, message: err?.message || 'Failed to send email.' });
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({ ok: false, message: err?.message || 'Server error' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Mail server running on http://localhost:${PORT}`);
  // eslint-disable-next-line no-console
  console.log(`Form emails will be sent to: ${MAIL_TO}`);
});

