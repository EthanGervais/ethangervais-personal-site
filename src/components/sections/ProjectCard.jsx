import styles from './Projects.module.css';

export default function ProjectCard({ eyebrow, title, descriptions, href }) {
  return (
    <div className={styles.card}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h3 className={styles.title}>{title}</h3>
      {descriptions.map((text, index) => (
        <p key={index} className={styles.copy}>
          {text}
        </p>
      ))}
      <a className={styles.link} href={href} target='_blank' rel='noreferrer'>
        View the repository on GitHub
      </a>
    </div>
  );
}
