import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import { Router } from '../server/routes/next';
import Meta from './Meta';
import Navigation from 'change/Navigation';
import Footer from 'change/Footer';
import { colors } from 'styles';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Site = ({ title, site, children, sidebar }) => {
  const { name, navigation } = site;
  return (
    <div>
      <Meta title={title} name={name} />
      <Navigation name={name} links={navigation} hasSidebar={sidebar} />

      {Children.map(children, child => cloneElement(child, { sidebar }))}

      <Footer name={name} email="hello@connorbaer.co" hasSidebar={sidebar} />
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
};

Site.propTypes = {
  title: PropTypes.string,
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired
  }),
  sidebar: PropTypes.bool,
  index: PropTypes.bool,
  follow: PropTypes.bool
};

Site.defaultProps = {
  title: '',
  sidebar: false,
  index: true,
  follow: true
};

export default Site;
