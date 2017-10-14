import PropTypes from 'prop-types';
import { SiteProvider } from 'providers/SiteProvider';
import { StylesProvider } from 'providers/StylesProvider';
import Meta from './Meta';

const Site = ({ site, title, index, follow, children }) => (
  <SiteProvider site={site}>
    <StylesProvider>
      <Meta title={title} index={index} follow={follow} />
      {children}
    </StylesProvider>
  </SiteProvider>
);

Site.propTypes = {
  title: PropTypes.string,
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired
  }),
  index: PropTypes.bool,
  follow: PropTypes.bool
};

Site.defaultProps = {
  title: '',
  index: true,
  follow: true
};

export default Site;
