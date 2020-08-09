/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Heading } from '@madebyconnor/bamboo-ui';

export const BlogSection = ({ title, children }) => (
  <section>
    <Heading as="h3" size="xl">
      {title}
    </Heading>
    <ul
      role="list"
      css={css`
        list-style: none;
      `}
    >
      {children}
    </ul>
  </section>
);

BlogSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
