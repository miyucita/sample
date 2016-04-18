<?php

$config = array(
	/**
	 * If you use SMTP server as mail server, set "isSMTP" to TRUE and set all configuration parameters to real. 
	 * If your hosting server has own mail service, just leave it.
	 */
	'isSMTP' => false,	// Set mailer to use SMTP
	'SMTP' => array(
		'Host' => 'smtp1.example.com;smtp2.example.com',	// Specify main and backup SMTP servers
		'SMTPAuth' => true,	// Enable SMTP authentication
		'Username' => 'user@example.com',	// SMTP username
		'Password' => 'secret',	// SMTP password
		'SMTPSecure' => 'tls',	// (Optional, leave it empty or just remove from config) Enable TLS encryption, `ssl` also accepted
		'Port' => 587	// (Optional, leave it empty or just remove from config) TCP port to connect to
	),

	'From' => array( // Add a sender
		'email' => 'from@example.com',	// Set email address from which message will send from 
		'name' => 'Mailer'	// Optional Name
	),	
	'Address' => array( // Add a recipient
		array(
			'email' => 'to@example.com',	// Set email address where message will send to
			'name' => 'Joe User'	// Optional Name
		),

		// array( 
		// 	'email' => 'onemore@example.net',
		// 	'name' => 'One more recipient'
		// ),
	)
);