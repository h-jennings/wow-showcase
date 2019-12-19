import React, { useContext } from 'react';
import LightBoxContext from '../../context/LightBoxContext';

function LightBox({ data }) {
  const machine = useContext(LightBoxContext);
  const { current, send } = machine;
  const { headline, src } = data;

  function handleContainerClick(e) {
    if (e.target !== e.currentTarget) return;

    send('CLOSE');
  }
  return (
    <>
      {current.matches('open') && (
        <div className="c-LightBox--container" onClick={handleContainerClick}>
          <div className="c-LightBox">
            <button className="c-LightBox-close" type="button" onClick={() => send('CLOSE')}>
              <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <path fill="#ffffff" d="M36.1421356,0.786796564 L43.2132034,7.85786438 L29.0707966,21.9997966 L43.2132034,36.1421356 L36.1421356,43.2132034 L21.9997966,29.0707966 L7.85786438,43.2132034 L0.786796564,36.1421356 L14.9287966,21.9997966 L0.786796564,7.85786438 L7.85786438,0.786796564 L21.9997966,14.9287966 L36.1421356,0.786796564 Z" id="cross" />
              </svg>
            </button>
            <button type="button" onClick={() => send('SHOW_MOBILE')}>mobile</button>
            <button type="button" onClick={() => send('SHOW_DESKTOP')}>desktop</button>
            <div className="image--container">
              {current.matches('open.mobile') && (
                <div>Mobile image</div>
              )}
              {current.matches('open.desktop') && (
                <img src={src} alt="" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LightBox;
