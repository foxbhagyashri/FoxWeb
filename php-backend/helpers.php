<?php
// ---------------------------------------------------------------------------
// helpers.php  –  CORS handling, JSON response helpers, validation
// ---------------------------------------------------------------------------
require_once __DIR__ . '/config.php';

// ── CORS ────────────────────────────────────────────────────────────────────

function handleCors(): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $allowed = ALLOWED_ORIGINS;

    if ($origin === '' || count($allowed) === 0 || in_array($origin, $allowed, true)) {
        if ($origin !== '') {
            header("Access-Control-Allow-Origin: $origin");
            header('Vary: Origin');
        } else {
            header('Access-Control-Allow-Origin: *');
        }
    } else {
        http_response_code(403);
        echo json_encode(['ok' => false, 'message' => "Origin not allowed: $origin"]);
        exit;
    }

    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Max-Age: 86400');

    // Preflight
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

// ── Response helpers ─────────────────────────────────────────────────────────

function jsonOk(array $data = []): never
{
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array_merge(['ok' => true], $data));
    exit;
}

function jsonError(string $message, int $code = 400): never
{
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'message' => $message]);
    exit;
}

// ── Utilities ────────────────────────────────────────────────────────────────

/** Returns true if $value is a non-empty string after trimming. */
function requiredString(mixed $value): bool
{
    return is_string($value) && trim($value) !== '';
}

/** HTML-escape a value for safe embedding in e-mail body. */
function esc(mixed $value): string
{
    return htmlspecialchars((string)$value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

/** Parse the raw JSON request body and return it as an array. */
function jsonBody(): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false || $raw === '') return [];
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}
