<?php
/**
 * Craft web bootstrap file
 */

// Project root path
$root = dirname(__DIR__);

// Load and run Craft
define( 'CRAFT_BASE_PATH', $root );

// Composer autoloader.
require_once $root.'/vendor/autoload.php';

$app = require $root.'/vendor/craftcms/cms/bootstrap/web.php';
$app->run();
