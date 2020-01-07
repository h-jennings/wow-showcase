import React, { useEffect, useContext } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { motion } from 'framer-motion';
import ElementVisibilityContext from '../../../context/ElementVisibilityContext';

function ScrollToButton() {
  const visibilityContext = useContext(ElementVisibilityContext);
  const { visibilityState } = visibilityContext;

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className="c-ScrollToButton"
      type="button"
      onClick={handleButtonClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      style={{ opacity: visibilityState === 'visible' ? 0 : 1 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.479 31.479"><path d="M26.477 10.274a1.112 1.112 0 010 1.587 1.12 1.12 0 01-1.571 0l-8.047-8.047v26.555c0 .619-.492 1.111-1.111 1.111a1.118 1.118 0 01-1.127-1.111V3.813L6.59 11.86c-.444.429-1.159.429-1.587 0a1.112 1.112 0 010-1.587L14.955.321a1.12 1.12 0 011.571 0l9.951 9.953z" fill="#444444" /></svg>
    </motion.button>
  );
}

export default ScrollToButton;
