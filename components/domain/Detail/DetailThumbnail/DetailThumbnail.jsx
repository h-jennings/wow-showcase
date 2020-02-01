/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import tryImageRequire from '../../../../utils/tryImageRequire';

const DetailThumbnail = React.forwardRef(({ assets, handleClick }, thumbnailRef) => {
  const { desktop, mobile } = assets;
  const desktopSrc = (desktop.src && tryImageRequire(desktop.src)) || '/images/broken-image.jpg';
  const mobileSrc = (mobile.src && tryImageRequire(mobile.src)) || '/images/broken-image.jpg';

  return (
    <button
      ref={thumbnailRef}
      type="button"
      className="c-DetailThumbnail--container"
      style={{ backgroundImage: `url('${desktopSrc}')` }}
      onClick={() => handleClick({ desktopSrc, mobileSrc })}
      aria-label="Action-shot-thumbnail"
    />
  );
});


DetailThumbnail.propTypes = {
  handleClick: PropTypes.func.isRequired,
  assets: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailThumbnail;
