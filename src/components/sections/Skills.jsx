import Section from '../layouts/Section.jsx';
import Container from '../Container.jsx';
import styles from './Skills.module.css';
import skills from '../../data/skills.json';

export default function Skills() {
  return (
    <Section id='skills' title='Skills'>
      <Container>
        <div className={styles.grid}>
          {skills.groups.map(group => (
            <div key={group.title} className={styles.card}>
              <h3 className={styles.title}>{group.title}</h3>
              <ul className={styles.list}>
                {group.skills.map(skill => (
                  <li key={skill} className={styles.item}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
