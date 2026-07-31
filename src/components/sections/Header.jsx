import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Site Reliability Specialist</p>
          <h1 className={styles.title}>
            Reliable software starts with strong support.
          </h1>
          <p className={styles.copy}>
            I support critical applications by investigating incidents,
            designing durable fixes, and improving the systems behind them
            through thoughtful testing and reliable implementation.
          </p>

          <div className={styles.actions}>
            <a href='#about' className={styles.primaryLink}>
              Learn more
            </a>
            <a
              href='mailto:ethangervais@hotmail.com'
              className={styles.secondaryLink}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelCard}>
            <p className={styles.panelLabel}>Currently focused on</p>
            <ul className={styles.panelList}>
              <li>Root cause analysis and incident investigation</li>
              <li>Test coverage and reliable solution design</li>
              <li>Production support development and improvement</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
