// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
// import Typewriter from "typewriter-effect";
// import RadioHero from "./RadioHero";

// const Hero = () => {
//   // Update CSS variables instead of re-rendering
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
//   id="home"
//   className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
// >

//       <motion.div
//         animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//         className="absolute w-96 h-96 bg-purple-700/20 blur-[120px] rounded-full top-20 left-10"
//       />
//       <motion.div
//         animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
//         transition={{ duration: 12, repeat: Infinity }}
//         className="absolute w-[450px] h-[450px] bg-pink-600/20 blur-[150px] rounded-full bottom-20 right-10"
//       />


//       {/* Falling diagonal particles */}
//       {[...Array(16)].map((_, i) => (
//         <motion.span
//           key={i}
//           className="absolute w-1 h-1 bg-purple-300/70 rounded-full"
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

//       {/* Rotating Ring */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//         className="absolute w-80 h-80 border border-purple-500/20 rounded-full"
//       >
//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//           className="w-4 h-4 bg-purple-400 rounded-full absolute -top-2 left-1/2"
//         />
//       </motion.div>

//       {/* Text Content */}
//       <div className="relative z-20 text-center max-w-3xl px-5">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
//         >
//           Hi, I'm{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
//             Nandini Singh
//           </span>
//         </motion.h1>

//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-xl md:text-2xl text-purple-300 font-medium h-10"
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
//           className="text-gray-300 max-w-xl mx-auto mt-4"
//         >
//           I build fast, scalable backend systems using Django, DRF, PostgreSQL and modern tools.
//         </motion.p>

//         {/* Buttons */}
//        <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ delay: 1, duration: 0.8 }}
//   className="flex items-center justify-center gap-4 mt-8 flex-wrap"
// >
//   <a
//     href="#projects"
//     className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl flex items-center gap-2 font-medium"
//   >
//     View Projects <ArrowRight size={18} />
//   </a>

//   {/* Updated Resume Button */}
//   <a
//     href="https://drive.google.com/file/d/1VloswbvyFCpLeePV8z7PH1GZ8BfIpyBV/view?usp=sharing"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl flex items-center gap-2 font-medium"
//   >
//     View Resume  <ArrowRight size={18} />
//   </a>
// </motion.div>

//         {/* Social Icons Only */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.3, duration: 0.8 }}
//           className="flex items-center justify-center gap-8 mt-10"
//         >
//           <a
//             href="https://github.com/nandinisingh27"
//             target="_blank"
//             className="hover:scale-125 hover:text-purple-400 transition"
//           >
//             <Github size={28} />
//           </a>

//           <a
//             href="mailto:nandinisingh52891@gmail.com"
//             className="hover:scale-125 hover:text-purple-400 transition"
//           >
//             <Mail size={28} />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/nandinisingh07/"
//             target="_blank"
//             className="hover:scale-125 hover:text-purple-400 transition"
//           >
//             <Linkedin size={28} />
//           </a>

//           {/* X Logo SVG */}
//           <a
//             href="https://x.com/NandiniSingh_27"
//             target="_blank"
//             className="hover:scale-125 hover:text-purple-400 transition"
//           >
//             <svg
//               width="28"
//               height="28"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M18.21 2H21L14.33 10.09L22 22H15.82L11.06 14.66L5.6 22H2.77L9.8 13.3L2 2H8.35L12.66 8.71L18.21 2ZM16.92 20.33H18.74L7.15 3.6H5.22L16.92 20.33Z" />
//             </svg>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;









// NEWWWWWWWWWWW
// import React, { useEffect, useRef, useState, useCallback } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
// import Typewriter from "typewriter-effect";

// /* ─── Command Responses ─────────────────────────────────────── */
// const COMMANDS = {
//   help: [
//     { text: "Available commands:", color: "#a78bfa" },
//     { text: "  whoami          → about me" },
//     { text: "  ls projects/    → my projects" },
//     { text: "  ls experience/  → work history" },
//     { text: "  cat skills.txt  → tech stack" },
//     { text: "  cat contact.txt → get in touch" },
//     { text: "  echo $STATUS    → availability" },
//     { text: "  clear           → clear terminal" },
//   ],
//   whoami: [
//     { text: "Nandini Singh", color: "#a78bfa" },
//     { text: "Backend Developer · Django & Python Specialist" },
//     { text: "Building scalable systems, one API at a time." },
//   ],
//   "ls projects/": [
//     { text: "📁  drf-ecommerce-api/",          color: "#93c5fd" },
//     { text: "📁  realtime-chat-websocket/",     color: "#93c5fd" },
//     { text: "📁  celery-task-scheduler/",       color: "#93c5fd" },
//     { text: "📁  jwt-auth-microservice/",       color: "#93c5fd" },
//     { text: "📁  postgres-query-optimizer/",    color: "#93c5fd" },
//   ],
//   "ls experience/": [
//     { text: "🗂   Backend Intern  @  TechStartup   [2023]" },
//     { text: "🗂   Freelance Developer              [2023–24]" },
//     { text: "🗂   Open Source Contributor          [2024–now]" },
//   ],
//   "cat skills.txt": [
//     { text: "Languages   →  Python, JavaScript", color: "#fde68a" },
//     { text: "Frameworks  →  Django, DRF, FastAPI", color: "#fde68a" },
//     { text: "Databases   →  PostgreSQL, Redis, SQLite", color: "#fde68a" },
//     { text: "Tools       →  Docker, Git, Celery, Linux", color: "#fde68a" },
//     { text: "Other       →  JWT, WebSockets, REST, DSA", color: "#fde68a" },
//   ],
//   "cat contact.txt": [
//     { text: "📧  nandinisingh52891@gmail.com",      color: "#6ee7b7" },
//     { text: "🐙  github.com/nandinisingh27",         color: "#6ee7b7" },
//     { text: "💼  linkedin.com/in/nandinisingh07/",  color: "#6ee7b7" },
//     { text: "🐦  x.com/NandiniSingh_27",            color: "#6ee7b7" },
//   ],
//   "echo $status": [
//     { text: "✅  open to work — let's build something.", color: "#4ade80" },
//   ],
// };

