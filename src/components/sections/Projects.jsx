import Section from '../layouts/Section.jsx';
import Container from '../Container.jsx';
import ProjectCard from './ProjectCard.jsx';
import styles from './Projects.module.css';
import projects from '../../data/projects.json';

export default function Projects() {
  return (
    <Section id='projects' title='Projects'>
      <Container>
        <div className={styles.layout}>
          {projects.projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
