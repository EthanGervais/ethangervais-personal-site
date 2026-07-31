import Container from '../Container.jsx';
import Section from '../layouts/Section.jsx';

export default function About() {
  return (
    <Section id='about' title='About Me'>
      <Container>
        <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
          <p className='text-lg leading-8 text-slate-600'>
            I’m a developer working in production support, focused on keeping
            enterprise applications reliable by investigating issues,
            identifying root causes, and building durable solutions. My work
            combines development, testing, and thoughtful analysis to improve
            service stability and prevent recurring problems.
          </p>

          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-6'>
            <p className='eyebrow'>Core strengths</p>
            <ul className='mt-4 space-y-3 text-sm text-slate-600'>
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
