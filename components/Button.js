import PropTypes from 'prop-types';
import classNames from 'classnames';
import { animations, colors, fonts } from '../styles';

const Button = ({
  onClick,
  label,
  type,
  className,
  disabled = false,
  children
}) => {
  if (!label && !children) {
    return null;
  }
  const content = children || label;
  const classes = classNames(
    'btn',
    {
      'btn--disabled': disabled
    },
    className
  );
  return (
    <button onClick={onClick} type={type} title={content} className={classes}>
      {content}
      <style jsx>{`
        button {
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: ${fonts.size.s1};
          padding: 0.8rem 2.4rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          transition: transform ${animations.medium},
            border-color ${animations.medium}, box-shadow ${animations.medium},
            background-color ${animations.medium};
          border: 2px solid ${colors.primary};
          border-radius: 3px;
          outline: none;
          background-color: ${colors.primary};
          color: ${colors.white};
          line-height: 1;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
          cursor: pointer;

          &:hover,
          &:focus {
            color: ${colors.primary};
            background-color: transparent;
            box-shadow: none;
          }

          svg {
            fill: ${colors.white};
          }
        }

        .button--ghost {
          transition: background-color ${animations.medium};
          background-color: transparent;
          color: ${colors.primary};

          &:hover,
          &:focus {
            background-color: ${colors.secondary};
            color: ${colors.white};

            svg {
              fill: ${colors.white};
            }
          }

          svg {
            fill: ${colors.primary};
          }
        }
      `}</style>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
};

export default Button;
