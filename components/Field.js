import { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import classNames from 'classnames';
import { animations, colors, fonts } from '../styles';

export default class Field extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    error: PropTypes.string,
    valid: PropTypes.bool,
    focus: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    required: false,
    disabled: false,
    valid: true
  };

  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      isValid: true,
      error: ''
    };
  }

  handleFocus = () => {
    this.setState(() => ({
      hasFocus: true
    }));
  };

  handleBlur = () => {
    this.setState(() => ({
      hasFocus: false
    }));
  };

  render() {
    const {
      name,
      value,
      label,
      error,
      valid,
      required,
      disabled,
      children
    } = this.props;
    const { hasFocus } = this.state;
    const validate = !hasFocus && !isEmpty(value);
    return (
      <div
        className={classNames({
          hasFocus,
          isDisabled: disabled,
          isValid: validate && valid,
          isInvalid: validate && !valid
        })}
      >
        <label htmlFor={name} className="label">
          {label}
          {required && ' *'}
        </label>
        {cloneElement(children, {
          ...this.props,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        })}
        {validate && <span className="error">{error}</span>}
        <style jsx>{`
          div {
            display: inline-block;
            position: relative;
            width: 100%;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            padding: 0.75rem 1rem 0.6rem;
            border: 1px solid ${colors.gray[4]};
            border-radius: 3px;
            background-color: ${colors.white};
            transition: border ${animations.short};

            &.hasFocus {
              border-color: ${colors.primary};
              outline: none;
            }

            &.isDisabled {
              opacity: 0.66;
              pointer-events: none;
              cursor: not-allowed;
            }

            &.isValid {
              border-color: ${colors.green[6]};
            }

            &.isInvalid {
              border-color: ${colors.red[6]};
            }
          }

          .label,
          .error {
            font-size: ${fonts.size.s1};
            display: block;
            transition: color ${animations.short};
          }

          .label {
            color: ${colors.gray[7]};
            margin-bottom: 3px;
          }

          .error {
            color: ${colors.red[6]};
          }

          .hasFocus {
            & .label {
              color: ${colors.primary};
            }
          }

          .isValid {
            & .label,
            & .error {
              color: ${colors.green[6]};
            }
          }

          .isInvalid {
            & .label {
              color: ${colors.gray[6]};
            }
          }
        `}</style>
      </div>
    );
  }
}
