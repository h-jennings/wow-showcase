import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import Navigation from '../Navigation';
import Footer from '../Footer';
import ScrollToButton from '../ScrollToButton';

function Layout({ children }) {
  const [navHeight, setNavHeight] = useState(0);
  const nav = useRef(null);

  useEffect(() => {
    setNavHeight(nav.current && nav.current.clientHeight);
  }, [nav]);

  return (
    <div className="c-Layout">
      <Head>
        <link href="https://use.typekit.net/iol0ghc.css" rel="stylesheet" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </Head>
      <Navigation ref={nav} />
      <div style={{
        marginTop: `${navHeight}px`,
      }}
      >
        {children}
      </div>
      <ScrollToButton />
      <Footer />
    </div>
  );
}

export default Layout;
