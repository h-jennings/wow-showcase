import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../components/shared/Layout';
import PrimaryHeader from '../components/shared/PrimaryHeader';
import ShowcaseList from '../components/domain/Home/ShowcaseList';
import projects from '../data/projects';
import pageTransitionVariants from '../utils/pageTransition';

function Home() {
  const { emails } = projects;

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      className="p-home"
      variants={pageTransitionVariants}
    >
      <Head>
        <title>Showcase</title>
      </Head>
      <PrimaryHeader headline="Showcase" />
      <ShowcaseList emails={emails} />
    </motion.div>
  );
}

Home.layout = Layout;

export default Home;
