import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import ElementVisibilityContext from '../../../context/ElementVisibilityContext';
import HeaderLink from '../HeaderLink';

const HeaderPropTypes = {
  headline: PropTypes.string.isRequired,
};

function PrimaryHeader({ headline = 'Brand' }) {
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
    <header ref={ref} className="c-Header primary">
      <div className="c-Header--wrapper">
        <div className="col-left">
          <h1>{headline}</h1>
          <div className="links--wrapper">
            <HeaderLink href="/">
              email
            </HeaderLink>
            <HeaderLink href="/landing-pages">
              landing pages
            </HeaderLink>
          </div>
        </div>
        <div className="col-right hide">
          <img src="/images/devices-illustration.png" alt="" />
        </div>
      </div>
    </header>
  );
}

PrimaryHeader.propTypes = HeaderPropTypes;

export default PrimaryHeader;
