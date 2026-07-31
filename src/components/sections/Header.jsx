export default function Header() {
  return (
    <header className='section-card overflow-hidden'>
      <div className='grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center'>
        <div className='space-y-5'>
          <p className='eyebrow'>Site Reliability Specialist</p>
          <h1 className='max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl'>
            Reliable software starts with strong support.
          </h1>
          <p className='max-w-2xl text-lg leading-8 text-slate-600'>
            I support critical applications by investigating incidents,
            designing durable fixes, and improving the systems behind them
            through thoughtful testing and reliable implementation.
          </p>

          <div className='flex flex-wrap gap-3'>
            <a
              href='#about'
              className='rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700'
            >
              Learn more
            </a>
            <a
              href='mailto:ethangervais@hotmail.com'
              className='rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600'
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className='rounded-2xl border border-indigo-100 bg-linear-to-br from-indigo-50 via-white to-slate-50 p-6'>
          <div className='rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm'>
            <p className='text-sm font-semibold text-slate-500'>
              Currently focused on
            </p>
            <ul className='mt-4 space-y-3 text-sm text-slate-600'>
              <li className='rounded-xl bg-slate-50 px-3 py-2'>
                Root cause analysis and incident investigation
              </li>
              <li className='rounded-xl bg-slate-50 px-3 py-2'>
                Test coverage and reliable solution design
              </li>
              <li className='rounded-xl bg-slate-50 px-3 py-2'>
                Production support development and improvement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