// // aliases & shorthands
// const ALIASES = {
//   "ls projects": "ls projects/",
//   "ls experience": "ls experience/",
//   "cat skills": "cat skills.txt",
//   "cat contact": "cat contact.txt",
//   "echo $STATUS": "echo $status",
//   "ls": [
//     { text: "projects/   experience/   skills.txt   contact.txt" },
//   ],
//   "pwd": [{ text: "/home/nandini/portfolio" }],
//   "date": [{ text: () => new Date().toDateString() }],
// };

// const INTRO = [
//   { text: "Welcome to Nandini's portfolio terminal.", color: "#a78bfa" },
//   { text: 'Type "help" to see available commands.', color: "rgba(148,163,184,0.6)" },
//   { text: "" },
// ];

// /* ─── Interactive Terminal ───────────────────────────────────── */
// const Terminal = () => {
//   const [history, setHistory] = useState(INTRO);   // {text, color?}[]
//   const [input, setInput] = useState("");
//   const [cmdHistory, setCmdHistory] = useState([]); // past commands
//   const [histIdx, setHistIdx] = useState(-1);
//   const inputRef = useRef(null);
//   const bodyRef  = useRef(null);

//   const scrollBottom = () => {
//     setTimeout(() => {
//       if (bodyRef.current)
//         bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
//     }, 30);
//   };

//   const runCommand = useCallback((raw) => {
//     const cmd = raw.trim().toLowerCase();
//     if (!cmd) return;

//     // echo entered command into history
//     const newLines = [{ text: `❯ ${raw.trim()}`, color: "#e2e8f0", isCmd: true }];

//     if (cmd === "clear") {
//       setHistory(INTRO);
//       setCmdHistory((p) => [raw.trim(), ...p]);
//       setHistIdx(-1);
//       return;
//     }

//     // resolve alias or direct command
//     const resolved = ALIASES[cmd] || ALIASES[raw.trim()] || COMMANDS[cmd] || COMMANDS[raw.trim()];

//     if (resolved) {
//       const lines = Array.isArray(resolved) ? resolved : resolved;
//       lines.forEach((l) => {
//         const text = typeof l.text === "function" ? l.text() : l.text;
//         newLines.push({ ...l, text });
//       });
//     } else {
//       newLines.push({
//         text: `command not found: ${raw.trim()}  (try "help")`,
//         color: "#f87171",
//       });
//     }

//     newLines.push({ text: "" }); // spacer

//     setHistory((prev) => [...prev, ...newLines]);
//     setCmdHistory((p) => [raw.trim(), ...p]);
//     setHistIdx(-1);
//     scrollBottom();
//   }, []);

//   const handleKey = (e) => {
//     if (e.key === "Enter") {
//       runCommand(input);
//       setInput("");
//     } else if (e.key === "ArrowUp") {
//       e.preventDefault();
//       const next = Math.min(histIdx + 1, cmdHistory.length - 1);
//       setHistIdx(next);
//       setInput(cmdHistory[next] ?? "");
//     } else if (e.key === "ArrowDown") {
//       e.preventDefault();
//       const next = Math.max(histIdx - 1, -1);
//       setHistIdx(next);
//       setInput(next === -1 ? "" : cmdHistory[next]);
//     } else if (e.key === "Tab") {
//       e.preventDefault();
//       // simple tab-complete
//       const allCmds = [...Object.keys(COMMANDS), ...Object.keys(ALIASES), "clear", "help"];
//       const match = allCmds.find((c) => c.startsWith(input) && c !== input);
//       if (match) setInput(match);
//     }
//   };

//   useEffect(scrollBottom, [history]);

//   return (
//     <div className="term-shell" onClick={() => inputRef.current?.focus()}>
//       {/* header */}
//       <div className="term-hdr">
//         <div className="term-dots">
//           <span style={{ background: "#ff5f57" }} />
//           <span style={{ background: "#febc2e" }} />
//           <span style={{ background: "#28c840" }} />
//         </div>
//         <span className="term-ttl">nandini@portfolio: ~</span>
//       </div>

//       {/* output */}
//       <div className="term-body" ref={bodyRef}>
//         {history.map((line, i) => (
//           <div
//             key={i}
//             className={`tl ${line.isCmd ? "tl-cmd" : "tl-out"}`}
//             style={line.color ? { color: line.color } : {}}
//           >
//             {line.text}
//           </div>
//         ))}

//         {/* live input row */}
//         <div className="tl tl-input-row">
//           <span className="t-prompt">❯&nbsp;</span>
//           <span className="t-typed">{input}</span>
//           <span className="t-caret">█</span>
//           <input
//             ref={inputRef}
//             className="t-hidden-input"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleKey}
//             autoFocus
//             spellCheck={false}
//             autoComplete="off"
//             autoCapitalize="off"
//           />
//         </div>
//       </div>

