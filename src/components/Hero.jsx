import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  // Update CSS variables instead of re-rendering
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden bg-[#050505]"
    >
      {/* FLICKER-FREE Spotlight */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_at_var(--mx)_var(--my),rgba(140,60,255,0.12),transparent_70%)] transition-none" /> */}

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20 animate-gradient" />

      {/* Floating blobs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-96 h-96 bg-purple-700/20 blur-[120px] rounded-full top-20 left-10"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[450px] h-[450px] bg-pink-600/20 blur-[150px] rounded-full bottom-20 right-10"
      />


      {/* Falling diagonal particles */}
      {[...Array(16)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-purple-300/70 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            x: "+=200",
            y: "+=350",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 border border-purple-500/20 rounded-full"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 bg-purple-400 rounded-full absolute -top-2 left-1/2"
        />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-20 text-center max-w-3xl px-5">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Nandini Singh
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-purple-300 font-medium h-10"
        >
          <Typewriter
            options={{
              strings: [
                "Backend Developer",
                "Django & Python Specialist",
                "Full-Stack Developer",
                "DSA Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 max-w-xl mx-auto mt-4"
        >
          I build fast, scalable backend systems using Django, DRF, PostgreSQL and modern tools.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mt-8 flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl flex items-center gap-2 font-medium"
          >
            View Projects <ArrowRight size={18} />
          </a>

          <a
            href="/images/latest_resume.pdf"
            download
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl flex items-center gap-2 font-medium"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons Only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex items-center justify-center gap-8 mt-10"
        >
          <a
            href="https://github.com/nandinisingh27"
            target="_blank"
            className="hover:scale-125 hover:text-purple-400 transition"
          >
            <Github size={28} />
          </a>

          <a
            href="mailto:nandinisingh52891@gmail.com"
            className="hover:scale-125 hover:text-purple-400 transition"
          >
            <Mail size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/nandinisingh07/"
            target="_blank"
            className="hover:scale-125 hover:text-purple-400 transition"
          >
            <Linkedin size={28} />
          </a>

          {/* X Logo SVG */}
          <a
            href="https://x.com/NandiniSingh_27"
            target="_blank"
            className="hover:scale-125 hover:text-purple-400 transition"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.21 2H21L14.33 10.09L22 22H15.82L11.06 14.66L5.6 22H2.77L9.8 13.3L2 2H8.35L12.66 8.71L18.21 2ZM16.92 20.33H18.74L7.15 3.6H5.22L16.92 20.33Z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
// import Typewriter from "typewriter-effect";

// const Hero = () => {
//   useEffect(() => {
//     const move = (e) => {
//       document.documentElement.style.setProperty("--mx", e.clientX + "px");
//       document.documentElement.style.setProperty("--my", e.clientY + "px");
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
//       style={{
//         background: "var(--bg)",
//         color: "var(--text)",
//       }}
//     >
//       {/* Animated gradient background */}
//       <div
//         className="absolute inset-0 animate-gradient"
//         style={{
//           background:
//             "linear-gradient(to bottom right, var(--accent)20, transparent, var(--accent)20)",
//         }}
//       />

//       {/* Floating blobs */}
//       <motion.div
//         animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//         className="absolute w-96 h-96 blur-[120px] rounded-full top-20 left-10"
//         style={{ background: "color-mix(in srgb, var(--accent) 30%, transparent)" }}
//       />

//       <motion.div
//         animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
//         transition={{ duration: 12, repeat: Infinity }}
//         className="absolute w-[450px] h-[450px] blur-[150px] rounded-full bottom-20 right-10"
//         style={{ background: "color-mix(in srgb, var(--accent-600) 25%, transparent)" }}
//       />

//       {/* Falling diagonal particles */}
//       {[...Array(16)].map((_, i) => (
//         <motion.span
//           key={i}
//           className="absolute w-1 h-1 rounded-full"
//           style={{ background: "var(--accent)" }}
//           initial={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//             opacity: 0,
//           }}
//           animate={{
//             x: "+=200",
//             y: "+=350",
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: 5 + Math.random() * 4,
//             repeat: Infinity,
//           }}
//         />
//       ))}

//       {/* Rotating ring */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//         className="absolute w-80 h-80 rounded-full"
//         style={{
//           border: `1px solid var(--accent-600)`,
//           opacity: 0.3,
//         }}
//       >
//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//           className="w-4 h-4 rounded-full absolute -top-2 left-1/2"
//           style={{ background: "var(--accent)" }}
//         />
//       </motion.div>

//       {/* Text Content */}
//       <div className="relative z-20 text-center max-w-3xl px-5">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
//           style={{ color: "var(--text)" }}
//         >
//           Hi, I'm{" "}
//           <span
//             className="text-transparent bg-clip-text bg-gradient-to-r"
//             style={{
//               backgroundImage: `linear-gradient(to right, var(--accent), var(--accent-600))`,
//             }}
//           >
//             Nandini Singh
//           </span>
//         </motion.h1>

//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-xl md:text-2xl font-medium h-10"
//           style={{ color: "var(--accent)" }}
//         >
//           <Typewriter
//             options={{
//               strings: [
//                 "Backend Developer",
//                 "Django & Python Specialist",
//                 "Full-Stack Developer",
//                 "DSA Enthusiast",
//               ],
//               autoStart: true,
//               loop: true,
//             }}
//           />
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="max-w-xl mx-auto mt-4"
//           style={{ color: "var(--text)" }}
//         >
//           I build fast, scalable backend systems using Django, DRF, PostgreSQL
//           and modern tools.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.8 }}
//           className="flex items-center justify-center gap-4 mt-8 flex-wrap"
//         >
//           <a
//             href="#projects"
//             className="px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition"
//             style={{
//               background: "var(--accent)",
//               color: "#fff",
//             }}
//           >
//             View Projects <ArrowRight size={18} />
//           </a>

//           <a
//             href="/Nandini_Resume.pdf"
//             download
//             className="px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition"
//             style={{
//               background: "var(--accent-600)",
//               color: "#fff",
//             }}
//           >
//             Download Resume
//           </a>
//         </motion.div>

//         {/* Social Icons */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.3, duration: 0.8 }}
//           className="flex items-center justify-center gap-8 mt-10"
//         >
//           {[
//             { icon: <Github size={28} />, link: "https://github.com/nandinisingh27" },
//             { icon: <Mail size={28} />, link: "mailto:nandinisingh52891@gmail.com" },
//             { icon: <Linkedin size={28} />, link: "https://www.linkedin.com/in/nandinisingh07/" },
//           ].map(({ icon, link }, i) => (
//             <a
//               key={i}
//               href={link}
//               target="_blank"
//               className="hover:scale-125 transition"
//               style={{ color: "var(--text)" }}
//               onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
//               onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
//             >
//               {icon}
//             </a>
//           ))}

//           {/* X logo */}
//           <a
//             href="https://x.com/NandiniSingh_27"
//             target="_blank"
//             className="hover:scale-125 transition"
//             style={{ color: "var(--text)" }}
//             onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
//             onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
//           >
//             <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M18.21 2H21L14.33 10.09L22 22H15.82L11.06 14.66L5.6 22H2.77L9.8 13.3L2 2H8.35L12.66 8.71L18.21 2ZM16.92 20.33H18.74L7.15 3.6H5.22L16.92 20.33Z" />
//             </svg>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
