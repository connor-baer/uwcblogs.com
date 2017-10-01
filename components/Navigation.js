import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import classNames from 'classnames';
import Link from './Link';
import Svg from './Svg';
import Logo from './Logo';
import { animations, breakpoints, colors, fonts } from '../styles';

class Navigation extends Component {
  componentDidMount() {
    console.log('Navigation mounted');
  }

  render() {
    const { domain, name, isHome, links, router, hasSidebar } = this.props;
    return (
      <header
        className={classNames('navigation', {
          'navigation--sidebar': hasSidebar
        })}
      >
        <div className="l-ctnr l-flex">
          <Logo domain={domain} name={name} isHome={isHome} />

          <nav>
            <ul>
              {links.map((link, i) => {
                const { url, label } = link;
                const isActive = router.pathname === url;
                return (
                  <li key={i}>
                    <Link href={url} prefetch>
                      <a className={isActive ? 'active' : ''}>{label}</a>
                    </Link>
                  </li>
                );
              })}

              <li>
                <button
                  title="Toggle darkmode"
                  onClick={() => toggleDarkness()}
                >
                  <Svg sprite="site" name="moon" width={24} height={24} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <style jsx>{`
          .navigation {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            align-items: center;
            max-width: 100vw;
            padding: 1rem 0;
            transition: box-shadow ${animations.short},
              background-color ${animations.short}, padding ${animations.short},
              transform ${animations.medium}, opacity ${animations.medium},
              visibility ${animations.medium};
            background-color: ${colors.white};
            z-index: 999;
          }

          .navigation--sidebar {
            width: 100vw;

            @media (min-width: ${breakpoints.large}) {
              width: 50vw;
            }
          }

          ul {
            display: inline-flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
          }

          li {
            display: inline-block;
            padding: 0 1rem;
          }

          a {
            font-size: ${fonts.size.s1};
            color: ${colors.gray[6]};
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: background-color ${animations.medium},
              color ${animations.medium};

            &:hover,
            &:focus {
              color: ${colors.primary};
            }

            &.active {
              color: ${colors.gray[8]};
            }
          }

          button {
            display: inline-block;
            padding: 0;
            transition: fill ${animations.medium};
            border: 0;
            outline: none;
            background-color: transparent;
            cursor: pointer;
            vertical-align: middle;
            z-index: 999;
            fill: ${colors.gray[6]};

            &:hover {
              fill: ${colors.primary};
            }
          }
        `}</style>
      </header>
    );
  }
}

Navigation.propTypes = {
  siteUrl: PropTypes.string,
  siteName: PropTypes.string,
  isHome: PropTypes.bool,
  hasSidebar: PropTypes.bool,
  links: PropTypes.array,
  router: PropTypes.object
};

Navigation.defaultProps = {
  isHome: false,
  hasSidebar: false,
  links: []
};

export default withRouter(Navigation);
