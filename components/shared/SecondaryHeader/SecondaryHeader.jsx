import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ElementVisibilityContext from '../../../context/ElementVisibilityContext';

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
          <h1 style={{ marginBottom: 0 }}>
            {headline}
          </h1>
        </div>
        <div className="col-right" style={{ justifyContent: 'flex-start' }}>
          <h2>
            {description}
          </h2>
        </div>
      </div>
    </header>
  );
}


export default SecondaryHeader;
