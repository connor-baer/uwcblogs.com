<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
        'devMode' => false,
        'defaultWeekStartDay' => 1,
        'omitScriptNameInUrls' => true,
        'generateTransformsBeforePageLoad' => true,
        'baseUrl' => 'https://uwcblogs.com/',
        'siteUrl' => 'https://uwcblogs.com',
    ),

    '.dev' => array(
        'devMode' => true,
        'enableTemplateCaching' => false,
        'testToEmailAddress' => 'madebyconnor@icloud.com',
        'userSessionDuration' => 'P2W',
        'baseUrl' => 'https://uwcblogs.dev/',
        'siteUrl' => 'https://uwcblogs.dev',
    ),
);
