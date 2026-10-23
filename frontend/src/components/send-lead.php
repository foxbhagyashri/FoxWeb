<?php
// Place this file on your server (e.g. /api/send-lead.php).
// The integration key stays here, never in browser JavaScript.
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$in = json_decode(file_get_contents('php://input'), true) ?: [];

$name  = trim($in['name'] ?? '');
$phone = preg_replace('/\D/', '', $in['phone'] ?? '');
if ($name === '' || strlen($phone) < 10) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Name and valid phone are required']);
    exit;
}

$parts = preg_split('/\s+/', $name, 2);

$payload = [
    'integrationKey' => 'b781f70b-d980-4a37-9ac9-d352ca5fed85',
    'firstName'      => $parts[0],
    'lastName'       => $parts[1] ?? '',
    'fullName'       => $name,
    'email'          => trim($in['email'] ?? ''),
    'phoneNumber'    => substr($phone, -10),
    'service'        => trim($in['service'] ?? ''),
];

$ch = curl_init('https://workspace.foxaircomm.co.in/api/webhook-leads/lead');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($payload),
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    CURLOPT_TIMEOUT        => 15,
]);
$res  = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err  = curl_error($ch);
curl_close($ch);

if ($res === false || $code < 200 || $code >= 300) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => $err ?: "CRM returned $code"]);
    exit;
}

echo json_encode(['ok' => true]);
