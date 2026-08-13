<?php
// ---------------------------------------------------------------------------
// config.php  –  load .env values and expose them as constants
// Place this file one directory ABOVE your public web root, or protect it
// via .htaccess so it is never served directly.
// ---------------------------------------------------------------------------

function env(string $key, string $default = ''): string
{
    return $_ENV[$key] ?? getenv($key) ?: $default;
}

// Load a plain .env file (key=value, # comments, optional quotes)
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#') continue;
        if (!str_contains($line, '=')) continue;
        [$k, $v] = explode('=', $line, 2);
        $k = trim($k);
        $v = trim($v);
        // strip surrounding quotes
        $v = preg_replace('/^(["\'])(.*)\\1$/', '$2', $v);
        if (!isset($_ENV[$k])) {
            $_ENV[$k] = $v;
            putenv("$k=$v");
        }
    }
}

define('SMTP_HOST',     env('SMTP_HOST', 'mail.foxaircomm.com'));
define('SMTP_PORT',     (int) env('SMTP_PORT', '465'));
define('SMTP_SECURE',   strtolower(env('SMTP_SECURE', 'true')) === 'true' || (int)env('SMTP_PORT','465') === 465);
define('SMTP_USER',     env('SMTP_USER', 'info@foxaircomm.com'));
define('SMTP_PASS',     env('SMTP_PASS', ''));
define('SMTP_TLS_VERIFY', strtolower(env('SMTP_TLS_REJECT_UNAUTHORIZED', 'true')) === 'true');

define('MAIL_FROM',     env('MAIL_FROM', '"Fox Aircomm Website" <info@foxaircomm.com>'));
define('MAIL_TO',       env('MAIL_TO',   'info@foxaircomm.com'));

define('ALLOWED_ORIGINS', array_filter(array_map(
    'trim',
    explode(',', env('ALLOWED_ORIGINS', ''))
)));