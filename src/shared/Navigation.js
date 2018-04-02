import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { flow } from 'lodash';
import { withRouter } from 'next/router';
import withStyles from './withStyles';
import withSite from './withSite';
import Link from './Link';
import Svg from './Svg';
import Logo from './Logo';

class Navigation extends Component {
  componentDidMount() {
    console.log('Navigation mounted');
  }

  render() {
    const { router, hasSidebar, site, styles } = this.props;
    const { name, navigation = [] } = site;
    const { animations, breakpoints, colors, fonts } = styles;
    return (
      <header className={classNames({ hasSidebar })}>
        <div className="l-ctnr l-flex">
          <Logo name={name} />

          <nav>
            <ul>
              {navigation.map((link, i) => {
                const { route, href, label } = link;
                const isActive = router.pathname === route;
                return (
                  <li key={i}>
                    <Link route={route} href={href} prefetch>
                      <a className={isActive ? 'active' : ''}>{label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <style jsx>{`
          header {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            align-items: center;
            max-width: 100vw;
            padding: 1.5rem 0;
            transition: box-shadow ${animations.short},
              background-color ${animations.short}, padding ${animations.short},
              transform ${animations.medium}, opacity ${animations.medium},
              visibility ${animations.medium};
            background-color: ${colors.white};
            z-index: 999;
          }

          .hasSidebar {
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
  site: PropTypes.object,
  hasSidebar: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired
};

export default flow(withRouter, withSite, withStyles)(Navigation);
