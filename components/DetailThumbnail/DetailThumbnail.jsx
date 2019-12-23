import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // src: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function DetailThumbnail({ assets, handleClick }) {
  const { desktopSrc } = assets;
  return (
    <button
      type="button"
      className="c-DetailThumbnail--container"
      style={{ backgroundImage: `url('${desktopSrc}')` }}
      onClick={() => handleClick(assets)}
    />
  );
}

DetailThumbnail.propTypes = propTypes;

export default DetailThumbnail;
