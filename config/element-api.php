<?php
/**
 * API for uwcblogs.com
 *
 * The API follows the pattern: api/[items]?[params]
 *
 * @link      https://uwcblogs.com
 * @copyright Copyright (c) 2017 Connor Bär
 */

use craft\elements\Entry;
use craft\elements\Category;
use craft\elements\Tag;

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
            'cache' => 43200,
            'transformer' => function (Category $category) {
                return [
                    'title' => $category->title,
                    'id' => $category->id,
                    'description' => $category->description,
                    'website' => $category->website,
                ];
            },
        ],
        'api/countries.json' => [
            'elementType' => Tag::class,
            'criteria' => [
                'group' => 'blogCountries',
            ],
            'cache' => 43200,
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
            'cache' => 43200,
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
            'cache' => 43200,
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
                    'lastName' => $entry['blogLastName'],
                    'email' => $entry['blogEmailAddress'],
                    'college' => $entry['blogCollege'][0]['title'],
                    'url' => $entry['blogLink'],
                    'countries' => implode(', ', $blogCountries),
                    'languages' => implode(', ', $blogLanguages),
                    'year' => $entry['blogYear'],
                ];
            },
        ],
        'api/blogs/<collegeSlug:{slug}>.json' => function ($collegeSlug) {
            $category = Category::find()->slug($collegeSlug)->one();

            return [
                'elementType' => Entry::class,
                'criteria' => [
                    'relatedTo' => $category,
                    'section' => 'blogs',
                    'orderBy' => 'blogFirstName',
                ],
                'cache' => 43200,
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
