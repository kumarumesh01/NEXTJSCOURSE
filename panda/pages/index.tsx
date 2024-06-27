import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Website</h1>
      <p className={styles.description}>This is the homepage of my Next.js application.</p>
    </div>
  );
};

export default HomePage;
