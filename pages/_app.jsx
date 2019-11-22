import React from 'react';
import App from 'next/app';
import '../scss/global/global.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.layout || React.Fragment;

    return (
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
