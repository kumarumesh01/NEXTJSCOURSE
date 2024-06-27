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

      <header className={styles.header}>
        <nav className={styles.nav}>
          {/* Navigation links centered */}
          <div className={styles.navLinks}>
            <Link href="/" passHref>
              <span className="cursor-pointer text-white hover:underline">Home</span>
            </Link>
            <Link href="/about" passHref>
              <span className="cursor-pointer text-white hover:underline">About</span>
            </Link>
          </div>
          {/* User image on the right */}
          <div className={styles.userImage}>
            <Link href="/" passHref>
              <img src="/photo_umesh.jpg" alt="Umesh's Photo" className="h-8 w-8 rounded-full cursor-pointer" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Main content section */}
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Website</h1>
        {/* <img src="/graph_icon.png" alt="Graph Icon" className="w-24 h-24 mt-4" /> */}
      </main>
    </div>
  );
};

export default HomePage;
