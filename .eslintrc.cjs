// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = require('@sumup-oss/foundry/eslint')({
  overrides: [
    {
      files: ['*'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
});
