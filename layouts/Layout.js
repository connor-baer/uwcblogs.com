import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Footer, Navigation, Prefooter, withStyles } from 'change';

const Layout = ({
  navigation,
  sidebar,
  prefooter,
  footer,
  children,
  styles: { breakpoints }
}) => (
  <div>
    {navigation && <Navigation hasSidebar={sidebar} />}
    <main className={classNames({ 'has-sidebar': sidebar })}>
      {children}
      <style jsx>{`
        main {
          min-height: 60vh;
          padding-top: 3.75rem;
        }

        .has-sidebar {
          width: 100vw;

          @media (min-width: ${breakpoints.large}) {
            width: 50vw;
          }
        }
      `}</style>
    </main>
    {prefooter && <Prefooter hasSidebar={sidebar} />}
    {footer && <Footer hasSidebar={sidebar} />}
  </div>
);

Layout.propTypes = {
  navigation: PropTypes.bool,
  sidebar: PropTypes.bool,
  prefooter: PropTypes.bool,
  footer: PropTypes.bool
};

Layout.defaultProps = {
  navigation: false,
  sidebar: false,
  prefooter: false,
  footer: false
};

export default withStyles(Layout);
