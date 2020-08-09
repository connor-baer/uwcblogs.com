/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Text } from '@madebyconnor/bamboo-ui';

const Title = styled(Text)(
  ({ theme }) => css`
    margin-top: ${theme.spacing.m};
    margin-bottom: ${theme.spacing.xxs};
  `,
);

export const BlogGroup = ({ title, children }) => (
  <li>
    <Title as="h4" size="l">
      {title}
    </Title>
    <ul
      role="list"
      css={css`
        list-style: none;
      `}
    >
      {children}
    </ul>
  </li>
);

BlogGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
