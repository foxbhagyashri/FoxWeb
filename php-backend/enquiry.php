<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$data = json_decode(file_get_contents("php://input"), true);

$fullName = trim($data['fullName'] ?? '');
$email = trim($data['email'] ?? '');
$businessName = trim($data['businessName'] ?? '');
$contactNumber = trim($data['contactNumber'] ?? '');
$typeOfService = trim($data['typeOfService'] ?? '');

if (empty($fullName) || empty($email)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Name and Email are required"
    ]);
    exit;
}

try {

    $mail = new PHPMailer(true);

    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'mail.foxaircomm.com'; // change
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@foxaircomm.com'; // change
    $mail->Password   = 'Aircom450Info'; // change
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Sender
    $mail->setFrom('info@foxaircomm.com', 'Website Enquiry');

    // Receiver
    $mail->addAddress('foxair.dm@gmail.com');

    // Reply To
    $mail->addReplyTo($email, $fullName);

    $mail->isHTML(true);
    $mail->Subject = 'New Enquiry Received';

    $mail->Body = "
    <h2>New Enquiry</h2>

    <table border='1' cellpadding='10' cellspacing='0' width='100%'>
        <tr>
            <td><strong>Full Name</strong></td>
            <td>{$fullName}</td>
        </tr>
        <tr>
            <td><strong>Email</strong></td>
            <td>{$email}</td>
        </tr>
        <tr>
            <td><strong>Business Name</strong></td>
            <td>{$businessName}</td>
        </tr>
        <tr>
            <td><strong>Contact Number</strong></td>
            <td>{$contactNumber}</td>
        </tr>
        <tr>
            <td><strong>Service</strong></td>
            <td>{$typeOfService}</td>
        </tr>
    </table>
    ";

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Enquiry sent successfully"
    ]);

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => $mail->ErrorInfo
    ]);
}