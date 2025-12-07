
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App(){
return (
<div className="font-sans antialiased">
<Navbar />
<main>
<Hero />
<About />
<Experience/>
<Projects />
<Skills />
<Contact />
</main>
<Footer />


{/* Tailwind keyframes for small animations (add to your global CSS or tailwind config) */}
<style>{`@keyframes float {0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}`}</style>
</div>
);
}
// src/App.jsx
// import React from "react";
// import { ThemeProvider } from "./context/ThemeContext";
// import ThemeToggle from "./components/ThemeToggle";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

// export default function App() {
//   return (
//     <ThemeProvider defaultTheme="dark">
//       {/* GLOBAL THEME WRAPPER */}
//       <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">

//         <Navbar />

//         <main>
//           <Hero />
//           <About />
//           <Skills />
//           <Experience />
//           <Projects />
//           <Contact />
//         </main>

//         <ThemeToggle />
//       </div>
//     </ThemeProvider>
//   );
// }
