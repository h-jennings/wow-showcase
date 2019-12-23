import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { motion } from 'framer-motion';
import LightBoxContext from '../../../context/LightBoxContext';
import Layout from '../../../components/Layout';
import SecondaryHeader from '../../../components/SecondaryHeader';
import projects from '../../../data/projects';
import DetailThumbnail from '../../../components/DetailThumbnail';
import LightBox from '../../../components/LightBox';
import LightBoxStateMachine from '../../../components/LightBox/LightBoxStateMachine';
import { lockScroll, unlockScroll } from '../../../utils/scroll';
import { setImageSrc, resetImageSrc } from '../../../utils/lightBoxImages';

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
      variants={{ exit: { transition: { staggerChildren: 0.2 } } }}
    >
      <SecondaryHeader headline={headline} description={description} />
      <main className="p-detail--wrapper">
        <div className="p-detail--container">
          <div className="col-left">
            <button
              className="template-image--container"
              onClick={() => handleClick({ desktopSrc, mobileSrc })}
              type="button"
            >
              <img src={desktopSrc} alt="" />
            </button>
          </div>
          <div className="col-right">
            <h2>See it in action</h2>
            <div className="c-DetailThumbnail--wrapper">
              {actionShots.map((shot) => (
                <DetailThumbnail key={shot.name} handleClick={handleClick} assets={shot} />
              ))}
            </div>
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
