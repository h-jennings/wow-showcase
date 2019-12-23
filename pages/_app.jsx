import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import '../scss/index.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const Layout = Component.layout || React.Fragment;

    return (
      <Layout>
        <AnimatePresence exitBeforeEnter>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    );
  }
}

export default MyApp;
