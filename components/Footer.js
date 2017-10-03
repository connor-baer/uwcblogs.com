import PropTypes from 'prop-types';
import classNames from 'classnames';
import { breakpoints, colors, fonts, animations } from '../styles';

const Footer = ({ name, hasSidebar }) => (
  <footer className={classNames({ hasSidebar })}>
    <small className="l-w100">
      <span>
        {`© ${new Date().getFullYear()} ${name}. All rights reserved.`}
      </span>·<span>
        <a href="/disclaimer">Disclaimer</a>
      </span>
    </small>
    <style jsx>{`
      footer {
        background-color: ${colors.gray[0]};
      }

      .hasSidebar {
        width: 100vw;

        @media (min-width: ${breakpoints.large}) {
          width: 50vw;
        }
      }

      small {
        display: block;
        margin: 0;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-top: 1px solid ${colors.gray[3]};
        color: ${colors.gray[4]};
        font-size: ${fonts.size.s1};
        font-weight: ${fonts.weight.light};
        letter-spacing: 0.5px;
        text-align: center;

        & span {
          display: inline-block;
          padding: 0 0.5em;
        }

        & a {
          transition: color ${animations.short};
          text-decoration: underline;

          &:hover,
          &:focus {
            color: ${colors.primary};
          }
        }
      }
    `}</style>
  </footer>
);

Footer.propTypes = {
  name: PropTypes.string,
  hasSidebar: PropTypes.bool
};

export default Footer;
