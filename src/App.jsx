import Header from './components/sections/Header.jsx';
import About from './components/sections/About.jsx';
import Navbar from './components/layouts/Navbar.jsx';
import Skills from './components/sections/Skills.jsx';
import styles from './App.module.css';
import Experience from './components/sections/Experience.jsx';
import Projects from './components/sections/Projects.jsx';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />

      <main className={styles.main}>
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App;
