import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import useNativeLazyLoading from '../../../utils/useNativeLazyLoading';

function LazyImage({ width, height = 1000, src }) {
  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div
      className="lazy-image-container"
      ref={supportsLazyLoading === false ? ref : undefined}
      style={{
        position: 'relative',
        paddingBottom: `${(height / width) * 100}%`,
      }}
    >
      {inView || supportsLazyLoading ? (
        <img
          src={src}
          width={width}
          loading="lazy"
          alt=""
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        />
      ) : null}
    </div>
  );
}

LazyImage.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
};

LazyImage.defaultProps = {
  height: 1000,
};

export default LazyImage;
