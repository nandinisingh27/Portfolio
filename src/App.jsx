import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  
  useEffect(() => {
    document.title = "Nandini's Portfolio";
  }, []);

  return (
    // <div className="font-sans antialiased">
    <div className="relative font-sans antialiased bg-[#050505] overflow-hidden">

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) }
          50% { transform: translateY(-6px) }
          100% { transform: translateY(0) }
        }
      `}</style>
    </div>
  );
}
