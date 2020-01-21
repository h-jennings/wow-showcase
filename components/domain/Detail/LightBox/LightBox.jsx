import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Toggle from './Toggle';
import useWindowSize from '../../../../utils/useWindowSize';
import LightBoxContext from '../../../../context/LightBoxContext';

const toggleVariantsDesktop = {
  desktop: {
    x: -2,
  },
  mobile: {
    x: -54,
  },
};

const toggleVariantsMobile = {
  desktop: {
    x: -1.5,
  },
  mobile: {
    x: -40.5,
  },
};

const staggerModalTransition = {
  transition: {
    staggerChildren: 0.250,
  },
};

const modalContainerVariants = {
  initial: {
    opacity: 0,
    ...staggerModalTransition,
  },
  enter: {
    opacity: 1,
    ...staggerModalTransition,
  },
  exit: {
    opacity: 0,
    ...staggerModalTransition,
  },
};

const modalVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    delay: 0.2,
  },
};

function LightBox() {
  const machine = useContext(LightBoxContext);
  const { current, send } = machine;
  const { lightBoxImgs: { desktop, mobile } } = current.context;

  function handleContainerClick(e) {
    if (e.target !== e.currentTarget) return;

    send('CLOSE');
  }
  return (
    <>
      {current.matches('open') && (
        <motion.div
          className="c-LightBox--container"
          onClick={handleContainerClick}
          role="button"
          variants={modalContainerVariants}
        >
          <motion.div
            className="c-LightBox"
            variants={modalVariants}
          >
            <Toggle send={send} current={current} />
            <motion.button
              className="c-LightBox-icon"
              data-icon-type="close"
              type="button"
              onClick={() => send('CLOSE')}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <path fill="#ffffff" d="M36.1421356,0.786796564 L43.2132034,7.85786438 L29.0707966,21.9997966 L43.2132034,36.1421356 L36.1421356,43.2132034 L21.9997966,29.0707966 L7.85786438,43.2132034 L0.786796564,36.1421356 L14.9287966,21.9997966 L0.786796564,7.85786438 L7.85786438,0.786796564 L21.9997966,14.9287966 L36.1421356,0.786796564 Z" id="cross" />
              </svg>
            </motion.button>
            <div className="image--container">
              {current.matches('open.mobile') && (
                mobile ? <img src={mobile} alt="" /> : <p>No image available</p>
              )}
              {current.matches('open.desktop') && (
                desktop ? <img src={desktop} alt="" /> : <p>No image available</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default LightBox;