//       <style>{`
//         .term-shell {
//           width: 100%;
//           max-width: 440px;
//           background: #0b0b14;
//           border: 1px solid rgba(139,92,246,0.2);
//           border-radius: 13px;
//           overflow: hidden;
//           cursor: text;
//           box-shadow:
//             0 0 0 1px rgba(139,92,246,0.07),
//             0 28px 80px rgba(0,0,0,0.65),
//             0 0 70px rgba(139,92,246,0.06);
//           font-family: 'JetBrains Mono','Fira Code','Cascadia Code',monospace;
//         }
//         .term-hdr {
//           background: #13131f;
//           border-bottom: 1px solid rgba(139,92,246,0.13);
//           padding: 11px 16px;
//           display: flex; align-items: center; gap: 10px;
//           user-select: none;
//         }
//         .term-dots { display:flex; gap:6px; }
//         .term-dots span { width:11px; height:11px; border-radius:50%; display:block; }
//         .term-ttl { font-size:11px; color:rgba(139,92,246,0.55); letter-spacing:.04em; margin-left:4px; }
//         .term-body {
//           padding: 14px 18px 16px;
//           min-height: 280px;
//           max-height: 340px;
//           overflow-y: auto;
//           scrollbar-width: thin;
//           scrollbar-color: rgba(139,92,246,0.2) transparent;
//           font-size: 12px;
//           line-height: 1.75;
//         }
//         .term-body::-webkit-scrollbar { width: 4px; }
//         .term-body::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.25); border-radius: 4px; }
//         .tl { display:block; white-space:pre-wrap; word-break:break-all; color:rgba(148,163,184,0.7); }
//         .tl-cmd { color:#e2e8f0 !important; }
//         .tl-input-row { display:flex; align-items:center; position:relative; }
//         .t-prompt { color:#8b5cf6; flex-shrink:0; }
//         .t-typed   { color:#e2e8f0; }
//         .t-caret   { display:inline-block; color:#8b5cf6; font-size:12px; line-height:1; animation:blink 1.1s step-end infinite; margin-left:1px; }
//         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
//         .t-hidden-input {
//           position:absolute; opacity:0; width:100%; height:100%;
//           top:0; left:0; cursor:text; border:none; outline:none;
//           background:transparent; color:transparent; caret-color:transparent;
//           font-size:12px;
//         }
//         /* hint bar */
//         .term-hint {
//           padding: 7px 18px;
//           border-top: 1px solid rgba(139,92,246,0.1);
//           font-size: 10.5px;
//           color: rgba(139,92,246,0.4);
//           font-family: 'JetBrains Mono', monospace;
//           user-select: none;
//         }
//       `}</style>

//       {/* hint */}
//       <div className="term-hint">tab to autocomplete · ↑↓ history · type "help"</div>
//     </div>
//   );
// };

// /* ─── Skill Ticker ────────────────────────────────────────────── */
// const SKILLS = [
//   "Python","Django","DRF","PostgreSQL","Redis",
//   "Celery","Docker","REST APIs","JWT Auth","WebSockets",
//   "FastAPI","Git","Linux","AWS","DSA",
// ];

// const Ticker = () => (
//   <div className="tk-wrap">
//     <div className="tk-track">
//       {[...SKILLS,...SKILLS].map((s,i)=>(
//         <span key={i} className="tk-chip">
//           <span className="tk-gem">◆</span>{s}
//         </span>
//       ))}
//     </div>
//     <style>{`
//       .tk-wrap {
//         position:absolute; bottom:24px; left:0; width:100%;
//         overflow:hidden; z-index:20;
//         -webkit-mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);
//         mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);
//       }
//       .tk-track { display:flex; width:max-content; animation:tkMove 26s linear infinite; }
//       .tk-chip {
//         display:inline-flex; align-items:center; gap:7px;
//         padding:0 22px; font-size:11px;
//         font-family:'JetBrains Mono',monospace;
//         letter-spacing:.06em; color:rgba(139,92,246,.5);
//         border-right:1px solid rgba(139,92,246,.1);
//         white-space:nowrap; transition:color .2s;
//       }
//       .tk-chip:hover { color:rgba(236,72,153,.8); }
//       .tk-gem { font-size:7px; color:rgba(236,72,153,.35); }
//       @keyframes tkMove { from{transform:translateX(0)} to{transform:translateX(-50%)} }
//     `}</style>
//   </div>
// );

// /* ─── Hero ───────────────────────────────────────────────────── */
// const Hero = () => {
//   const spotRef = useRef(null);

//   useEffect(() => {
//     const fn = (e) => {
//       if (spotRef.current) {
//         spotRef.current.style.left = e.clientX + "px";
//         spotRef.current.style.top  = e.clientY + "px";
//       }
//     };
//     window.addEventListener("mousemove", fn);
//     return () => window.removeEventListener("mousemove", fn);
//   }, []);

//   return (
//     <section id="home" className="h-root">
//       <div ref={spotRef} className="h-cursor-glow" />

//       {/* blobs */}
//       <motion.div
//         animate={{ x:[0,40,0], y:[0,-25,0] }}
//         transition={{ duration:11, repeat:Infinity, ease:"easeInOut" }}
//         className="h-blob h-blob-v"
//       />
//       <motion.div
//         animate={{ x:[0,-60,0], y:[0,35,0] }}
//         transition={{ duration:14, repeat:Infinity, ease:"easeInOut" }}
//         className="h-blob h-blob-p"
//       />

//       <div className="h-grid" />

//       {/* ── two-column ── */}
//       <div className="h-inner">

