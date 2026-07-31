export default function Section({ id, title, children }) {
  return (
    <section id={id} className='scroll-mt-24'>
      <div className='section-card'>
        <div className='mb-6 flex items-center justify-between gap-3'>
          <h2 className='text-2xl font-semibold tracking-tight text-slate-900'>
            {title}
          </h2>
          <span className='hidden h-2 w-24 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 sm:block'></span>
        </div>
        {children}
      </div>
    </section>
  );
}
