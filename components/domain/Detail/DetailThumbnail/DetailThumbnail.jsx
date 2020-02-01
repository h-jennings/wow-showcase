/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import tryRequire from '../../../../utils/tryRequire';

const DetailThumbnail = React.forwardRef(({ assets, handleClick }, thumbnailRef) => {
  const { desktop, mobile } = assets;

  const desktopSrc = desktop.src
    ? tryRequire(desktop.src)
    : '';

  const mobileSrc = mobile.src
    ? tryRequire(mobile.src)
    : null;

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
