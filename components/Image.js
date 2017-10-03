import PropTypes from 'prop-types';
import classNames from 'classnames';
import queryString from 'query-string';

const Image = ({
  src,
  format,
  progressive,
  sizes,
  alt,
  caption,
  width,
  height,
  cover
}) => {
  if (!src) {
    return null;
  }
  if (progressive && format !== 'jpg') {
    throw Error('Only jpgs can be progressive.');
  }
  const query = queryString.stringify({
    fm: format,
    fl: progressive && 'progressive'
  });
  const srcSet = `${src}?${query}&w=1000 1000w, ${src}?${query}&w=2000 2000w`;
  return (
    <div className={classNames({ cover })}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        style={{ width, height: cover ? '100%' : height }}
        alt={alt}
      />
      {caption && <figcaption>{caption}</figcaption>}
      <style jsx>{`
        img {
          display: block;
          vertical-align: middle;
        }

        .cover {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;

          & img {
            object-fit: cover;
          }
        }
      `}</style>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  format: PropTypes.oneOf(['jpg', 'png', 'webp']),
  progressive: PropTypes.bool,
  sizes: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  cover: PropTypes.bool
};

Image.defaultProps = {
  format: 'jpg',
  width: '100%',
  height: 'auto',
  cover: false
};

export default Image;
