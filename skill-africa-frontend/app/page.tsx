// components/ComingSoon.js
import React from 'react';
import styles from './ComingSoon.module.css';

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skill Afrika</h1>
      <p className={styles.subtitle}>Empowering Youth, Igniting Growth</p>
      <div className={styles.content}>
        <p className={styles.description}>
          Exciting things are happening behind the scenes! Skill Afrika is crafting
          a platform that will serve as a catalyst for youth development and national growth.
          Stay tuned as we prepare to launch something extraordinary.
        </p>
        <p className={styles.cta}>Sign up for updates:</p>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
