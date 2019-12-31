import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // src: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const DetailThumbnail = React.forwardRef(({ assets, handleClick }, thumbnailRef) => {
  const { desktopSrc } = assets;
  return (
    <button
      ref={thumbnailRef}
      type="button"
      className="c-DetailThumbnail--container"
      style={{ backgroundImage: `url('${desktopSrc}')` }}
      onClick={() => handleClick(assets)}
      aria-label="Action-shot-thumbnail"
    />
  );
});


DetailThumbnail.propTypes = propTypes;

export default DetailThumbnail;
