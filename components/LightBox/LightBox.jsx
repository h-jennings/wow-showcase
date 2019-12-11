import React, { useContext } from 'react';
import LightBoxContext from '../../context/LightBoxContext';

function LightBox({ data }) {
  const machine = useContext(LightBoxContext);
  const { current, send } = machine;
  const { headline } = data;
  return (
    <>
      {current.matches('open') && (
        <div className="c-LightBox">
          <h2 style={{ color: '#444444' }}>LightBox</h2>
          <p>{headline}</p>
          <button type="button" onClick={() => send('CLOSE')}>x</button>
          <button type="button" onClick={() => send('SHOW_MOBILE')}>mobile</button>
          <button type="button" onClick={() => send('SHOW_DESKTOP')}>desktop</button>
        </div>
      )}
    </>
  );
}

export default LightBox;
