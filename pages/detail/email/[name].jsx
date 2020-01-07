import React, { useEffect } from 'react';
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
import pageTransitionVariants from '../../../utils/pageTransistion';

const transitionValues = {
  transition: {
    staggerChildren: 0.1,
  },
};

const stagger = {
  initial: {
    ...transitionValues,
  },
  enter: {
    ...transitionValues,
  },
  exit: {
    ...transitionValues,
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
  exit: {
    y: 100,
    opacity: 0,
    scale: 0.20,
  },
};

const MotionDetailThumbnail = motion.custom(DetailThumbnail);

function Name({ email }) {
  const {
    headline,
    description,
    desktopSrc,
    mobileSrc,
    actionShots,
  } = email;

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
          delay: 0,
        },
      }}
    >
      <SecondaryHeader
        headline={headline}
        description={description}
      />
      <main className="p-detail--wrapper">
        <div className="p-detail--container">
          <div className="col-left">
            <motion.button
              className="template-image--container"
              onClick={() => handleClick({ desktopSrc, mobileSrc })}
              type="button"
              variants={detailPageAssetVariants}
            >
              <img src={desktopSrc} alt="" />
            </motion.button>
          </div>
          <div className="col-right">
            <motion.h2>
              See it in action
            </motion.h2>
            <motion.div
              className="c-DetailThumbnail--wrapper"
              variants={stagger}
            >
              {actionShots.map((shot) => (
                <MotionDetailThumbnail
                  key={shot.name}
                  handleClick={handleClick}
                  assets={shot}
                  variants={detailPageAssetVariants}
                  ref={thumbnailRef}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </main>
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

export default Name;
