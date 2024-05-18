// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = require('@sumup-oss/foundry/prettier')({
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.mdx',
      options: {
        semi: false,
      },
    },
  ],
});
