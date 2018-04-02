/* eslint-disable import/no-extraneous-dependencies */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
/* eslint-enable import/no-extraneous-dependencies */

const withCircuitUI = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    webpack: (config, options) => {
      const { isServer, defaultLoaders } = options;

      if (!isServer) {
        // Include circuit-ui in transpilation
        config.module.rules.push({
          test: /\.(js|jsx)$/,
          loader: defaultLoaders.babel,
          exclude: [/node_modules(?!\/circuit-ui)/]
        });

        // Import SVGs as React components
        config.module.rules.push({
          test: /\.svg$/,
          use: [
            { loader: 'babel-loader' },
            {
              loader: 'react-svg-loader',
              options: {
                es5: true
              }
            }
          ]
        });
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });

const nextConfig = {
  distDir: '../dist',
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static'
  },
  transpileModules: ['circuit-ui']
};

module.exports = withPlugins(
  [
    withCircuitUI,
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
