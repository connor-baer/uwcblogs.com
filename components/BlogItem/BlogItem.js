import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Anchor, Text } from '@madebyconnor/bamboo-ui';

export const BlogItem = ({
  firstName,
  url,
  languages = [],
  countries = [],
}) => (
  <Text as="li" size="m" lineHeight="l">
    <Anchor
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        border-bottom-width: 0;

        &:hover,
        &:focus {
          border-bottom-width: 2px;
        }
      `}
    >
      {firstName}
    </Anchor>
    &ensp;
    {`${countries.join(', ')} — ${languages.join(', ')}`}
  </Text>
);

BlogItem.propTypes = {
  firstName: PropTypes.string,
  url: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
  countries: PropTypes.arrayOf(PropTypes.string),
  college: PropTypes.string,
};
