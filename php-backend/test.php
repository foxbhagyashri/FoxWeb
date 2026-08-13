<?php

$url = "http://localhost/FoxAirComm/php-backend/api/forms/contact";

$data = [
    "fullName" => "Test User",
    "email" => "test@test.com",
    "businessName" => "Test Company",
    "contactNumber" => "9876543210",
    "typeOfService" => "Web Development",
    "message" => "Testing",
    "consent" => true
];

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);

$response = curl_exec($ch);

echo "<pre>";
echo $response;
curl_close($ch);