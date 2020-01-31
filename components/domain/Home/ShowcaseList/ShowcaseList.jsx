/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ShowcaseListItem from '../ShowCaseListItem';

const transition = {
  duration: 0.3,
};

const ShowcaseListContainerVariants = {
  initial: { opacity: 0, y: 50, transition },
  enter: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: 50, transition },
};

function ShowcaseList({ emails }) {
  return (
    <div className="c-ShowcaseList">
      <div className="c-ShowcaseList--wrapper">
        <motion.div
          className="c-ShowcaseList--container"
          variants={ShowcaseListContainerVariants}
        >
          {emails.map((email) => (
            <ShowcaseListItem
              key={email.name}
              data={email}
              src={(
                email.desktop.src
                  ? require(`../../../../images/emails/${email.desktop.src}`)
                  : null
              )}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

ShowcaseList.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShowcaseList;
