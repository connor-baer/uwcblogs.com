<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/connorbaer/GitHub/uwc-bloglist/user/config/site.yaml',
    'modified' => 1454617008,
    'data' => [
        'title' => 'UWC Bloglist',
        'author' => [
            'name' => 'Connor Bär',
            'email' => 'connor.baer@me.com'
        ],
        'taxonomies' => [
            0 => 'category',
            1 => 'tag'
        ],
        'metadata' => [
            'description' => 'A collection of over 300 blogs in 20 languages written by UWC students from more than 55 countries at the 15 United World Colleges.'
        ],
        'summary' => [
            'enabled' => true,
            'format' => 'short',
            'size' => 300,
            'delimiter' => '==='
        ],
        'redirects' => [
            '/redirect-test' => '/',
            '/old/(.*)' => '/new/$1'
        ],
        'routes' => [
            '/something/else' => '/blog/sample-3',
            '/new/(.*)' => '/blog/$1'
        ],
        'blog' => [
            'route' => '/blog'
        ]
    ]
];
