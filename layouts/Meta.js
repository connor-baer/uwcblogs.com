import { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import NProgress from 'nprogress';
import { Router } from '../server/routes/next';
import withSite from 'change/withSite';
import Styles from './Styles';
import { colors } from 'styles';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Meta extends Component {
  static propTypes = {
    title: PropTypes.string,
    index: PropTypes.bool,
    follow: PropTypes.bool,
    head: PropTypes.element,
    site: PropTypes.shape({
      name: PropTypes.string
    })
  };

  componentDidMount() {
    if (typeof window === 'undefined') {
      return;
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
    const { title, index, follow, head, site: { name } } = this.props;
    const pageTitle = title ? `${title} — ` : '';
    return (
      <div>
        <Head>
          <title>{`${pageTitle}${name}`}</title>
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
        <Styles />
        <style jsx global>{`
          #nprogress {
            pointer-events: none;

            & .bar {
              background: ${colors.primary};
              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
            }

            & .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              box-shadow: 0 0 10px ${colors.primary}, 0 0 5px ${colors.primary};
              opacity: 1;
              transform: rotate(3deg) translate(0px, -4px);
            }
          }
        `}</style>
      </div>
    );
  }
}

export default withSite(Meta);
