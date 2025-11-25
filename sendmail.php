<?php
// Allow CORS (optional but recommended)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: text/plain");

// Make sure request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "error";
    exit;
}

// Sanitize function
function clean_input($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Read fields from FormData
$name    = isset($_POST['name']) ? clean_input($_POST['name']) : "";
$phone   = isset($_POST['phone']) ? clean_input($_POST['phone']) : "";
$email   = isset($_POST['email']) ? clean_input($_POST['email']) : "";
$service = isset($_POST['service']) ? clean_input($_POST['service']) : "";
$message = isset($_POST['message']) ? clean_input($_POST['message']) : "";

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "invalid_email";
    exit;
}

// Email settings
$to = "leads@kdppublications.com";   // ← CHANGE THIS TO YOUR RECEIVING EMAIL
$subject = "New Contact Form Submission from KDP PUBLISHERS";

// Create email body
$body  = "You have received a new message from the contact form:\n\n";
$body .= "Name: $name\n";
$body .= "Phone: $phone\n";
$body .= "Email: $email\n";
$body .= "Service: $service\n";
$body .= "Message:\n$message\n\n";

// Email headers
$headers  = "From: EbookWrites <no-reply@kdppublications.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>