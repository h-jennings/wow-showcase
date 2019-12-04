import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
};

function DetailThumbnail({ src }) {
  return (
    <div className="c-DetailThumbnail--container" style={{ backgroundImage: `url('${src}')` }} />
  );
}

DetailThumbnail.propTypes = propTypes;

export default DetailThumbnail;
