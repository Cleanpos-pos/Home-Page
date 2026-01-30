<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}

// Extract Common Fields
$type = $input['type'] ?? 'general'; // general, card_machine, agent
$name = htmlspecialchars($input['name'] ?? '');
$email = htmlspecialchars($input['email'] ?? '');
$phone = htmlspecialchars($input['phone'] ?? '');
$company = htmlspecialchars($input['company'] ?? ''); // Not always present (e.g. agent)
$message = isset($input['message']) ? nl2br(htmlspecialchars($input['message'])) : '';

// Validation
if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields (Name, Email, or Phone).']);
    exit;
}

// Email Configuration
$to = 'info@posso.uk';
$from = 'info@posso.co.uk';

// Headers
$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// HTML Body Construction
$bodyContent = "";
$subject = "New Enquiry";

if ($type === 'card_machine') {
    $subject = "New Card Machine Enquiry - $company";
    $machines = isset($input['machines']) && is_array($input['machines']) ? $input['machines'] : [];
    $machineList = '';
    foreach ($machines as $m)
        $machineList .= "<li>" . htmlspecialchars($m) . "</li>";

    $bodyContent = "
        <h1>New Card Machine Enquiry</h1>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <hr>
        <h2>Enquiry Details</h2>
        <p><strong>Selected Machines:</strong></p>
        <ul>$machineList</ul>
    ";
} elseif ($type === 'agent') {
    $subject = "New Independent Sales Agent Enquiry - $name";
    $location = htmlspecialchars($input['location'] ?? '');
    $experience = nl2br(htmlspecialchars($input['experience'] ?? ''));
    $interests = isset($input['interest']) && is_array($input['interest']) ? $input['interest'] : [];
    $interestList = '';
    foreach ($interests as $i)
        $interestList .= "<li>" . htmlspecialchars($i) . "</li>";

    $bodyContent = "
        <h1>New Independent Sales Agent Enquiry</h1>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Location:</strong> $location</p>
        <hr>
        <h2>Sales Experience</h2>
        <p>$experience</p>
        <hr>
        <h2>Primary Interest</h2>
        <ul>$interestList</ul>
    ";
} else {
    // General (Default)
    $subject = "New General Enquiry - $company";
    $products = isset($input['products']) && is_array($input['products']) ? $input['products'] : [];
    $productList = '';
    foreach ($products as $p)
        $productList .= "<li>" . htmlspecialchars($p) . "</li>";

    $bodyContent = "
        <h1>New General Enquiry</h1>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <hr>
        <h2>Enquiry Details</h2>
        <p><strong>Interested Products/Services:</strong></p>
        <ul>$productList</ul>
    ";
}

// Append message if present (common to general and card_machine, less so agent but harmless)
if (!empty($message) && $type !== 'agent') {
    $bodyContent .= "<p><strong>Message:</strong><br>$message</p>";
}

$finalBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        h1 { color: #2c3e50; }
        p { margin: 5px 0; }
        ul { margin-top: 5px; }
    </style>
</head>
<body>
    $bodyContent
</body>
</html>
";

// Send Email
if (mail($to, $subject, $finalBody, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thank you! We will be in touch shortly.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error sending email. Please try again or call us immediately.']);
}
?>