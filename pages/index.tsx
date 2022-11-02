import { useEffect } from 'react';
import Head from 'next/head'
import Prism from "prismjs";
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Batman's Vim Cheatsheet</title>
        <meta name="description" content="Matt Batman's Vim Cheatsheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          My Vim Cheatsheet
        </h1>
        <h2>Basic Movements</h2>
        <ul>
          <li>
            <code className="language-sh">h</code> <code className="language-sh">j</code> <code className="language-sh">k</code> <code className="language-sh">l</code> | left, down, up, right 
          </li>
        </ul>
      </main>
    </div>
  )
}
