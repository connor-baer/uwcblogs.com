import PropTypes from 'prop-types';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from '../server/lib/routes';
import Styles from './Styles';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Meta = ({ title, name, index = true, follow = true }) => (
  <div>
    <Head>
      <title>{`${title || 'Hi there'} · ${name}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="robots"
        content={`${index ? 'index' : 'noindex'}, ${follow
          ? 'follow'
          : 'nofollow'}`}
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/favicons/favicon-96x96.png"
      />
    </Head>
    <Styles />
  </div>
);

Meta.propTypes = {
  title: PropTypes.string,
  index: PropTypes.bool,
  follow: PropTypes.bool
};

export default Meta;
