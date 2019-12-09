import React from 'react';
import PropTypes from 'prop-types';
import HeaderLink from '../HeaderLink';

const HeaderPropTypes = {
  headline: PropTypes.string.isRequired,
};

function PrimaryHeader({ headline = 'Brand' }) {
  return (
    <header className="c-Header primary">
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
