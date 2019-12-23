import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import PrimaryHeader from '../components/PrimaryHeader';
import ShowcaseList from '../components/ShowcaseList';
import projects from '../data/projects';

function Home() {
  const { emails } = projects;

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Head>
        <title>Showcase - Emails</title>
      </Head>
      <PrimaryHeader headline="Showcase" />
      <ShowcaseList emails={emails} />
    </motion.div>
  );
}

Home.layout = Layout;

export default Home;
