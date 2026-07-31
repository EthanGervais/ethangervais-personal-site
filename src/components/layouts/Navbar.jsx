const links = ['About'];

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <a href='#' className='text-lg font-semibold tracking-tight text-slate-900 transition hover:text-indigo-600'>Ethan Gervais</a>

        <ul className='flex items-center gap-2'>
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className='rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900'
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
