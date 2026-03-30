import React, { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="App">
      <motion.div 
        className="progress-bar"
        style={{ 
          scaleX, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '4px', 
          background: 'var(--primary-color)', 
          transformOrigin: '0%',
          zIndex: 1000
        }} 
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer style={{ padding: '2rem', textAlign: 'center', opacity: 0.5, borderTop: '1px solid var(--glass-border)' }}>
        <p>&copy; {new Date().getFullYear()} Mohammad Niyas. Built for Excellence.</p>
      </footer>
    </div>
  );
}

export default App;
