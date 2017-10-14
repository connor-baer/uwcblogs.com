import PropTypes from 'prop-types';
import { SiteProvider } from 'providers/SiteProvider';
import { StylesProvider } from 'providers/StylesProvider';
import Meta from './Meta';

const Site = ({ site, title, index, follow, head, children }) => (
  <SiteProvider site={site}>
    <StylesProvider>
      <Meta title={title} index={index} follow={follow} head={head} />
      {children}
    </StylesProvider>
  </SiteProvider>
);

Site.propTypes = {
  title: PropTypes.string,
  index: PropTypes.bool,
  follow: PropTypes.bool,
  head: PropTypes.element,
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired
  })
};

Site.defaultProps = {
  title: '',
  index: true,
  follow: true
};

export default Site;
