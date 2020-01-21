import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ListItemHoverContent from '../ListItemHoverContent/ListItemHoverContent';


function ShowcaseListItem({ data }) {
  const {
    name,
    desktopSrc,
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
          <img src={desktopSrc} alt="" />
        </a>
      </Link>
    </div>
  );
}

ShowcaseListItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desktopSrc: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};


export default ShowcaseListItem;