//         {/* LEFT */}
//         <div className="h-left">
//           <motion.div
//             initial={{ opacity:0, y:-8 }}
//             animate={{ opacity:1, y:0 }}
//             transition={{ duration:.5 }}
//             className="h-pill"
//           >
//             <span className="h-dot" /> open to work
//           </motion.div>

//           <motion.h1
//             initial={{ opacity:0, y:22 }}
//             animate={{ opacity:1, y:0 }}
//             transition={{ duration:.7, delay:.1 }}
//             className="h-name"
//           >
//             Hi, I'm{" "}
//             <span className="h-name-grad">Nandini Singh</span>
//           </motion.h1>

//           <motion.div
//             initial={{ opacity:0 }}
//             animate={{ opacity:1 }}
//             transition={{ delay:.35, duration:.7 }}
//             className="h-role"
//           >
//             <Typewriter
//               options={{
//                 strings:["Backend Developer","Django & Python Specialist","Full-Stack Developer","DSA Enthusiast"],
//                 autoStart:true, loop:true,
//               }}
//             />
//           </motion.div>

//           <motion.p
//             initial={{ opacity:0 }}
//             animate={{ opacity:1 }}
//             transition={{ delay:.55, duration:.7 }}
//             className="h-bio"
//           >
//             I build fast, scalable backend systems with Django, DRF,
//             and PostgreSQL — focused on clean architecture and real-world performance.
//           </motion.p>

//           <motion.div
//             initial={{ opacity:0 }}
//             animate={{ opacity:1 }}
//             transition={{ delay:.75, duration:.7 }}
//             className="h-ctas"
//           >
//             <motion.a href="#projects" whileHover={{scale:1.04}} whileTap={{scale:.97}} className="h-btn-fill">
//               View Projects <ArrowRight size={15}/>
//             </motion.a>
//             <motion.a
//               href="https://drive.google.com/file/d/1VloswbvyFCpLeePV8z7PH1GZ8BfIpyBV/view?usp=sharing"
//               target="_blank" rel="noopener noreferrer"
//               whileHover={{scale:1.04}} whileTap={{scale:.97}}
//               className="h-btn-ghost"
//             >
//               Resume <ArrowRight size={15}/>
//             </motion.a>
//           </motion.div>

//           <motion.div
//             initial={{ opacity:0 }}
//             animate={{ opacity:1 }}
//             transition={{ delay:.95, duration:.7 }}
//             className="h-socials"
//           >
//             {[
//               { href:"https://github.com/nandinisingh27",           icon:<Github size={19}/>,   label:"GitHub"   },
//               { href:"mailto:nandinisingh52891@gmail.com",          icon:<Mail size={19}/>,     label:"Email"    },
//               { href:"https://www.linkedin.com/in/nandinisingh07/", icon:<Linkedin size={19}/>, label:"LinkedIn" },
//               {
//                 href:"https://x.com/NandiniSingh_27",
//                 icon:(
//                   <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M18.21 2H21L14.33 10.09L22 22H15.82L11.06 14.66L5.6 22H2.77L9.8 13.3L2 2H8.35L12.66 8.71L18.21 2ZM16.92 20.33H18.74L7.15 3.6H5.22L16.92 20.33Z"/>
//                   </svg>
//                 ),
//                 label:"X",
//               },
//             ].map(({href,icon,label})=>(
//               <motion.a
//                 key={label} href={href}
//                 target={href.startsWith("mailto")?undefined:"_blank"}
//                 rel="noopener noreferrer" title={label}
//                 whileHover={{y:-3,scale:1.15}} whileTap={{scale:.9}}
//                 className="h-social-btn"
//               >{icon}</motion.a>
//             ))}
//           </motion.div>
//         </div>

//         {/* RIGHT */}
//         <motion.div
//           initial={{ opacity:0, x:40 }}
//           animate={{ opacity:1, x:0 }}
//           transition={{ delay:.5, duration:.9, ease:"easeOut" }}
//           className="h-right"
//         >
//           <motion.div
//             animate={{ y:[0,-7,0] }}
//             transition={{ duration:4.5, repeat:Infinity, ease:"easeInOut" }}
//           >
//             <Terminal />
//           </motion.div>
//         </motion.div>
//       </div>

//       <Ticker />

//       <style>{`
//         .h-root {
//           position:relative; min-height:100vh; width:100%;
//           display:flex; flex-direction:column;
//           align-items:center; justify-content:center;
//           color:#fff; overflow:hidden;
//         }
//         .h-cursor-glow {
//           position:fixed; width:560px; height:560px; border-radius:50%;
//           pointer-events:none; z-index:1; transform:translate(-50%,-50%);
//           background:radial-gradient(circle,rgba(139,92,246,.06) 0%,transparent 68%);
//           transition:left .08s ease,top .08s ease;
//         }
//         .h-blob { position:absolute; border-radius:50%; pointer-events:none; z-index:0; }
//         .h-blob-v { width:360px; height:360px; background:rgba(109,40,217,.17); filter:blur(110px); top:8%; left:4%; }
//         .h-blob-p { width:400px; height:400px; background:rgba(219,39,119,.13); filter:blur(130px); bottom:8%; right:4%; }
//         .h-grid {
//           position:absolute; inset:0;
//           background-image:
//             linear-gradient(rgba(139,92,246,.033) 1px,transparent 1px),
//             linear-gradient(90deg,rgba(139,92,246,.033) 1px,transparent 1px);
//           background-size:56px 56px; z-index:0;
//           mask-image:radial-gradient(ellipse at center,black 20%,transparent 72%);
//         }
//         .h-inner {
//           position:relative; z-index:20;
//           display:flex; align-items:center; justify-content:center;
//           gap:64px; width:100%; max-width:1160px; padding:0 48px;
//         }
//         .h-left {
//           flex:1; min-width:0;
//           display:flex; flex-direction:column; align-items:flex-start;
//         }
//         .h-pill {
//           display:inline-flex; align-items:center; gap:8px;
//           background:rgba(34,197,94,.07); border:1px solid rgba(34,197,94,.22);
//           color:rgba(134,239,172,.85); font-size:11px; letter-spacing:.08em;
//           text-transform:uppercase; padding:5px 13px; border-radius:999px;
//           margin-bottom:22px; font-family:'JetBrains Mono',monospace;
//         }
//         .h-dot {
//           width:7px; height:7px; border-radius:50%;
//           background:#22c55e; box-shadow:0 0 8px #22c55e;
//           animation:dotP 2s ease-in-out infinite;
//         }
//         @keyframes dotP { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }

