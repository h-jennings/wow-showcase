import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import HeaderLink from '../HeaderLink';
import './Header.scss';


const HeaderPropTypes = {
  headline: PropTypes.string.isRequired,
};

function isPrimaryHeaderFn(pathName) {
  switch (true) {
  case pathName === '/':
    return true;

  case pathName === '/landing-pages':
    return true;

  default:
    return false;
  }
}

function Header({ headline = 'Brand', description = '' }) {
  const router = useRouter();
  const isPrimaryHeader = isPrimaryHeaderFn(router.pathname);

  return (
    <header className="c-Header">
      {isPrimaryHeader
        ? (
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
            <div className="col-right">
              <img src="/images/devices-illustration.png" />
            </div>
          </div>
        )
        : (
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
        )}
    </header>
  );
}

Header.propTypes = HeaderPropTypes;

export default Header;
