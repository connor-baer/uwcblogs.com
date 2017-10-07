import PropTypes from 'prop-types';
import Link from './Link';
import { animations, colors, fonts } from '../styles';

const Logo = ({ name }) => (
  <div>
    <Link route="index" prefetch>
      <a title="Home">{name}</a>
    </Link>
    <style jsx>{`
      a {
        padding: 0 1rem;
        font-size: 1.5rem;
        display: inline-block;
        transition: color ${animations.short};
        color: ${colors.gray[9]};
        font-family: ${fonts.family.sans};
        font-weight: ${fonts.weight.bold};
        line-height: 1;
        vertical-align: middle;
      }

      a:hover,
      a:focus {
        color: ${colors.primary};

        & img {
          transform: scale(1.1);
        }
      }

      img {
        display: inline-block;
        height: 2rem;
        min-height: 36px;
        margin-right: 0.75rem;
        transition: transform ${animations.short};
        vertical-align: middle;
      }
    `}</style>
  </div>
);

Logo.propTypes = {
  name: PropTypes.string
};

export default Logo;
