import Container from '../Container.jsx';
import Section from '../layouts/Section.jsx';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id='about' title='About Me'>
      <Container>
        <div className={styles.layout}>
          <p className={styles.copy}>
            I’m a developer working in production support, focused on keeping
            enterprise applications reliable by investigating issues,
            identifying root causes, and building durable solutions. My work
            combines development, testing, and thoughtful analysis to improve
            service stability and prevent recurring problems.
          </p>

          <div className={styles.panel}>
            <p className={styles.eyebrow}>Core strengths</p>
            <ul className={styles.list}>
              <li>• Root cause analysis and incident investigation</li>
              <li>• Testing, validation, and dependable implementation</li>
              <li>• Solution design and continuous support improvement</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
