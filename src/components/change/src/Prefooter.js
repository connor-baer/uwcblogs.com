import PropTypes from 'prop-types';
import classNames from 'classnames';
import { flow } from 'lodash';
import withSite from './withSite';
import withStyles from './withStyles';
import Link from './Link';

const Prefooter = ({ hasSidebar, site, styles }) => {
  const {
    prefooterBody: body,
    prefooterButtonLabel: label,
    prefooterButtonUrl: url
  } = site;
  if (!body && (!label || !url)) {
    return null;
  }
  const { animations, breakpoints, colors, fonts } = styles;
  return (
    <section className={classNames({ hasSidebar })}>
      <h4>
        {body && `${body}&ensp;`}
        <Link route={url}>
          <a>{label}</a>
        </Link>
      </h4>
      <style jsx>{`
        section {
          background-color: ${colors.gray[0]};
          padding-top: 3rem;
          padding-bottom: 3rem;
          text-align: center;

          &.hasSidebar {
            width: 100vw;

            @media (min-width: ${breakpoints.large}) {
              width: 50vw;
            }
          }
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
};

Prefooter.propTypes = {
  site: PropTypes.object,
  hasSidebar: PropTypes.bool.isRequired
};

export default flow(withSite, withStyles)(Prefooter);
