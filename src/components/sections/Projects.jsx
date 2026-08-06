import Section from '../layouts/Section.jsx';
import Container from '../Container.jsx';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section id='projects' title='Projects'>
      <Container>
        <div className={styles.layout}>
          <div className={styles.card}>
            <p className={styles.eyebrow}>Current focus</p>
            <h3 className={styles.title}>Personal website</h3>
            <p className={styles.copy}>
              This is my first React project so far, and while it's still a work
              in progress, it marks an important milestone in my React
              development journey. I have more projects planned as I continue to
              build my skills and expand my portfolio.
            </p>
            <p className={styles.copy}>
              The project was built using React and Vite, with styling handled
              through CSS Modules. It was created as part of my first React
              course on Udemy, where I focused on learning modern front-end
              development practices and strengthening my foundation in
              component-based architecture.
            </p>
            <p className={styles.copy}>
              The JSX structure and component logic were developed by me, while
              AI tools were used to support the CSS styling.
            </p>
            <a
              className={styles.link}
              href='https://github.com/EthanGervais/ethangervais-personal-site'
              target='_blank'
              rel='noreferrer'
            >
              View the repository on GitHub
            </a>
          </div>

          <div className={styles.cardAlt}>
            <p className={styles.eyebrow}>What’s next</p>
            <h3 className={styles.title}>Expanding the portfolio</h3>
            <p className={styles.copy}>
              This section is mostly a placeholder, intentionally structured to
              grow over time, so that I can easily add new projects as my
              experience develops.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
