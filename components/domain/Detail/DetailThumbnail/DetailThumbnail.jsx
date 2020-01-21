import React from 'react';
import PropTypes from 'prop-types';

const DetailThumbnail = React.forwardRef(({ assets, handleClick }, thumbnailRef) => {
  const {
    desktop: {
      src,
    },
  } = assets;
  return (
    <button
      ref={thumbnailRef}
      type="button"
      className="c-DetailThumbnail--container"
      style={{ backgroundImage: `url('${src}')` }}
      onClick={() => handleClick(assets)}
      aria-label="Action-shot-thumbnail"
    />
  );
});


DetailThumbnail.propTypes = {
  handleClick: PropTypes.func.isRequired,
  assets: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailThumbnail;
