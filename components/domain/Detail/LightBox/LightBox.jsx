import React, { useContext } from 'react';
import { motion } from 'framer-motion';
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
  const windowSize = useWindowSize();
  const { width } = windowSize;
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
            <button
              initial="desktop"
              type="button"
              className="c-LightBox-toggle"
              onClick={() => send('TOGGLE')}
            >
              <div className="toggle-container">
                <motion.div
                  className="toggle-circle"
                  variants={width >= 768 ? toggleVariantsDesktop : toggleVariantsMobile}
                  animate={current.matches('open.desktop') ? 'desktop' : 'mobile'}
                />
                <div className="icon-container">
                  <svg data-icon-type="desktop" width="23" height="20" viewBox="0 0 23 20" xmlns="http://www.w3.org/2000/svg"><path d="M21.083 0H1.917C.859 0 0 .84 0 1.875v12.5c0 1.035.859 1.875 1.917 1.875h7.666l-.639 1.875H6.07a.946.946 0 00-.958.938c0 .519.427.937.958.937h10.862a.946.946 0 00.958-.938.946.946 0 00-.958-.937h-2.875l-.64-1.875h7.667c1.058 0 1.917-.84 1.917-1.875v-12.5C23 .84 22.141 0 21.083 0zm-.639 13.75H2.556V2.5h17.888v11.25z" fill="#34BBDB" fillRule="nonzero" /></svg>
                </div>
                <div className="icon-container">
                  <svg data-icon-type="mobile" width="12" height="20" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.2 0H1.8C.806 0 0 .84 0 1.875v16.25C0 19.16.806 20 1.8 20h8.4c.994 0 1.8-.84 1.8-1.875V1.875C12 .84 11.194 0 10.2 0zM6 18.75c-.664 0-1.2-.559-1.2-1.25s.536-1.25 1.2-1.25c.664 0 1.2.559 1.2 1.25s-.536 1.25-1.2 1.25zm4.2-4.219a.461.461 0 01-.45.469h-7.5a.461.461 0 01-.45-.469V2.344c0-.258.202-.469.45-.469h7.5c.248 0 .45.21.45.469V14.53z" fill="#34BBDB" fillRule="nonzero" /></svg>
                </div>
              </div>
            </button>
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
