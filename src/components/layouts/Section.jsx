import styles from './Section.module.css';

export default function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.divider}></span>
        </div>
        {children}
      </div>
    </section>
  );
}
