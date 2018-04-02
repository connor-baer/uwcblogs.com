import { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import SiteContext from '../context/SiteContext';

class Meta extends Component {
  static propTypes = {
    title: PropTypes.string,
    index: PropTypes.bool,
    follow: PropTypes.bool,
    head: PropTypes.element
  };

  componentDidMount() {
    if (typeof window === 'undefined') {
      return;
    }
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .catch(err => console.error('Service worker registration failed', err));
    } else {
      console.log('Service worker not supported');
    }
    const mssgMe = document.createElement('script');
    mssgMe.setAttribute('src', 'https://mssg.me/widget/connor');
    document.head.appendChild(mssgMe);

    const ga = document.createElement('script');
    ga.setAttribute(
      'src',
      'https://www.googletagmanager.com/gtag/js?id=UA-37412525-3'
    );
    document.head.appendChild(ga);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-37412525-3');
  }

  render() {
    const { title, index, follow, head } = this.props;
    const pageTitle = title ? `${title} — ` : '';
    return (
      <SiteContext.Consumer>
        {site => (
          <Head>
            <title>{`${pageTitle}${site.name}`}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
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
        )}
      </SiteContext.Consumer>
    );
  }
}

export default Meta;
