<?php
require 'phpmailer/PHPMailerAutoload.php';
require 'config.php';
$mail = new PHPMailer;
$res = array();

if($config['isSMTP']) {
	foreach ($config['SMTP'] as $key => $value) {
		if(empty($value))
			continue;
		$mail->$key = $value;
	}	
}

if(isset($config['From']))
	$mail->setFrom((isset($config['From']['email'])?$config['From']['email']:'theme@theme.iondigi.com'), (isset($config['From']['name'])?$config['From']['name']:''));

if(isset($config['Address'])) {
	foreach ($config['Address'] as $value) {
		if(isset($value['email']) && !empty($value['email']))
			$mail->addAddress($value['email'], (isset($value['name'])?$value['name']:''));	
	}
}

// $mail->isHTML(true);
$mail->CharSet = 'UTF-8';

if(empty($_POST['u_mail']))
	$res['status'] = false;
else {
	if($_POST['type'] == 'contact') {
		$sub = 'User info from contact form';

		$body = 'Name: '.$_POST['u_name']."\n";
		$body .= 'Email Address: '.$_POST['u_mail']."\n";
		$body .= 'Phone Number: '.$_POST['u_phone']."\n";
		$body .= 'Message: '.$_POST['u_text']."\n";
	} elseif($_POST['type'] == 'subscribe') {
		$sub = 'User email from subscription form';

		$body .= 'Email Address: '.$_POST['u_mail']."\n";
	}
	$mail->Subject = $sub;
	$mail->Body = $body;

	if($mail->send()) {
		$res['status'] = true;
	} else {
		$res['status'] = false;
	}
}

echo json_encode($res);
?>