<?php
ignore_user_abort( true );
set_time_limit( 0 );

$repo          = '/srv/users/serverpilot/apps/uwcblogs';
$branch        = 'master';
$output        = array();

// update github Repo
$output[] = date( 'Y-m-d, H:i:s', time() ) . "\n";
$output[] = "GitHub Pull\n============================\n" . shell_exec( 'cd ' . $repo . ' && git pull origin ' . $branch );

// redirect output to logs
file_put_contents( rtrim( getcwd(), '/' ) . '/_github-log.txt', implode( "\n", $output ) . "\n----------------------------\n", FILE_APPEND );
