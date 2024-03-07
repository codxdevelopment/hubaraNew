import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hubara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
