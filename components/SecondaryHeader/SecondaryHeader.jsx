import React from 'react';

function SecondaryHeader({ headline, description }) {
  return (
    <header className="c-Header secondary">
      <div className="c-Header--wrapper">
        <div className="col-left">
          <h1 style={{ marginBottom: 0 }}>{headline}</h1>
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
