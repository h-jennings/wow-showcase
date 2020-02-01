/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMachine } from '@xstate/react';
import { motion } from 'framer-motion';
import LightBoxContext from '../../../context/LightBoxContext';
import Layout from '../../../components/shared/Layout';
import SecondaryHeader from '../../../components/shared/SecondaryHeader';
import projects from '../../../data/projects';
import DetailThumbnail from '../../../components/domain/Detail/DetailThumbnail';
import LightBox from '../../../components/domain/Detail/LightBox';
import LightBoxStateMachine from '../../../components/domain/Detail/LightBox/LightBoxStateMachine';
import { lockScroll, unlockScroll } from '../../../utils/scroll';
import { setImageSrc, resetImageSrc } from '../../../utils/lightBoxImages';
import pageTransitionVariants from '../../../utils/pageTransition';
import tryImageRequire from '../../../utils/tryImageRequire';
import ErrorBoundary from '../../../components/shared/ErrorBoundary/ErrorBoundary';

const transitionValues = {
  transition: {
    staggerChildren: 0.2,
  },
};

const stagger = {
  initial: {
    ...transitionValues,
  },
  enter: {
    ...transitionValues,
  },
};

const containerVariants = {
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.3,
    },
  },
};

const detailPageAssetVariants = {
  initial: {
    y: 20,
    opacity: 0,
    scale: 0.96,
  },
  enter: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const MotionDetailThumbnail = motion.custom(DetailThumbnail);

function Name({ email }) {
  const {
    headline,
    description,
    desktop,
    mobile,
    actionShots,
  } = email;

  // Importing image into the the page
  const desktopSrc = (desktop.src && tryImageRequire(desktop.src)) || '/images/broken-image.jpg';

  const mobileSrc = (mobile.src && tryImageRequire(mobile.src)) || '/images/broken-image.jpg';

  const [current, send] = useMachine(LightBoxStateMachine, {
    actions: {
      lockScroll,
      unlockScroll,
      setImageSrc,
      resetImageSrc,
    },
  });

  const thumbnailRef = React.createRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleClick(imageData) {
    send({ type: 'OPEN', data: imageData });
  }

  return (
    <motion.div
      className="p-detail"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{
        ...pageTransitionVariants,
        transition: {
          staggerChildren: 0.5,
          delay: 0.2,
        },
      }}
    >
      <SecondaryHeader
        headline={headline}
        description={description}
      />
      <motion.main
        className="p-detail--wrapper"
        variants={containerVariants}
      >
        <div className="p-detail--container">
          <div className="col-left">
            <ErrorBoundary>
              <motion.button
                className="template-image--container"
                onClick={() => handleClick({ mobileSrc, desktopSrc })}
                type="button"
                variants={detailPageAssetVariants}
              >
                <img
                  src={desktopSrc}
                  alt=""
                />
              </motion.button>
            </ErrorBoundary>
          </div>
          <div className="col-right">
            <h2>See it in action</h2>
            <motion.div
              className="c-DetailThumbnail--wrapper"
              variants={stagger}
            >
              {actionShots.map((shot) => (
                <ErrorBoundary
                  key={shot.name}
                >
                  <MotionDetailThumbnail
                    handleClick={handleClick}
                    assets={shot}
                    variants={detailPageAssetVariants}
                    ref={thumbnailRef}
                  />
                </ErrorBoundary>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.main>
      <LightBoxContext.Provider value={{ current, send }}>
        <LightBox />
      </LightBoxContext.Provider>
    </motion.div>
  );
}

Name.getInitialProps = ({ query }) => {
  const { emails } = projects;
  const email = emails.find((mail) => mail.name === query.name);

  return {
    email,
  };
};

Name.layout = Layout;

Name.propTypes = {
  email: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Name;
