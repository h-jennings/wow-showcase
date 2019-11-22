import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';

function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Header headline="Header Text" />
      <h1>About us page</h1>
    </div>
  );
}

About.layout = Layout;

export default About;
