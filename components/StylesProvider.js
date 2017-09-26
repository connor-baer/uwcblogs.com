import { Component } from 'react';
import PropTypes from 'prop-types';
import oc from 'open-color/open-color.json';

class StylesProvider extends Component {
  getChildContext() {
    return {
      styles: {
        animations: {
          short: '.14s cubic-bezier(0, 0, .2, 1)',
          medium: '.28s cubic-bezier(0, 0, .2, 1)',
          long: '.49s cubic-bezier(0, 0, .2, 1)'
        },
        breakpoints: {
          small: '20em',
          medium: '40em',
          large: '60em',
          wide: '80em',
          mega: '100em'
        },
        colors: {
          ...oc,
          primary: '#1fb7e3',
          secondary: '#00ccd2'
        },
        fonts: {
          family: {
            sans: '"Overpass", Arial, sans-serif',
            serif: '"Lora", Georgia, serif',
            mono: '"Overpass Mono", Courier, monospace'
          },
          size: {
            t4: '2.5rem',
            t3: '2rem',
            t2: '1.5rem',
            t1: '1.25rem',
            base: '1rem',
            s0: '1rem',
            s1: '0.75rem'
          },
          weight: {
            light: 300,
            normal: 400,
            bold: 700
          },
          lineHeight: {
            large: 1.75,
            normal: 1.33,
            small: 1.15
          }
        }
      }
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

const StylesContext = {
  styles: PropTypes.object
};

StylesProvider.propTypes = StylesContext;

StylesProvider.childContextTypes = StylesContext;

export { StylesProvider, StylesContext };
