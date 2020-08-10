import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { propTypes } from '@madebyconnor/bamboo-ui';

import Image from '../Image';

const imageStyles = ({ theme }) => css`
  display: none;

  ${theme.mq.lap} {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const SplitImage = styled(Image)(imageStyles);

SplitImage.defaultProps = {
  loading: 'lazy',
};

SplitImage.propTypes = propTypes.imagePropType;

export default SplitImage;
