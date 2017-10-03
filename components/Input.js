import { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { animations, colors, fonts } from '../styles';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      isValid: true,
      error: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { validator } = this.props;
    if (validator) {
      const validation = validator(nextProps.value);
      const { isValid, error } = validation;
      this.setState(() => ({ isValid, error }));
    }
  }

  handleFocus = e => {
    this.setState(() => ({
      hasFocus: true
    }));
    this.props.onFocus(e);
  };

  handleBlur = e => {
    this.setState(() => ({
      hasFocus: false
    }));
    this.props.onBlur(e);
  };

  render() {
    const {
      label,
      name,
      type,
      value,
      placeholder,
      onChange,
      validator,
      autoComplete,
      required,
      disabled
    } = this.props;
    const { hasFocus, isValid, error } = this.state;
    const validate = value && validator;
    return (
      <div
        className={classNames({
          hasFocus,
          isValid: validate && isValid,
          isInvalid: validate && !isValid
        })}
      >
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          autoComplete={autoComplete ? 'on' : 'off'}
          required={required}
          disabled={disabled}
        />
        {error && <span className="error">{error}</span>}
        <style jsx>{`
          div {
            display: inline-block;
            position: relative;
            width: 100%;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            padding: 0.75rem 1rem;
            border: 1px solid ${colors.gray[4]};
            border-radius: 4px;
            background-color: ${colors.white};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
            transition: border ${animations.short};

            &.hasFocus {
              border-color: ${colors.primary};
              outline: none;
            }

            &.isValid {
              border-color: ${colors.green[6]};
            }

            &.isInvalid {
              border-color: ${colors.red[6]};
            }
          }

          label,
          .error {
            font-size: ${fonts.size.s1};
            display: block;
            color: ${colors.gray[6]};
            transition: color ${animations.short};
          }

          .error {
            display: none;
            color: ${colors.red[6]};
            height: 0;
          }

          input {
            font-size: ${fonts.size.t1};
            display: block;
            width: 100%;
            padding: 0;
            transition: border-color ${animations.short};
            border: 0;
            outline: none;
            background-color: ${colors.white};
            color: ${colors.gray[9]};
            font-family: ${fonts.family.sans};
            resize: none;
          }

          .hasFocus {
            & label,
            & .error {
              color: ${colors.primary};
            }
          }

          .isValid {
            & label,
            & .error {
              color: ${colors.green[6]};
            }
          }

          .isInvalid {
            & label {
              color: ${colors.gray[6]};
            }

            & .error {
              color: ${colors.red[6]};
            }

            & .error {
              display: block;
              height: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'color',
    'date',
    'datetime-local',
    'email',
    'hidden',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week'
  ]),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  validator: PropTypes.func,
  autoComplete: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  onFocus: () => {},
  onBlur: () => {},
  autoComplete: true,
  required: false,
  disabled: false
};

export default Input;
