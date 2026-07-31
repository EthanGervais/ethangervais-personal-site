import Header from './components/sections/Header.jsx';
import About from './components/sections/About.jsx';
import Navbar from './components/layouts/Navbar.jsx';
import Skills from './components/sections/Skills.jsx';

function App() {
  return (
    <div className='min-h-screen text-slate-900'>
      <Navbar />

      <main className='mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-10'>
        <Header />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
