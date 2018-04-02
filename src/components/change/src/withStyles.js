import { Component } from 'react';
import { StylesContext } from 'providers/StylesProvider';

export default function withStyles(WrappedComponent) {
  return class extends Component {
    static contextTypes = StylesContext;

    render() {
      const { styles } = this.context;
      return <WrappedComponent styles={styles} {...this.props} />;
    }
  };
}
