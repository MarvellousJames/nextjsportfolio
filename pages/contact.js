// pages/contact.js
import React from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2 className={styles.getInTouch}>Get In Touch</h2>
      <h1 className={styles.title}>Contact me</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <form className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="topic">Choose a topic</label>
          <select id="topic" name="topic">
            <option value="">Select one...</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div className={styles.formGroupCheckbox}>
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">
            I accept the <a href="#">Terms</a>
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}
