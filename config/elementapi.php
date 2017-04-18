<?php

use craft\elements\Entry;
use craft\elements\Category;
use craft\elements\Tag;
use craft\helpers\UrlHelper;

return [
    'defaults' => [
        'paginate' => true,
        'elementsPerPage' => 80,
    ],

    'endpoints' => [
        'api/colleges.json' => [
            'elementType' => Category::class,
            'criteria' => [
                'group' => 'colleges',
            ],
            'transformer' => function (Category $category) {
                return [
                    'title' => $category->title,
                    'id' => $category->id,
                ];
            },
        ],
        'api/countries.json' => [
            'elementType' => Tag::class,
            'criteria' => [
                'group' => 'blogCountries',
            ],
            'transformer' => function (Tag $tag) {
                return [
                    'title' => $tag->title,
                    'id' => $tag->id,
                ];
            },
        ],
        'api/languages.json' => [
            'elementType' => Tag::class,
            'criteria' => [
                'group' => 'blogLanguages',
            ],
            'transformer' => function (Tag $tag) {
                return [
                    'title' => $tag->title,
                    'id' => $tag->id,
                ];
            },
        ],
        'api/blogs.json' => [
            'elementType' => Entry::class,
            'criteria' => [
                'section' => 'blogs',
                'orderBy' => 'blogFirstName',
            ],
            'transformer' => function (Entry $entry) {
                $blogCountries = [];
                $blogLanguages = [];

                foreach ($entry['blogCountries'] as $blogCountry) {
                    $blogCountries[] = $blogCountry['title'];
                }

                foreach ($entry['blogLanguages'] as $blogLanguage) {
                    $blogLanguages[] = $blogLanguage['title'];
                }

                return [
                    'firstName' => $entry['blogFirstName'],
                    'college' => $entry['blogCollege'][0]['title'],
                    'url' => $entry['blogLink'],
                    'countries' => implode(', ', $blogCountries),
                    'languages' => implode(', ', $blogLanguages),
                    'year' => $entry['blogYear'],
                ];
            },
        ],
        'api/blogs/<collegeId:\d+>.json' => function ($collegeId) {
            return [
                'elementType' => Entry::class,
                'criteria' => [
                    'relatedTo' => $collegeId,
                    'section' => 'blogs',
                    'orderBy' => 'blogFirstName',
                ],
                'transformer' => function (Entry $entry) {
                    $blogCountries = [];
                    $blogLanguages = [];

                    foreach ($entry['blogCountries'] as $blogCountry) {
                        $blogCountries[] = $blogCountry['title'];
                    }

                    foreach ($entry['blogLanguages'] as $blogLanguage) {
                        $blogLanguages[] = $blogLanguage['title'];
                    }

                    return [
                        'firstName' => $entry['blogFirstName'],
                        'college' => $entry['blogCollege'][0]['title'],
                        'url' => $entry['blogLink'],
                        'countries' => implode(', ', $blogCountries),
                        'languages' => implode(', ', $blogLanguages),
                        'year' => $entry['blogYear'],
                    ];
                },
            ];
        }
    ]
];
