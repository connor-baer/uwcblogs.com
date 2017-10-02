import PropTypes from 'prop-types';
import { animations, colors, fonts } from '../styles';

const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  autoComplete,
  required,
  disabled
}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete={autoComplete ? 'on' : 'off'}
      required={required}
      disabled={disabled}
    />
    <span />
    <style jsx>{`
      div {
        display: inline-block;
        position: relative;
        width: 100%;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        padding: 0.5rem 1rem;
        border: 1px solid ${colors.gray[4]};
        border-radius: 4px;
        background-color: ${colors.white};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);

        &.c-input--error {
          border-color: ${colors.red[6]};
        }
      }

      input[type='text'],
      input[type='search'],
      input[type='email'],
      input[type='password'],
      input[type='number'],
      input[type='url'],
      input[type='tel'] {
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

        &:focus {
          border-color: ${colors.primary};
          outline: none;

          ~ .c-form-icon {
            fill: ${colors.primary};
          }

          ~ .c-form-label {
            color: ${colors.primary};
          }

          ~ span {
            animation: inputHighlighter ${animations.long};
          }
        }
      }

      span {
        position: absolute;
        bottom: 0.5rem;
        left: 1rem;
        width: 50%;
        height: 1.5rem;
        opacity: 0.25;
        pointer-events: none;
      }

      @keyframes inputHighlighter {
        from {
          background: ${colors.primary[2]};
        }

        to {
          width: 0;

          background: transparent;
        }
      }

      label,
      .c-input__error {
        font-size: ${fonts.size.s1};

        display: block;

        color: ${colors.gray[6]};
      }

      .c-input__error {
        display: none;

        color: ${colors.red[6]};

        .c-input--error & {
          display: block;
        }
      }
    `}</style>
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week'
  ]),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  autoComplete: true,
  required: false,
  disabled: false
};

export default Input;
