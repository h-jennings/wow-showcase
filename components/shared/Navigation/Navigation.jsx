import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Button from '../Button';


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

const Navigation = React.forwardRef((props, ref) => {
  const { scrollY } = useViewportScroll();
  const paddingResize = useTransform(scrollY, [0, 200], [40, 20]);
  const imgResize = useTransform(scrollY, [0, 200], [240, 200]);

  return (
    <motion.nav
      ref={ref}
      className="c-Navigation"
      style={{
        paddingTop: paddingResize, paddingBottom: paddingResize, boxShadow: `
        0 2.8px 2.2px rgba(0, 0, 0, 0.008),
        0 6.7px 5.3px rgba(0, 0, 0, 0.012),
        0 12.5px 10px rgba(0, 0, 0, 0.015),
        0 22.3px 17.9px rgba(0, 0, 0, 0.018),
        0 41.8px 33.4px rgba(0, 0, 0, 0.022),
        0 100px 80px rgba(0, 0, 0, 0.03)`,
      }}
    >
      <div className="c-Navigation--wrapper">
        <Link href="/">
          <a>
            <motion.img
              className="logo hide"
              src="/images/full-logo.png"
              alt="Whereoware Logo"
              style={{ maxWidth: imgResize }}
            />
            <img
              className="logo-mark"
              src="/images/logomark.png"
              alt="Whereoware Logo"
              style={{ maxWidth: 50 }}
            />
          </a>
        </Link>
        <Button
          href="https://www.whereoware.com/contact/"
        >
          contact sales
        </Button>
      </div>
    </motion.nav>
  );
});

export default Navigation;
