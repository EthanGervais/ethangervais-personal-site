import Container from '../Container.jsx';
import Section from '../layouts/Section.jsx';

export default function About() {
  return (
    <Section id='about' title='About Me'>
      <Container>
        <p>
          Site reliability specialist with experience supporting enterprise
          applications and solving production issues.
        </p>
      </Container>
    </Section>
  );
}
