import { Component } from 'react';
import PropTypes from 'prop-types';
import { colors, fonts } from '../styles';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentWillReceiveProps() {
    this.setState(() => ({ visible: false }));
    this.timer = setTimeout(
      () => this.setState(() => ({ visible: true })),
      this.props.timer
    );
  }

  componentWillUnmount() {
    this.setState(() => ({ visible: false }));
    clearTimeout(this.timer);
  }

  render() {
    const { label, active } = this.props;
    const { visible } = this.state;

    if (!active || !visible) {
      return null;
    }

    return (
      <span>
        {label}
        <style jsx>{`
          @keyframes rotateSpinner {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(359deg);
            }
          }

          span {
            display: block;
            font-size: ${fonts.size.s1};
            margin: 1.5rem 0;
            line-height: 0;
            color: ${colors.gray[6]};

            &::before {
              display: inline-block;
              content: '';
              border: 2px solid ${colors.gray[4]};
              border-top: 2px solid ${colors.primary};
              border-radius: 50%;
              animation: rotateSpinner 0.5s infinite linear;
              transform-origin: 50% 50%;
              width: 1em;
              height: 1em;
              margin-right: 0.25rem;
            }
          }
        `}</style>
      </span>
    );
  }
}

Spinner.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  timer: PropTypes.number
};

Spinner.defaultProps = {
  label: 'Loading...',
  active: false,
  timer: 2000
};

export default Spinner;
