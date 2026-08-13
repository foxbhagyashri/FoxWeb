<?php
// ---------------------------------------------------------------------------
// mailer.php  –  thin wrapper around PHPMailer
// ---------------------------------------------------------------------------
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception as MailerException;

/**
 * Send an HTML e-mail via SMTP.
 *
 * @param string      $subject
 * @param string      $html
 * @param string      $replyTo   Sender's e-mail address
 * @param array       $attachments  [['name'=>..., 'content'=>..., 'mime'=>...], …]
 * @throws MailerException
 */
function sendMail(string $subject, string $html, string $replyTo = '', array $attachments = []): void
{
    $mail = new PHPMailer(true);

    // SMTP settings
    $mail->isSMTP();
    $mail->SMTPDebug = 2;
$mail->Debugoutput = 'html';

    $mail->Host       = SMTP_HOST;
    $mail->Port       = SMTP_PORT;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = SMTP_SECURE ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;

    // GoDaddy / cPanel TLS cert mismatch bypass (mirrors SMTP_TLS_REJECT_UNAUTHORIZED=false)
    if (!SMTP_TLS_VERIFY) {
        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer'       => false,
                'verify_peer_name'  => false,
                'allow_self_signed' => true,
            ],
        ];
    }

    // Parse "Display Name <addr>" or plain address for MAIL_FROM
    $fromName = '';
    $fromAddr = MAIL_FROM;
    if (preg_match('/^"?([^"<]+)"?\s*<([^>]+)>$/', MAIL_FROM, $m)) {
        $fromName = trim($m[1]);
        $fromAddr = trim($m[2]);
    }

    $mail->setFrom($fromAddr, $fromName);
    $mail->addAddress(MAIL_TO);

    if ($replyTo !== '') {
        $mail->addReplyTo($replyTo);
    }

    // Content
    $mail->isHTML(true);
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->Subject = $subject;
    $mail->Body    = $html;

    // Attachments
    foreach ($attachments as $att) {
        $mail->addStringAttachment($att['content'], $att['name'], PHPMailer::ENCODING_BASE64, $att['mime']);
    }

    $mail->send();
}