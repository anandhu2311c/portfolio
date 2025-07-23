import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aurora from './components/Aurora';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="fixed inset-0 z-0">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
        <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <section id="home" className="section">
                <Home />
              </section>
              <section id="projects" className="section">
                <Projects />
              </section>
              <section id="certificates" className="section">
                <Certificates />
              </section>
              <section id="contact" className="section">
                <Contact />
              </section>
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;