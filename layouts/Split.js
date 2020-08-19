import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Main, Header, propTypes } from '@madebyconnor/bamboo-ui';

import SplitImage from '../components/SplitImage';

const Content = styled.div(
  ({ theme }) => css`
    padding: 0 ${theme.spacing.s};

    ${theme.mq.hand} {
      padding: 0 ${theme.spacing.xxxxl};
    }

    ${theme.mq.lap} {
      padding: 0 ${theme.spacing.l};
    }

    ${theme.mq.desk} {
      padding: 0 ${theme.spacing.xxxxl};
    }
  `,
);

export function Split({ title, subtitle, image, children }) {
  return (
    <>
      <Main variant={Main.SPLIT}>
        <Content>
          <Header title={title} subtitle={subtitle} size="xl" />

          {children}
        </Content>
      </Main>
      <SplitImage {...image} />
    </>
  );
}

Split.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.shape(propTypes.imagePropType),
  children: PropTypes.node,
};
