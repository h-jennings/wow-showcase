import React from 'react';
import PropTypes from 'prop-types';

function ListItemHoverContent({ headline, website }) {
  return (
    <div className="ListItemHoverContent--container">
      <h3>{headline}</h3>
      <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
    </div>
  );
}

ListItemHoverContent.propTypes = {
  headline: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default ListItemHoverContent;
