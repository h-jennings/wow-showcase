import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';


function ShowcaseListItem({ src, name }) {
  return (
    <div className="list-item">
      <Link
        href="/detail/email/[name]"
        as={`/detail/email/${name}`}
      >
        <a>
          <img src={src} alt="" />
        </a>
      </Link>
    </div>
  );
}


export default ShowcaseListItem;
