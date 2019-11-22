import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import HeaderLink from '../HeaderLink';
import './Header.scss';


const HeaderPropTypes = {
  headline: PropTypes.string.isRequired,
};

function navCheck(pathName) {
  switch (true) {
  case pathName === '/':
    return true;

  case pathName === '/landing-pages':
    return true;

  default:
    return false;
  }
}

function Header({ headline = 'Brand' }) {
  const router = useRouter();
  const needsNav = navCheck(router.pathname);

  return (
    <header className="c-Header">
      <div className="c-Header--wrapper">
        <div className="col-left">
          <h1>{headline}</h1>
          {needsNav
            ? (
              <div className="links--wrapper">
                <HeaderLink href="/">
                  email
                </HeaderLink>
                <HeaderLink href="/landing-pages">
                  landing pages
                </HeaderLink>
              </div>
            )
            : (
              <div>no nav</div>
            )}
        </div>
        <div className="col-right">
          content right
        </div>
      </div>
    </header>
  );
}

Header.propTypes = HeaderPropTypes;

export default Header;