//         /* ── ORIGINAL FONTS from user's code ── */
//         .h-name {
//           font-size:clamp(2.4rem,5vw,4rem);
//           font-weight:700; line-height:1.15;
//           letter-spacing:-.01em; margin-bottom:14px; color:#fff;
//         }
//         .h-name-grad {
//           background:linear-gradient(to right,#c084fc,#f472b6);
//           -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
//         }
//         .h-role { font-size:1.1rem; color:#d8b4fe; font-weight:500; min-height:30px; margin-bottom:16px; }
//         .h-bio {
//           font-size:.92rem; color:#d1d5db;
//           max-width:420px; line-height:1.75; margin-bottom:30px;
//         }
//         .h-ctas { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:30px; }
//         .h-btn-fill, .h-btn-ghost {
//           display:inline-flex; align-items:center; gap:7px;
//           padding:12px 24px; border-radius:12px;
//           font-size:.9rem; font-weight:500;
//           text-decoration:none; transition:all .2s; cursor:pointer;
//         }
//         .h-btn-fill  { background:#9333ea; color:#fff; border:1px solid #9333ea; }
//         .h-btn-fill:hover  { background:#7e22ce; box-shadow:0 0 22px rgba(147,51,234,.4); }
//         .h-btn-ghost { background:transparent; color:#d8b4fe; border:1px solid rgba(168,85,247,.35); }
//         .h-btn-ghost:hover { border-color:rgba(168,85,247,.65); background:rgba(168,85,247,.08); }
//         .h-socials { display:flex; gap:10px; }
//         .h-social-btn {
//           display:flex; align-items:center; justify-content:center;
//           width:40px; height:40px; border-radius:10px;
//           border:1px solid rgba(168,85,247,.2);
//           background:rgba(168,85,247,.07);
//           color:rgba(209,213,219,.7);
//           transition:color .2s,border-color .2s,background .2s;
//         }
//         .h-social-btn:hover { color:#c084fc; border-color:rgba(168,85,247,.55); background:rgba(168,85,247,.15); }
//         .h-right {
//           flex:1; display:flex; align-items:center; justify-content:center; min-width:0;
//         }
//         @media (max-width:900px) {
//           .h-inner { flex-direction:column; gap:40px; padding:80px 22px 100px; text-align:center; }
//           .h-left  { align-items:center; }
//           .h-bio   { text-align:center; }
//           .h-right { width:100%; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Typewriter from "typewriter-effect";

/* ─── Command Responses ─────────────────────────────────────── */
const COMMANDS = {
  help: [
    { text: "Available commands:", color: "#a78bfa" },
    { text: "  whoami          → about me" },
    { text: "  ls projects/    → my projects" },
    { text: "  ls experience/  → work history" },
    { text: "  cat skills.txt  → tech stack" },
    { text: "  cat contact.txt → get in touch" },
    { text: "  echo $STATUS    → availability" },
    { text: "  clear           → clear terminal" },
  ],
  whoami: [
    { text: "Nandini Singh", color: "#a78bfa" },
    { text: "Backend Developer · Django & Python Specialist" },
    { text: "Building scalable systems, one API at a time." },
  ],
  "ls projects/": [
    { text: "📁  drf-ecommerce-api/",          color: "#93c5fd" },
    { text: "📁  realtime-chat-websocket/",     color: "#93c5fd" },
    { text: "📁  celery-task-scheduler/",       color: "#93c5fd" },
    { text: "📁  jwt-auth-microservice/",       color: "#93c5fd" },
    { text: "📁  postgres-query-optimizer/",    color: "#93c5fd" },
  ],
  "ls experience/": [
    { text: "🗂   Backend Intern  @  TechStartup   [2023]" },
    { text: "🗂   Freelance Developer              [2023–24]" },
    { text: "🗂   Open Source Contributor          [2024–now]" },
  ],
  "cat skills.txt": [
    { text: "Languages   →  Python, JavaScript", color: "#fde68a" },
    { text: "Frameworks  →  Django, DRF, FastAPI", color: "#fde68a" },
    { text: "Databases   →  PostgreSQL, Redis, SQLite", color: "#fde68a" },
    { text: "Tools       →  Docker, Git, Celery, Linux", color: "#fde68a" },
    { text: "Other       →  JWT, WebSockets, REST, DSA", color: "#fde68a" },
  ],
  "cat contact.txt": [
    { text: "📧  nandinisingh52891@gmail.com",      color: "#6ee7b7" },
    { text: "🐙  github.com/nandinisingh27",         color: "#6ee7b7" },
    { text: "💼  linkedin.com/in/nandinisingh07/",  color: "#6ee7b7" },
    { text: "🐦  x.com/NandiniSingh_27",            color: "#6ee7b7" },
  ],
  "echo $status": [
    { text: "✅  open to work — let's build something.", color: "#4ade80" },
  ],
};

