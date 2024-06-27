// pages/_app.tsx
import '../styles/global.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Head>
        <link rel="icon" href="/logo_umesh.png" />
        <title>Your Website Title</title>
        <meta name="description" content="Description of your website" />
      </Head>

      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
