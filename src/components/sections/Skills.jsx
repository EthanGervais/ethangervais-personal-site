import Section from '../layouts/Section.jsx';
import Container from '../Container.jsx';

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
        <div className='grid gap-4 md:grid-cols-3'>
          {skillGroups.map(group => (
            <div
              key={group.title}
              className='rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm'
            >
              <h3 className='text-base font-semibold text-slate-900'>
                {group.title}
              </h3>
              <ul className='mt-4 space-y-2 text-sm text-slate-600'>
                {group.skills.map(skill => (
                  <li
                    key={skill}
                    className='rounded-xl border border-slate-200 bg-white px-3 py-2'
                  >
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
