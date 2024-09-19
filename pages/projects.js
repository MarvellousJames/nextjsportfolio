// pages/projects.js
import React from 'react';
import styles from '../styles/Projects.module.css';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>My Projects</h2>
        <a className={styles.repositoryButton} href="https://github.com/rohzalbert?tab=repositories" target="_blank" rel="noopener noreferrer">
          Visit My Repositories
        </a>
      </div>
      <div className={styles.projectsGrid}>
        <ProjectCard
          title="Ahuse"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          image="/app.jpg"
          link="https://github.com/rohzalbert/reactroutermovieapp"
        />
        <ProjectCard
          title="App Dashboard"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          image="/app.jpg"
          link="https://github.com/rohzalbert/todoapp"
        />
        <ProjectCard
          title="Easy Rent"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          image="/app.jpg"
          link="https://github.com/rohzalbert/shoppingcartwithoop"
        />
      </div>
    </div>
  );
}
