const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const nextConfig = {
  poweredByHeader: false,
  images: {
    domains: ['images.ctfassets.net'],
  },
  webpack: (config, { dev, defaultLoaders }) => {
    // eslint-disable-next-line no-param-reassign
    config.node = {
      __filename: true,
      __dirname: true,
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'react-svg-loader',
          options: {
            es5: true,
          },
        },
      ],
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(dev),
        __PRODUCTION__: JSON.stringify(!dev),
        __TEST__: false,
      }),
    );

    return config;
  },
  async redirects() {
    return [
      {
        source: '/uwc-adriatic',
        destination: '/college/uwc-adriatic',
        permanent: true,
      },
      {
        source: '/uwc-atlantic',
        destination: '/college/uwc-atlantic',
        permanent: true,
      },
      {
        source: '/uwc-changshu',
        destination: '/college/uwc-changshu',
        permanent: true,
      },
      {
        source: '/uwc-costa-rica',
        destination: '/college/uwc-costa-rica',
        permanent: true,
      },
      {
        source: '/uwc-dilijan',
        destination: '/college/uwc-dilijan',
        permanent: true,
      },
      {
        source: '/uwc-isak-japan',
        destination: '/college/uwc-isak-japan',
        permanent: true,
      },
      {
        source: '/uwc-li-po-chun',
        destination: '/college/uwc-li-po-chun',
        permanent: true,
      },
      {
        source: '/uwc-maastricht',
        destination: '/college/uwc-maastricht',
        permanent: true,
      },
      {
        source: '/uwc-mahindra',
        destination: '/college/uwc-mahindra',
        permanent: true,
      },
      {
        source: '/uwc-mostar',
        destination: '/college/uwc-mostar',
        permanent: true,
      },
      {
        source: '/uwc-pearson-college',
        destination: '/college/uwc-pearson-college',
        permanent: true,
      },
      {
        source: '/uwc-red-cross-nordic',
        destination: '/college/uwc-red-cross-nordic',
        permanent: true,
      },
      {
        source: '/uwc-robert-bosch-college',
        destination: '/college/uwc-robert-bosch-college',
        permanent: true,
      },
      {
        source: '/uwc-south-east-asia',
        destination: '/college/uwc-south-east-asia',
        permanent: true,
      },
      {
        source: '/uwc-thailand',
        destination: '/college/uwc-thailand',
        permanent: true,
      },
      {
        source: '/uwc-usa',
        destination: '/college/uwc-usa',
        permanent: true,
      },
      {
        source: '/uwc-waterford-kamhlaba',
        destination: '/college/uwc-waterford-kamhlaba',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:all*',
        headers: [
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            key: 'X-Xss-Protection',
            value: '1',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Feature-Policy',
            value: "geolocation 'self'; microphone 'none'; camera 'none'",
          },
        ],
      },
    ];
  },
};

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === 'true',
};

module.exports = withPlugins(
  [[withBundleAnalyzer, bundleAnalyzerConfig]],
  nextConfig,
);
