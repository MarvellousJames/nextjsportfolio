// components/ProjectCard.js
import React from 'react';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">
          View In Github &rarr;
        </a>
      </div>
    </div>
  );
}
