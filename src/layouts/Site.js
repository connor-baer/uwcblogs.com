import PropTypes from 'prop-types';
import SiteContext from '../context/SiteContext';
import Meta from './Meta';

const Site = ({ site, title, index, follow, head, children }) => (
  <SiteContext.Provider value={site}>
    <Meta title={title} index={index} follow={follow} head={head} />
    {children}
  </SiteContext.Provider>
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
