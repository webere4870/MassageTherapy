<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$from = $_POST['email'];
$to = "ryan@rdmtherapy.com";
$subject = $_POST['name'];
$message = $_POST['message'];
$headers = "From:" . $from;
if(mail($to,$subject,$message, $headers)) {
    echo "The email message was sent.";
} else {
    echo "The email message was not sent.";
}
?>