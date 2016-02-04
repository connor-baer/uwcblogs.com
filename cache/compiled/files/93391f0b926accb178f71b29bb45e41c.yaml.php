<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => 'plugins://login/login.yaml',
    'modified' => 1454615852,
    'data' => [
        'enabled' => true,
        'built_in_css' => true,
        'route' => false,
        'route_register' => false,
        'route_activate' => '/activate_user',
        'route_forgot' => '/forgot_password',
        'route_reset' => '/reset_password',
        'redirect' => NULL,
        'parent_acl' => false,
        'user_registration' => [
            'enabled' => true,
            'fields' => [
                0 => 'username',
                1 => 'password',
                2 => 'email',
                3 => 'fullname',
                4 => 'title',
                5 => 'access',
                6 => 'state'
            ],
            'additional_params' => [
                'access' => 'site.login'
            ],
            'options' => [
                'validate_password1_and_password2' => true,
                'set_user_disabled' => false,
                'login_after_registration' => true,
                'send_activation_email' => false,
                'send_notification_email' => false,
                'send_welcome_email' => false
            ]
        ],
        'rememberme' => [
            'enabled' => true,
            'timeout' => 1800,
            'name' => 'grav-rememberme'
        ],
        'oauth' => [
            'enabled' => false,
            'user' => [
                'autocreate' => false,
                'access' => [
                    'site' => [
                        'login' => true
                    ]
                ]
            ],
            'providers' => [
                'Facebook' => [
                    'enabled' => false,
                    'credentials' => [
                        'key' => NULL,
                        'secret' => NULL
                    ]
                ],
                'Google' => [
                    'enabled' => false,
                    'credentials' => [
                        'key' => NULL,
                        'secret' => NULL
                    ]
                ],
                'GitHub' => [
                    'enabled' => false,
                    'credentials' => [
                        'key' => NULL,
                        'secret' => NULL
                    ]
                ],
                'Twitter' => [
                    'enabled' => false,
                    'credentials' => [
                        'key' => NULL,
                        'secret' => NULL
                    ]
                ]
            ]
        ]
    ]
];
