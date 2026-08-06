import styles from './Navbar.module.css';

const links = ['About', 'Experience', 'Projects', 'Skills'];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href='#' className={styles.brand}>
          Ethan Gervais
        </a>

        <ul className={styles.links}>
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className={styles.link}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
