import Section from '../layouts/Section.jsx';
import Container from '../Container.jsx';
import styles from './Experience.module.css';
import experienceData from '../../data/experience.json';

export default function Experience() {
  return (
    <Section id='experience' title='Experience'>
      <Container>
        {experienceData.experience.map(entry => (
          <div key={entry.company} className={styles.experience}>
            <div className={styles.entry}>
              <div className={styles.header}>
                <div className={styles.companyBlock}>
                  <p className={styles.company}>{entry.company}</p>
                  <p className={styles.location}>{entry.location}</p>
                </div>
                <p className={styles.date}>
                  {entry.startDate} -{' '}
                  {entry.endDate === null ? 'Present' : entry.endDate}
                </p>
              </div>

              <p className={styles.role}>{entry.title}</p>
              <ul className={styles.list}>
                {entry.responsibilities.map(responsibility => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}
