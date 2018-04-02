import { Component } from 'react';
import { SiteContext } from 'providers/SiteProvider';

export default function withSite(WrappedComponent) {
  return class extends Component {
    static contextTypes = SiteContext;

    render() {
      const { site } = this.context;
      return <WrappedComponent site={site} {...this.props} />;
    }
  };
}
