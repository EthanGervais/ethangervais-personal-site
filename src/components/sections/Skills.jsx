import Section from '../layouts/Section.jsx';
import Container from '../Container.jsx';
import styles from './Skills.module.css';

const skillGroups = [
  {
    title: 'Core development',
    skills: ['Java Development', 'SQL Databases', 'JavaScript', 'HTML/CSS']
  },
  {
    title: 'Production support',
    skills: [
      'Incident Response',
      'Root Cause Analysis',
      'Production Troubleshooting',
      'Reliability Improvements'
    ]
  },
  {
    title: 'Quality and delivery',
    skills: [
      'Testing and Validation',
      'Solution Design',
      'Debugging',
      'Cross-Team Collaboration'
    ]
  }
];

export default function Skills() {
  return (
    <Section id='skills' title='Skills'>
      <Container>
        <div className={styles.grid}>
          {skillGroups.map(group => (
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
