import { Component } from 'react';
import PropTypes from 'prop-types';
import { StylesContext } from './StylesProvider';

export default function withStyles(WrappedComponent) {
  return class extends Component {
    static contextTypes = StylesContext;

    render() {
      return <WrappedComponent styles={this.context.styles} {...this.props} />;
    }
  };
}