// aliases & shorthands
const ALIASES = {
  "ls projects": "ls projects/",
  "ls experience": "ls experience/",
  "cat skills": "cat skills.txt",
  "cat contact": "cat contact.txt",
  "echo $STATUS": "echo $status",
  "ls": [
    { text: "projects/   experience/   skills.txt   contact.txt" },
  ],
  "pwd": [{ text: "/home/nandini/portfolio" }],
  "date": [{ text: () => new Date().toDateString() }],
};

const INTRO = [
  { text: "Welcome to Nandini's portfolio terminal.", color: "#a78bfa" },
  { text: 'Type "help" to see available commands.', color: "rgba(148,163,184,0.6)" },
  { text: "" },
];

/* ─── Interactive Terminal ───────────────────────────────────── */
const Terminal = () => {
  const [history, setHistory] = useState(INTRO);   // {text, color?}[]
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]); // past commands
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef  = useRef(null);

  const scrollBottom = () => {
    setTimeout(() => {
      if (bodyRef.current)
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, 30);
  };

  const runCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // echo entered command into history
    const newLines = [{ text: `❯ ${raw.trim()}`, color: "#e2e8f0", isCmd: true }];

    if (cmd === "clear") {
      setHistory(INTRO);
      setCmdHistory((p) => [raw.trim(), ...p]);
      setHistIdx(-1);
      return;
    }

    // resolve alias or direct command
    const resolved = ALIASES[cmd] || ALIASES[raw.trim()] || COMMANDS[cmd] || COMMANDS[raw.trim()];

    if (resolved) {
      const lines = Array.isArray(resolved) ? resolved : resolved;
      lines.forEach((l) => {
        const text = typeof l.text === "function" ? l.text() : l.text;
        newLines.push({ ...l, text });
      });
    } else {
      newLines.push({
        text: `command not found: ${raw.trim()}  (try "help")`,
        color: "#f87171",
      });
    }

    newLines.push({ text: "" }); // spacer

    setHistory((prev) => [...prev, ...newLines]);
    setCmdHistory((p) => [raw.trim(), ...p]);
    setHistIdx(-1);
    scrollBottom();
  }, []);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      // simple tab-complete
      const allCmds = [...Object.keys(COMMANDS), ...Object.keys(ALIASES), "clear", "help"];
      const match = allCmds.find((c) => c.startsWith(input) && c !== input);
      if (match) setInput(match);
    }
  };

  useEffect(scrollBottom, [history]);

  return (
    <div className="term-shell" onClick={() => inputRef.current?.focus()}>
      {/* header */}
      <div className="term-hdr">
        <div className="term-dots">
          <span style={{ background: "#ff5f57" }} />
          <span style={{ background: "#febc2e" }} />
          <span style={{ background: "#28c840" }} />
        </div>
        <span className="term-ttl">nandini@portfolio: ~</span>
      </div>

      {/* output */}
      <div className="term-body" ref={bodyRef}>
        {history.map((line, i) => (
          <div
            key={i}
            className={`tl ${line.isCmd ? "tl-cmd" : "tl-out"}`}
            style={line.color ? { color: line.color } : {}}
          >
            {line.text}
          </div>
        ))}

        {/* live input row */}
        <div className="tl tl-input-row">
          <span className="t-prompt">❯&nbsp;</span>
          <span className="t-typed">{input}</span>
          <span className="t-caret">█</span>
          <input
            ref={inputRef}
            className="t-hidden-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
          />
        </div>
      </div>

      <style>{`
        .term-shell {
          width: 100%;
          max-width: 440px;
          background: #0b0b14;
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 13px;
          overflow: hidden;
          cursor: text;
          box-shadow:
            0 0 0 1px rgba(139,92,246,0.07),
            0 28px 80px rgba(0,0,0,0.65),
            0 0 70px rgba(139,92,246,0.06);
          font-family: 'JetBrains Mono','Fira Code','Cascadia Code',monospace;
        }
        .term-hdr {
          background: #13131f;
          border-bottom: 1px solid rgba(139,92,246,0.13);
          padding: 11px 16px;
          display: flex; align-items: center; gap: 10px;
          user-select: none;
        }
        .term-dots { display:flex; gap:6px; }
        .term-dots span { width:11px; height:11px; border-radius:50%; display:block; }
        .term-ttl { font-size:11px; color:rgba(139,92,246,0.55); letter-spacing:.04em; margin-left:4px; }
        .term-body {
          padding: 14px 18px 16px;
          min-height: 280px;
          max-height: 340px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(139,92,246,0.2) transparent;
          font-size: 12px;
          line-height: 1.75;
        }
        .term-body::-webkit-scrollbar { width: 4px; }
        .term-body::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.25); border-radius: 4px; }
        .tl { display:block; white-space:pre-wrap; word-break:break-all; color:rgba(148,163,184,0.7); }
        .tl-cmd { color:#e2e8f0 !important; }
        .tl-input-row { display:flex; align-items:center; position:relative; }
        .t-prompt { color:#8b5cf6; flex-shrink:0; }
        .t-typed   { color:#e2e8f0; }
        .t-caret   { display:inline-block; color:#8b5cf6; font-size:12px; line-height:1; animation:blink 1.1s step-end infinite; margin-left:1px; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .t-hidden-input {
          position:absolute; opacity:0; width:100%; height:100%;
          top:0; left:0; cursor:text; border:none; outline:none;
          background:transparent; color:transparent; caret-color:transparent;
          font-size:12px;
        }
        /* hint bar */
        .term-hint {
          padding: 7px 18px;
          border-top: 1px solid rgba(139,92,246,0.1);
          font-size: 10.5px;
          color: rgba(139,92,246,0.4);
          font-family: 'JetBrains Mono', monospace;
          user-select: none;
        }
      `}</style>

      {/* hint */}
      <div className="term-hint">tab to autocomplete · ↑↓ history · type "help"</div>
    </div>
  );
};

