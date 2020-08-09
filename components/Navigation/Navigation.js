import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  Navigation as BambooNavigation,
  Button,
  propTypes,
} from '@madebyconnor/bamboo-ui';

import { NAME } from '../../constants/site';

const navigationStyles = ({ theme }) => css`
  ${theme.mq.lap} {
    width: 50vw;
    padding: ${theme.spacing.m} ${theme.spacing.l};
  }

  ${theme.mq.desk} {
    padding: ${theme.spacing.m} ${theme.spacing.xxxxl};
  }
`;

const StyledNavigation = styled(BambooNavigation)(navigationStyles);

const menuWrapperStyles = () => css`
  display: flex;
  align-items: center;
`;

const MenuWrapper = styled('div')(menuWrapperStyles);

const buttonStyles = ({ theme }) => css`
  margin-top: ${theme.spacing.xxs};
`;

const StyledButton = styled(Button)(buttonStyles);

export function Navigation({ siteName = NAME, siteLogo, links }) {
  const router = useRouter();
  const isHomepage = router.asPath === '/';

  return (
    <StyledNavigation>
      <BambooNavigation.Brand
        siteName={siteName}
        siteLogo={siteLogo}
        isHomepage={isHomepage}
      />

      {links && <BambooNavigation.Links links={links} />}

      <MenuWrapper>
        <StyledButton href="/submit" variant={Button.SECONDARY}>
          Submit a blog
        </StyledButton>
        <BambooNavigation.Menu />
      </MenuWrapper>
    </StyledNavigation>
  );
}

Navigation.propTypes = {
  siteName: PropTypes.string,
  siteLogo: propTypes.childrenPropType,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: propTypes.childrenPropType,
      url: PropTypes.string,
      icon: propTypes.childrenPropType,
    }),
  ),
};
