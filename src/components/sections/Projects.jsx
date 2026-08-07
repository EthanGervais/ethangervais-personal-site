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
            <h3 className={styles.title}>Personal Website</h3>
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

          <div className={styles.card}>
            <p className={styles.eyebrow}>Discord bot</p>
            <h3 className={styles.title}>Egg Fella Music Bot</h3>
            <p className={styles.copy}>
              This project is a Discord music bot built with Node.js, discord.js
              v14, and DisTube. It was created as a way to explore real-time bot
              development, voice channel integration, and command-driven
              interactions.
            </p>
            <p className={styles.copy}>
              The bot supports music playback through commands like play, skip,
              queue, shuffle, replace, and push, with support for YouTube and
              Spotify sources through DisTube plugins.
            </p>
            <p className={styles.copy}>
              I used this project to strengthen my understanding of asynchronous
              event handling, queue management, and working with third-party
              APIs. Development began in 2023 and was paused in 2025 as
              Discord's changing platform support made this kind of bot less
              practical to maintain.
            </p>
            <a
              className={styles.link}
              href='https://github.com/EthanGervais/Egg-Fella-Bot'
              target='_blank'
              rel='noreferrer'
            >
              View the repository on GitHub
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
