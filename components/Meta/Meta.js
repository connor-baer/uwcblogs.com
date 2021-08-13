import React from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash/fp';
import { Meta, propTypes } from '@madebyconnor/bamboo-ui';

import { NAME } from '../../constants/site';
import * as Url from '../../services/url';

const DEFAULT_IMAGE = {
  src: 'https://images.ctfassets.net/wgin2u9ggvsy/1rCrSbXDO4ECoKow2QKkyg/e068c16bb6e71eb6eae6a4befffe1418/aidan-meyer-129877.jpg?w=1440',
  alt: 'A boy is writing into his journal on top of a mountain.',
};

export default function CustomMeta({
  pathname,
  image = DEFAULT_IMAGE,
  ...rest
}) {
  const url = !isNil(pathname) && Url.format(pathname, true);
  const src = image.src && Url.format(image.src, true);
  return (
    <Meta url={url} siteName={NAME} image={{ src, alt: image.alt }} {...rest} />
  );
}

CustomMeta.propTypes = {
  pathname: PropTypes.string,
  image: PropTypes.shape(propTypes.imagePropType),
};
