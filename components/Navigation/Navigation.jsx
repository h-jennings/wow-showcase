import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '../Button';
import './Navigation.scss';


const propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

function NavigationLink({ children, href = '/' }) {
  const router = useRouter();
  const isSelected = router.pathname === href ? 'selected' : '';

  const handleClick = (e) => {
    e.preventDefault();

    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`c-NavigationLink ${isSelected}`}
    >
      {children}
    </a>
  );
}

NavigationLink.propTypes = propTypes;


const Navigation = React.forwardRef((props, ref) => (
  <nav ref={ref} className="c-Navigation">
    <div className="c-Navigation--wrapper">
      <Link href="/">
        <a>
          <img
            className="logo"
            src="/images/full-color-logo.png"
            alt="Whereoware Logo"
          />
        </a>
      </Link>
      <Button
        href="https://www.whereoware.com/contact/"
        text="contact sales"
      />
    </div>
  </nav>
));

export default Navigation;