/* ─── Skill Ticker ────────────────────────────────────────────── */
const SKILLS = [
  "Python","Django","DRF","PostgreSQL","Redis",
  "Celery","Docker","REST APIs","JWT","WebSockets",
  "FastAPI","Git","Linux","AWS","DSA",
];

const Ticker = () => (
  <div className="tk-wrap">
    {/* top rule */}
    <div className="tk-rule" />
    <div className="tk-track">
      {[...SKILLS,...SKILLS].map((s,i)=>(
        <span key={i} className="tk-chip">
          {s}
          <span className="tk-slash">&nbsp;/</span>
        </span>
      ))}
    </div>
    <style>{`
      .tk-wrap {
        position:absolute; bottom:0; left:0; width:100%;
        overflow:hidden; z-index:20;
        -webkit-mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);
        mask-image:linear-gradient(to right,transparent,black 8%,black 92%,transparent);
      }
      .tk-rule {
        width:100%; height:1px;
        background:linear-gradient(to right,transparent,rgba(168,85,247,.15) 20%,rgba(168,85,247,.15) 80%,transparent);
        margin-bottom:0;
      }
      .tk-track {
        display:flex; width:max-content;
        animation:tkMove 32s linear infinite;
        padding: 10px 0;
      }
      .tk-chip {
        display:inline-flex; align-items:center;
        padding:0 18px; font-size:10.5px;
        font-family:'JetBrains Mono',monospace;
        letter-spacing:.1em; text-transform:uppercase;
        color:rgba(148,163,184,.3);
        white-space:nowrap; transition:color .3s;
      }
      .tk-chip:hover { color:rgba(196,132,252,.7); }
      .tk-slash { color:rgba(168,85,247,.2); }
      @keyframes tkMove { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    `}</style>
  </div>
);

