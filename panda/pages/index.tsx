import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Umesh Kumar Portfolio</title>
        <meta name="description" content="This is the homepage of my Next.js application." />
        <link rel="icon" href="/logo_umesh.png" />
      </Head>
      <div className="w-full bg-violet-600 flex justify-between items-center px-8 py-8 text-white" style={{ height: '420px' }}>
        <div className="text-left pr-4">
          <p className="text-2xl font-bold">Hello,</p>
          <p className="text-4xl font-bold">I'm Umesh Kumar,</p>
          <p className="text-2xl font-bold">B.Tech in Electrical Engineering from IIT Delhi.</p>
          <p className="text-2xl font-bold text-black ">Software Developer | Embedded Engineer.</p>
        </div>
        <img src="/photo_umesh.jpg" alt="Umesh's Photo" className="h-15 w-15 rounded-full cursor-pointer ml-auto" style={{ paddingRight: '1rem' }} />
      </div>
      {/* Main content section */}
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Website</h1>
        {/* <img src="/graph_icon.png" alt="Graph Icon" className="w-24 h-24 mt-4" /> */}
      </main>
    </div>
  );
};

export default HomePage;
