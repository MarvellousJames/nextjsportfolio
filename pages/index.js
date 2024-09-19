// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>Hey, I am Marvel Chekube</h1>
          <h2>
            I create <span className={styles.highlight}>designs</span> and{' '}
            <span className={styles.highlight}>build websites.</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <button className={styles.button}>Get In Touch</button>
        </div>
        <img className={styles.heroImage} src="/hero.jpg" alt="John" />
      </main>
    </>
  );
}
