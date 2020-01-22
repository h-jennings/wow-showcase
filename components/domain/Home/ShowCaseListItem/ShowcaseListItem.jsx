import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ListItemHoverContent from '../ListItemHoverContent/ListItemHoverContent';
import LazyImage from '../../../shared/LazyImage';


function ShowcaseListItem({ data }) {
  const {
    name,
    desktop: {
      src,
      height,
      width,
    },
    headline,
    website,
  } = data;

  return (
    <div
      className="c-ShowcaseListItem"
    >
      <ListItemHoverContent
        headline={headline}
        website={website}
      />
      <Link
        scroll={false}
        href="/detail/email/[name]"
        as={`/detail/email/${name}`}
      >
        <a>
          <LazyImage src={src} width={width} height={height} />
        </a>
      </Link>
    </div>
  );
}

ShowcaseListItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desktop: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    headline: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};


export default ShowcaseListItem;
