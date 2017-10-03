import PropTypes from 'prop-types';
import classNames from 'classnames';
import { breakpoints, colors, fonts } from '../styles';
import Image from './Image';

const Header = ({ title, subtitle, image, children }) => (
  <section className="l-ctnr">
    <header className="l-w100">
      <h1 className={classNames({ color: subtitle })}>{`${title}  `}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      {children}

      {image && (
        <figure>
          <Image
            src={image.file.url}
            sizes="(min-width: 60em) 50vw"
            alt={image.description}
            responsive
            cover
          />
        </figure>
      )}
    </header>

    <style jsx>{`
      header {
        max-width: calc(60rem / 4 * 3);
        margin-top: 3rem;
        margin-bottom: 3rem;

        @media (min-width: ${breakpoints.medium}) {
          margin-top: 5rem;
          margin-bottom: 5rem;
        }
      }

      h1 {
        font-size: ${fonts.size.t3};
        font-weight: ${fonts.weight.bold};

        &.color {
          color: ${colors.primary};
        }
      }

      h2 {
        font-size: ${fonts.size.t3};
        color: ${colors.gray[8]};
        font-weight: ${fonts.weight.light};

        @media (max-width: ${breakpoints.medium}) {
          font-size: ${fonts.size.t2};
          margin-top: 0.5rem;
        }
      }

      h1,
      h2 {
        @media (min-width: ${breakpoints.medium}) {
          display: inline;
        }
      }

      .c-header__meta {
        font-size: ${fonts.size.s1};
        display: block;
        margin-top: 0.25rem;
        color: ${colors.gray[6]};
      }

      figure {
        @media (min-width: ${breakpoints.large}) {
          position: fixed !important;
          top: 0;
          right: 0;
          width: 50vw;
          height: 100vh;
          display: block;
        }

        display: none;
      }
    `}</style>
  </section>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    file: PropTypes.object
  }),
  children: PropTypes.node
};

export default Header;
