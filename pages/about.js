import styles from '../styles/About.module.css';

export default function About() {
  return (
    <main className={styles.main}>
        <img className={styles.heroImage} src="/hero.jpg" alt="John" />
        <div className={styles.hero}>
          <h1>About</h1>
          <h2>
            About me 
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
         
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r. 
          
          
          </p>
          <button className={styles.button}>Get In Touch</button>
        </div>
      </main>
  );
}
