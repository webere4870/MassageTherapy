<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
if (!empty($_POST['email']) && !empty($_POST['name']) && !empty($_POST['message'])) 
{
	$from = htmlspecialchars($_POST['email']);
    $from = filter_var($from, FILTER_VALIDATE_EMAIL);
	if ($from === false) {
		exit('Invalid Email');
	}
    $to = "ryan@rdmtherapy.com";
    $subject = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);
    $headers = "From:" . $from;
    if(mail($to,$subject,$message, $headers)) {
        header("Location:https://www.rdmtherapy.com/submission.html");
    } else {
        echo "The email message was not sent.";
    }
}
?>