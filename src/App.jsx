import { useState } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import Header from './components/sections/Header.jsx';
import About from './components/sections/About.jsx';
import Navbar from './components/layouts/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Header />
        <About />
      </main>
    </>
  );
}

export default App;
