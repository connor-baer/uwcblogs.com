<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

// Ensure our urls have the right scheme.
define( 'URI_SCHEME', ( isset( $_SERVER['HTTPS'] ) ) ? "https://" : "http://" );

// The site url.
define( 'SITE_URL',   URI_SCHEME . $_SERVER['SERVER_NAME'] . '/' );

return array(
	'*' => array(
		'defaultWeekStartDay' => 1,
		'omitScriptNameInUrls' => true,
		'environmentVariables' => array(
			'baseAssetsPath' => './uploads/',
			'baseAssetsUrl' => '/uploads/',
		),
		'siteUrl' => SITE_URL,
	),

	'local' => array(
		'devMode' => true,
		'testToEmailAddress' => 'madebyconnor@icloud.com',
	),

	'uwcblogs.com' => array(
		'devMode' => false,
	),
);
