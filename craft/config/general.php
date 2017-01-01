<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */


return array(
	'*' => array(
		'defaultWeekStartDay' => 1,
		'omitScriptNameInUrls' => true,
		'environmentVariables' => array(
			'baseAssetsPath' => './uploads/',
			'baseAssetsUrl' => '/uploads/',
		),
		'siteUrl' => "http://{$_SERVER['SERVER_NAME']}/",
	),

	'local' => array(
		'devMode' => true,
		'testToEmailAddress' => 'madebyconnor@icloud.com',
	),

	'uwcblogs.com' => array(
		'devMode' => false,
	),
);
