import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ElementVisibilityContext from '../../../context/ElementVisibilityContext';


const headerVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
};


function SecondaryHeader({ headline, description }) {
  const visibilityContext = useContext(ElementVisibilityContext);
  const { changeVisibilityState } = visibilityContext;

  const [ref, inView, entry] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    if (entry !== undefined && entry.boundingClientRect.top < 0) {
      if (inView) {
        changeVisibilityState('visible');
      } else {
        changeVisibilityState('hidden');
      }
    }
  }, [inView, changeVisibilityState, entry]);

  return (
    <header ref={ref} className="c-Header secondary">
      <div className="c-Header--wrapper">
        <div className="col-left">
          <motion.h1
            style={{ marginBottom: 0 }}
            variants={headerVariants}
          >
            {headline}
          </motion.h1>
        </div>
        <div className="col-right" style={{ justifyContent: 'flex-start' }}>
          <motion.h2 variants={headerVariants}>
            {description}
          </motion.h2>
        </div>
      </div>
    </header>
  );
}


export default SecondaryHeader;
