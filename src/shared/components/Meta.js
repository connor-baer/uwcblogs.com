import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({ siteName, title, index, follow, head }) => (
  <Head>
    <title>{title || siteName}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="robots"
      content={`${index ? 'index' : 'noindex'}, ${follow
        ? 'follow'
        : 'nofollow'}`}
    />
    <meta
      name="google-site-verification"
      content="UXWTlQN6FmtFKirHUeXDKh13WSjo_v5g21dRjbhqMNw"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicons/favicon-96x96.png"
    />
    {head}
  </Head>
);

Meta.propTypes = {
  siteName: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.bool,
  follow: PropTypes.bool,
  head: PropTypes.element
};

Meta.propTypes = {
  siteName: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.bool,
  follow: PropTypes.bool,
  head: PropTypes.element
};

export default Meta;
