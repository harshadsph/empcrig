// pages/_app.js
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
