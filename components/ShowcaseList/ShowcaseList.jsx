import React from 'react';
import PropTypes from 'prop-types';
import ShowcaseListItem from '../ShowCaseListItem';


function ShowcaseList({ emails }) {
  return (
    <div className="c-ShowcaseList">
      <div className="c-ShowcaseList--wrapper">
        <div className="c-ShowcaseList--container">
          {emails.map((email) => (
            <ShowcaseListItem key={email.name} data={email} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowcaseList;
