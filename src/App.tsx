import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <section id="home" className="section">
        <Home />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
}

export default App;