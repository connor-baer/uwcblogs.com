/* eslint-disable import/no-extraneous-dependencies */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
/* eslint-enable import/no-extraneous-dependencies */

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static'
  }
};

const nextConfig = {
  distDir: '../dist'
};

module.exports = withPlugins(
  [
    [
      withBundleAnalyzer,
      {
        analyzeServer: !!process.env.BUNDLE_ANALYZE,
        analyzeBrowser: !!process.env.BUNDLE_ANALYZE,
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'server',
            analyzerPort: 8889,
            openAnalyzer: true
          },
          browser: {
            analyzerMode: 'server',
            analyzerPort: 8890,
            openAnalyzer: true
          }
        }
      }
    ]
  ],
  nextConfig
);
