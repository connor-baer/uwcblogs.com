import PropTypes from 'prop-types';
import withStyles from './withStyles';

const Input = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  autoComplete,
  required,
  disabled,
  styles: { animations, colors, fonts }
}) => (
  <div>
    <input
      id={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete={autoComplete ? 'on' : 'off'}
      required={required}
      disabled={disabled}
    />
    <style jsx>{`
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

        &:invalid,
        &:required {
          box-shadow: none;
        }
      }
    `}</style>
  </div>
);

Input.propTypes = {
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
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  autoComplete: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  valid: PropTypes.bool
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  autoComplete: true,
  required: false,
  disabled: false,
  valid: true
};

export default withStyles(Input);
