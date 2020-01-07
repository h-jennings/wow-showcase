import React from 'react';
import Head from 'next/head';
import Header from '../components/shared/PrimaryHeader';
import Layout from '../components/shared/Layout';

function LandingPages() {
  return (
    <div>
      <Head>
        <title>Showcase - Landing Pages</title>
      </Head>
      <Header headline="Showcase" />
      <h1>Landing Pages</h1>
    </div>
  );
}

LandingPages.layout = Layout;

export default LandingPages;
