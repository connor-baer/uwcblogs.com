import PropTypes from 'prop-types';
import Link from './Link';
import { animations, colors, fonts } from '../styles';

const Prefooter = ({ body, linkLabel, linkUrl }) => (
  <section className="prefooter">
    <h4>
      {body}&ensp;
      <Link route={linkUrl}>
        <a>{linkLabel}</a>
      </Link>
    </h4>
    <style jsx>{`
      section {
        background-color: ${colors.gray[0]};
        padding-top: 3rem;
        padding-bottom: 3rem;
        text-align: center;
      }

      h4 {
        font-size: ${fonts.size.t3};
      }

      a {
        transition: box-shadow ${animations.short};
        font-weight: ${fonts.weight.bold};
        color: ${colors.primary};

        &:hover,
        &:focus {
          box-shadow: inset 0 -0.08em 0 0 ${colors.primary};
        }
      }
    `}</style>
  </section>
);

Prefooter.propTypes = {
  body: PropTypes.string,
  linkLabel: PropTypes.string,
  linkUrl: PropTypes.string
};

export default Prefooter;
