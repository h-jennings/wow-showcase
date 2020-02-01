/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ShowcaseListItem from '../ShowCaseListItem';
import tryImageRequire from '../../../../utils/tryImageRequire';
import ErrorBoundary from '../../../shared/ErrorBoundary/ErrorBoundary';

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
            <ErrorBoundary
              key={email.name}
            >
              <ShowcaseListItem
                data={email}
                src={(
                  email.desktop.src
                    ? tryImageRequire(email.desktop.src)
                    : null
                )}
              />
            </ErrorBoundary>
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
