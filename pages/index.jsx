import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
import ShowcaseList from '../components/ShowcaseList';
import projects from '../data/projects';

function Home() {
  const { emails } = projects;

  return (
    <div>
      <Head>
        <title>Showcase - Emails</title>
      </Head>
      <Header headline="Showcase" />
      <ShowcaseList emails={emails} />
    </div>
  );
}

Home.layout = Layout;

export default Home;
