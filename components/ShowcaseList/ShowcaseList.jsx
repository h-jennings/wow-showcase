import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import './ShowcaseList.scss';


function ShowcaseList({ emails }) {
  return (
    <div className="c-ShowcaseList">
      <div className="c-ShowcaseList--wrapper">
        <div className="c-ShowcaseList--container">
          {emails.map(({ src, name }) => (
            <div key={name} className="list-item">
              <Link
                href="/detail/email/[name]"
                as={`/detail/email/${name}`}
              >
                <a>
                  <img src={src} alt="" />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowcaseList;