/* ─── Hero ───────────────────────────────────────────────────── */
const Hero = () => {
  const spotRef = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      if (spotRef.current) {
        spotRef.current.style.left = e.clientX + "px";
        spotRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section id="home" className="h-root">
      <div ref={spotRef} className="h-cursor-glow" />

      {/* blobs */}
      <motion.div
        animate={{ x:[0,40,0], y:[0,-25,0] }}
        transition={{ duration:11, repeat:Infinity, ease:"easeInOut" }}
        className="h-blob h-blob-v"
      />
      <motion.div
        animate={{ x:[0,-60,0], y:[0,35,0] }}
        transition={{ duration:14, repeat:Infinity, ease:"easeInOut" }}
        className="h-blob h-blob-p"
      />

      <div className="h-grid" />

      {/* ── two-column ── */}
      <div className="h-inner">

        {/* LEFT */}
        <div className="h-left">
          <motion.div
            initial={{ opacity:0, y:-8 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.5 }}
            className="h-pill"
          >
            <span className="h-dot" />
            <span>available for roles</span>
            <span className="h-pill-sep">/</span>
            <span className="h-pill-dim">backend · fullstack</span>
          </motion.div>

          <motion.h1
            initial={{ opacity:0, y:22 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.7, delay:.1 }}
            className="h-name"
          >
            Hi, I'm{" "}
            <span className="h-name-grad">Nandini Singh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.35, duration:.7 }}
            className="h-role"
          >
            <Typewriter
              options={{
                strings:["Backend Developer","Django & Python Specialist","Full-Stack Developer","DSA Enthusiast"],
                autoStart:true, loop:true,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.55, duration:.7 }}
            className="h-bio"
          >
            I build fast, scalable backend systems with Django, DRF,
            and PostgreSQL — focused on clean architecture and real-world performance.
          </motion.p>

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.75, duration:.7 }}
            className="h-ctas"
          >
            <motion.a href="#projects" whileHover={{scale:1.04}} whileTap={{scale:.97}} className="h-btn-fill">
              View Projects <ArrowRight size={15}/>
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1VloswbvyFCpLeePV8z7PH1GZ8BfIpyBV/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              whileHover={{scale:1.04}} whileTap={{scale:.97}}
              className="h-btn-ghost"
            >
              Resume <ArrowRight size={15}/>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.95, duration:.7 }}
            className="h-socials"
          >
            {[
              { href:"https://github.com/nandinisingh27",           icon:<Github size={19}/>,   label:"GitHub"   },
              { href:"mailto:nandinisingh52891@gmail.com",          icon:<Mail size={19}/>,     label:"Email"    },
              { href:"https://www.linkedin.com/in/nandinisingh07/", icon:<Linkedin size={19}/>, label:"LinkedIn" },
              {
                href:"https://x.com/NandiniSingh_27",
                icon:(
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.21 2H21L14.33 10.09L22 22H15.82L11.06 14.66L5.6 22H2.77L9.8 13.3L2 2H8.35L12.66 8.71L18.21 2ZM16.92 20.33H18.74L7.15 3.6H5.22L16.92 20.33Z"/>
                  </svg>
                ),
                label:"X",
              },
            ].map(({href,icon,label})=>(
              <motion.a
                key={label} href={href}
                target={href.startsWith("mailto")?undefined:"_blank"}
                rel="noopener noreferrer" title={label}
                whileHover={{y:-3,scale:1.15}} whileTap={{scale:.9}}
                className="h-social-btn"
              >{icon}</motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity:0, x:40 }}
          animate={{ opacity:1, x:0 }}
          transition={{ delay:.5, duration:.9, ease:"easeOut" }}
          className="h-right"
        >
          <motion.div
            animate={{ y:[0,-7,0] }}
            transition={{ duration:4.5, repeat:Infinity, ease:"easeInOut" }}
          >
            <Terminal />
          </motion.div>
        </motion.div>
      </div>

      <Ticker />

      <style>{`
        .h-root {
          position:relative; min-height:100vh; width:100%;
          display:flex; flex-direction:column;
          align-items:center; justify-content:center;
          color:#fff; overflow:hidden;
        }
        .h-cursor-glow {
          position:fixed; width:560px; height:560px; border-radius:50%;
          pointer-events:none; z-index:1; transform:translate(-50%,-50%);
          background:radial-gradient(circle,rgba(139,92,246,.06) 0%,transparent 68%);
          transition:left .08s ease,top .08s ease;
        }
        .h-blob { position:absolute; border-radius:50%; pointer-events:none; z-index:0; }
        .h-blob-v { width:360px; height:360px; background:rgba(109,40,217,.17); filter:blur(110px); top:8%; left:4%; }
        .h-blob-p { width:400px; height:400px; background:rgba(219,39,119,.13); filter:blur(130px); bottom:8%; right:4%; }
        .h-grid {
          position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(139,92,246,.033) 1px,transparent 1px),
            linear-gradient(90deg,rgba(139,92,246,.033) 1px,transparent 1px);
          background-size:56px 56px; z-index:0;
          mask-image:radial-gradient(ellipse at center,black 20%,transparent 72%);
        }
        .h-inner {
          position:relative; z-index:20;
          display:flex; align-items:center; justify-content:center;
          gap:64px; width:100%; max-width:1160px; padding:0 48px;
        }
        .h-left {
          flex:1; min-width:0;
          display:flex; flex-direction:column; align-items:flex-start;
        }
        .h-pill {
          display:inline-flex; align-items:center; gap:7px;
          background:transparent;
          border-left:2px solid #22c55e;
          color:rgba(209,213,219,.75); font-size:11.5px; letter-spacing:.04em;
          padding:3px 0 3px 11px; border-radius:0;
          margin-bottom:24px; font-family:'JetBrains Mono',monospace;
        }
        .h-dot {
          width:6px; height:6px; border-radius:50%; flex-shrink:0;
          background:#22c55e; box-shadow:0 0 6px #22c55e;
          animation:dotP 2s ease-in-out infinite;
        }
        .h-pill-sep { color:rgba(255,255,255,.2); font-size:13px; }
        .h-pill-dim { color:rgba(148,163,184,.45); font-size:10.5px; letter-spacing:.06em; }
        @keyframes dotP { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.75)} }

        /* ── ORIGINAL FONTS from user's code ── */
        .h-name {
          font-size:clamp(2.4rem,5vw,4rem);
          font-weight:700; line-height:1.15;
          letter-spacing:-.01em; margin-bottom:14px; color:#fff;
        }
        .h-name-grad {
          background:linear-gradient(to right,#c084fc,#f472b6);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .h-role { font-size:1.1rem; color:#d8b4fe; font-weight:500; min-height:30px; margin-bottom:16px; }
        .h-bio {
          font-size:.92rem; color:#d1d5db;
          max-width:420px; line-height:1.75; margin-bottom:30px;
        }
        .h-ctas { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:30px; }
        .h-btn-fill, .h-btn-ghost {
          display:inline-flex; align-items:center; gap:7px;
          padding:12px 24px; border-radius:12px;
          font-size:.9rem; font-weight:500;
          text-decoration:none; transition:all .2s; cursor:pointer;
        }
        .h-btn-fill  { background:#9333ea; color:#fff; border:1px solid #9333ea; }
        .h-btn-fill:hover  { background:#7e22ce; box-shadow:0 0 22px rgba(147,51,234,.4); }
        .h-btn-ghost { background:transparent; color:#d8b4fe; border:1px solid rgba(168,85,247,.35); }
        .h-btn-ghost:hover { border-color:rgba(168,85,247,.65); background:rgba(168,85,247,.08); }
        .h-socials { display:flex; gap:10px; }
        .h-social-btn {
          display:flex; align-items:center; justify-content:center;
          width:40px; height:40px; border-radius:10px;
          border:1px solid rgba(168,85,247,.2);
          background:rgba(168,85,247,.07);
          color:rgba(209,213,219,.7);
          transition:color .2s,border-color .2s,background .2s;
        }
        .h-social-btn:hover { color:#c084fc; border-color:rgba(168,85,247,.55); background:rgba(168,85,247,.15); }
        .h-right {
          flex:1; display:flex; align-items:center; justify-content:center; min-width:0;
        }
        @media (max-width:900px) {
          .h-inner { flex-direction:column; gap:40px; padding:80px 22px 100px; text-align:center; }
          .h-left  { align-items:center; }
          .h-bio   { text-align:center; }
          .h-right { width:100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;