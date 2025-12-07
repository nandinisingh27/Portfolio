import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold flex items-center gap-2 text-white">
          <span className="text-purple-400">&lt;</span>
          <span>Nandini Singh</span>
          <span className="text-purple-400">/&gt;</span>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-white">
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#experience" className="hover:text-purple-400 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 text-white">
          <div className="px-6 py-6 flex flex-col gap-4">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "backdrop-blur-md border-b shadow-sm"
//           : "bg-transparent"
//       }`}
//       style={{
//         background: scrolled ? "var(--navbar-bg)" : "transparent",
//         color: "var(--text)",
//         borderColor: scrolled ? "var(--card-border)" : "transparent",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-xl font-bold flex items-center gap-2">
//           <span style={{ color: "var(--accent)" }}>&lt;</span>
//           <span style={{ color: "var(--text)" }}>Nandini Singh</span>
//           <span style={{ color: "var(--accent)" }}>/&gt;</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-8 items-center">
//           {["about", "experience", "projects", "skills", "contact"].map(
//             (item) => (
//               <a
//                 key={item}
//                 href={`#${item}`}
//                 className="transition"
//                 style={{
//                   color: "var(--text)",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.target.style.color = "var(--accent)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.target.style.color = "var(--text)")
//                 }
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </a>
//             )
//           )}
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden transition"
//           style={{ color: "var(--text)" }}
//           onClick={() => setOpen((v) => !v)}
//         >
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div
//           className="md:hidden border-t transition-all"
//           style={{
//             background: "var(--navbar-mobile)",
//             borderColor: "var(--card-border)",
//             color: "var(--text)",
//           }}
//         >
//           <div className="px-6 py-6 flex flex-col gap-4">
//             {["about", "experience", "projects", "skills", "contact"].map(
//               (item) => (
//                 <a
//                   key={item}
//                   href={`#${item}`}
//                   className="transition"
//                   style={{ color: "var(--text)" }}
//                   onMouseEnter={(e) =>
//                     (e.target.style.color = "var(--accent)")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.style.color = "var(--text)")
//                   }
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
