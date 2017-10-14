import { Component } from 'react';
import PropTypes from 'prop-types';

class SiteProvider extends Component {
  getChildContext() {
    return { site: this.props.site };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

const SiteContext = {
  site: PropTypes.shape({
    name: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    navigation: PropTypes.array.isRequired,
    prefooterBody: PropTypes.string,
    prefooterButtonLabel: PropTypes.string,
    prefooterButtonUrl: PropTypes.string
  })
};

SiteProvider.propTypes = SiteContext;

SiteProvider.childContextTypes = SiteContext;

export { SiteProvider, SiteContext };
