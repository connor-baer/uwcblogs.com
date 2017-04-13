<?php

return [
		'images' => [
				'path' => getenv( 'ASSETS_BASE_PATH' ) . 'img',
				'url' => getenv( 'ASSETS_BASE_URL' ) . 'img',
		],
		'videos' => [
				'path' => getenv( 'ASSETS_BASE_PATH' ) . 'vid',
				'url' => getenv( 'ASSETS_BASE_URL' ) . 'vid',
		],
		'documents' => [
				'path' => getenv( 'ASSETS_BASE_PATH' ) . 'doc',
				'url' => getenv( 'ASSETS_BASE_URL' ) . 'doc',
		],
];
