<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', 1);
// ---------------------------------------------------------------------------
// index.php  –  main entry point (place in your public web root)
//
// Routes:
//   GET  /api/health
//   POST /api/forms/enquiry
//   POST /api/forms/contact
//   POST /api/forms/career          (multipart/form-data with cvFile)
// ---------------------------------------------------------------------------


require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/mailer.php';

header('Content-Type: application/json; charset=utf-8');

// Apply CORS and handle preflight
handleCors();

// Route based on URI
$uri = parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH);

// Remove project folder from URL
$uri = str_replace('/FoxAirComm/php-backend', '', $uri);

$uri = '/' . ltrim($uri, '/');

$method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

// ── Health ───────────────────────────────────────────────────────────────────

if ($uri === '/api/health' && $method === 'GET') {
    jsonOk();
}

// ── Enquiry ──────────────────────────────────────────────────────────────────

if ($uri === '/api/forms/enquiry' && $method === 'POST') {
    $body = jsonBody();

    $fullName      = $body['fullName']      ?? '';
    $email         = $body['email']         ?? '';
    $businessName  = $body['businessName']  ?? '';
    $contactNumber = $body['contactNumber'] ?? '';
    $typeOfService = $body['typeOfService'] ?? '';
    $consent       = $body['consent']       ?? false;

    if (!requiredString($fullName) || !requiredString($email) || $consent !== true) {
        jsonError('Please fill required fields.');
    }

    $subject = 'New Enquiry: ' . $fullName;
    $html = sprintf(
        '<h2>New ENQUIRE NOW submission</h2>
         <p><b>Full name:</b> %s</p>
         <p><b>Email:</b> %s</p>
         <p><b>Business name:</b> %s</p>
         <p><b>Contact number:</b> %s</p>
         <p><b>Service:</b> %s</p>
         <p><b>Consent:</b> %s</p>
         <hr/>
         <p><small>Sent from foxaircomm website</small></p>',
        esc($fullName),
        esc($email),
        esc($businessName),
        esc($contactNumber),
        esc($typeOfService),
        $consent ? 'Yes' : 'No'
    );

    try {

    sendMail($subject, $html, $email);

    echo json_encode([
        'success' => true,
        'message' => 'Mail sent'
    ]);
    exit;

} catch (Throwable $e) {

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'error' => $e->getMessage(),
        'file' => $e->getFile(),
        'line' => $e->getLine(),
        'trace' => $e->getTraceAsString()
    ]);

    exit;
}
}

// ── Contact ──────────────────────────────────────────────────────────────────

if ($uri === '/api/forms/contact' && $method === 'POST') {
    $body = jsonBody();

    $fullName      = $body['fullName']      ?? '';
    $email         = $body['email']         ?? '';
    $businessName  = $body['businessName']  ?? '';
    $contactNumber = $body['contactNumber'] ?? '';
    $typeOfService = $body['typeOfService'] ?? '';
    $message       = $body['message']       ?? '';
    $consent       = $body['consent']       ?? false;

    if (!requiredString($fullName) || !requiredString($email) || !requiredString($contactNumber) || $consent !== true) {
        jsonError('Please fill required fields.');
    }

    $subject = 'Contact Us: ' . $fullName;
    $html = sprintf(
        '<h2>New Contact Us submission</h2>
         <p><b>Full name:</b> %s</p>
         <p><b>Email:</b> %s</p>
         <p><b>Business name:</b> %s</p>
         <p><b>Contact number:</b> %s</p>
         <p><b>Service:</b> %s</p>
         <p><b>Message:</b><br/>%s</p>
         <p><b>Consent:</b> %s</p>
         <hr/>
         <p><small>Sent from foxaircomm website</small></p>',
        esc($fullName),
        esc($email),
        esc($businessName),
        esc($contactNumber),
        esc($typeOfService),
        nl2br(esc($message)),
        $consent ? 'Yes' : 'No'
    );

    try {

    sendMail($subject, $html, $email);

    echo json_encode([
        'success' => true,
        'message' => 'Mail sent'
    ]);
    exit;

} catch (Throwable $e) {

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'error' => $e->getMessage(),
        'file' => $e->getFile(),
        'line' => $e->getLine(),
        'trace' => $e->getTraceAsString()
    ]);

    exit;
}
}

// ── Career ───────────────────────────────────────────────────────────────────

if ($uri === '/api/forms/career' && $method === 'POST') {
    // multipart/form-data — fields come from $_POST, file from $_FILES
    $name    = $_POST['name']    ?? '';
    $email   = $_POST['email']   ?? '';
    $phone   = $_POST['phone']   ?? '';
    $role    = $_POST['role']    ?? '';
    $project = $_POST['project'] ?? '';
    $salary  = $_POST['salary']  ?? '';
    $file    = $_FILES['cvFile'] ?? null;

    if (!requiredString($name) || !requiredString($email) || !requiredString($phone)
        || !requiredString($role) || !requiredString($salary)) {
        jsonError('Please fill required fields.');
    }

    if (!$file || ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
        jsonError('CV file is required.');
    }

    $allowedMimes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    // Use finfo for reliable MIME detection (don't trust browser-reported MIME)
    $finfo    = new finfo(FILEINFO_MIME_TYPE);
    $mimeType = $finfo->file($file['tmp_name']);

    if (!in_array($mimeType, $allowedMimes, true)) {
        jsonError('CV must be PDF/DOC/DOCX.');
    }

    // File size guard (5 MB)
    if ($file['size'] > 5 * 1024 * 1024) {
        jsonError('CV file must be smaller than 5 MB.');
    }

    $subject = sprintf('Career Application: %s (%s)', $name, $role);
    $html = sprintf(
        '<h2>New Career Application</h2>
         <p><b>Name:</b> %s</p>
         <p><b>Email:</b> %s</p>
         <p><b>Phone:</b> %s</p>
         <p><b>Role:</b> %s</p>
         <p><b>Project:</b><br/>%s</p>
         <p><b>Salary:</b><br/>%s</p>
         <hr/>
         <p><small>Sent from foxaircomm website</small></p>',
        esc($name),
        esc($email),
        esc($phone),
        esc($role),
        nl2br(esc($project)),
        nl2br(esc($salary))
    );

    $attachments = [[
        'name'    => basename($file['name']),
        'content' => file_get_contents($file['tmp_name']),
        'mime'    => $mimeType,
    ]];

    try {
        sendMail($subject, $html, $email, $attachments);
        jsonOk();
    } catch (Throwable $e) {
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage(),
        'file' => $e->getFile(),
        'line' => $e->getLine()
    ]);
    exit;
}
}

// ── 404 ──────────────────────────────────────────────────────────────────────

jsonError('Not found.', 404);