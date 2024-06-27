// pages/_app.tsx
import '../styles/global.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
