<?php
// Allow CORS
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

/*
-------------------------------------------------------
 RECEIVE FIELDS FROM *ANY* FORM
-------------------------------------------------------
*/

// Form 1 (your new form)
$fullname     = isset($_POST['fullname']) ? clean_input($_POST['fullname']) : "";
$phonenumber  = isset($_POST['phonenumber']) ? clean_input($_POST['phonenumber']) : "";

// Form 2 (your old form)
$name_old     = isset($_POST['name']) ? clean_input($_POST['name']) : "";
$phone_old    = isset($_POST['phone']) ? clean_input($_POST['phone']) : "";
$service      = isset($_POST['service']) ? clean_input($_POST['service']) : "";

// Shared fields (both forms)
$email        = isset($_POST['email']) ? clean_input($_POST['email']) : "";
$message      = isset($_POST['message']) ? clean_input($_POST['message']) : "";

/*
-------------------------------------------------------
 UNIFY VALUES (pick whichever exists)
-------------------------------------------------------
*/

$name = $fullname ?: $name_old;
$phone = $phonenumber ?: $phone_old;

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "invalid_email";
    exit;
}

/*
-------------------------------------------------------
 EMAIL CONTENT
-------------------------------------------------------
*/

$to = "leads@kdppublications.com"; 
$subject = "New Contact Form Submission from KDP PUBLISHERS";

$body  = "You have received a new form submission:\n\n";
$body .= "Name: $name\n";
$body .= "Phone: $phone\n";
$body .= "Email: $email\n";

if (!empty($service)) {
    $body .= "Service: $service\n"; // (only appears for old form)
}

$body .= "Message:\n$message\n\n";

/*
-------------------------------------------------------
 SEND EMAIL
-------------------------------------------------------
*/

$headers  = "From: KDP Publications <no-reply@kdppublications.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>
