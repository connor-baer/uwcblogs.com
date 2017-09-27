import { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import { Router } from '../server/lib/routes';
import Meta from './Meta';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { animations, colors, fonts } from '../styles';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Site extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: props.sidebar
    };
  }

  render() {
    const { title, site, children } = this.props;
    const { sidebar } = this.state;
    const { name, domain } = site;
    return (
      <div>
        <Meta title={title} name={name} />
        <Navigation name={name} domain={domain} sidebar={sidebar} />

        {Children.map(children, child =>
          cloneElement(child, { sidebar: this.state.sidebar })
        )}

        <Footer />
        <style jsx>{`
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

Site.propTypes = {
  title: PropTypes.string,
  site: PropTypes.shape({
    name: PropTypes.string,
    domain: PropTypes.string
  }),
  sidebar: PropTypes.bool,
  index: PropTypes.bool,
  follow: PropTypes.bool
};

export default Site;
