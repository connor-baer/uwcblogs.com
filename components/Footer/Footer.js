import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import {
  Footer as BambooFooter,
  Anchor,
  propTypes,
} from '@madebyconnor/bamboo-ui';

import { AUTHOR } from '../../constants/site';

const footerStyles = ({ theme }) => css`
  ${theme.mq.lap} {
    width: 50vw;
  }
`;

const StyledFooter = styled(BambooFooter)(footerStyles);

export function Footer({ children, ...rest }) {
  const theme = useTheme();
  return (
    <StyledFooter siteName={AUTHOR} {...rest}>
      <Anchor href="/disclaimer" backgroundColor={theme.color.neutral[100]}>
        Disclaimer
      </Anchor>
      {children}
    </StyledFooter>
  );
}

Footer.propTypes = {
  children: propTypes.childrenPropType,
};
