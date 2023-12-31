import { Layout, Transition } from '../components';
import '../styles/globals.css';

import { useRouter } from "next/router";
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head'; // Impor komponen Head

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>HIZZDEV</title>
        <meta name="description" content="Ini adalah aplikasi saya." />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default MyApp;
