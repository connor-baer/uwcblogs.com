module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'jest'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': ['error', { functions: false }],
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
    'react/prop-types': [1, { ignore: ['i18n', 'children'] }],
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 0
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      ecmaVersion: 2017,
      impliedStrict: true,
      jsx: true
    }
  },
  env: {
    node: true
  },
  overrides: [
    {
      files: ['src/**/*spec.js'],
      rules: {
        'max-len': [
          'error',
          {
            code: 80,
            tabWidth: 2,
            ignorePattern: '^\\s*it\\(',
            ignoreComments: true,
            ignoreUrls: true
          }
        ]
      },
      globals: {
        axe: true,
        renderToHtml: true,
        describe: true,
        beforeEach: true,
        inject: true,
        it: true,
        test: true,
        expect: true,
        afterEach: true,
        mount: true,
        shallow: true,
        render: true,
        create: true
      },
      env: {
        'jest/globals': true
      }
    }
  ]
};
