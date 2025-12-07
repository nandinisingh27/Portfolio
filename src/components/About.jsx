import React from "react";
import { motion } from "framer-motion";
import { Code, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#050505] text-white py-20 px-5 flex justify-center items-center overflow-hidden"
    >
      {/* ------------------------------------
        ANIMATED BACKGROUND ELEMENTS (Copied from Hero.jsx)
        ------------------------------------
      */}

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20 animate-gradient" />

      {/* Slow drifting blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-purple-700/20 blur-[130px] rounded-full top-10 left-20"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] bg-pink-600/20 blur-[150px] rounded-full bottom-20 right-10"
      />

      {/* Animated shining circle behind heading */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-purple-400/10 blur-[200px] rounded-full"
      />

      {/* Falling diagonal particles */}
      {[...Array(16)].map((_, i) => (
        <motion.span
          key={`about-particle-${i}`} // Use unique key for the About section
          className="absolute w-1 h-1 bg-purple-300/70 rounded-full"
          initial={{
            x: Math.random() * 1920, // Using max screen width assumption for initial random position
            y: Math.random() * 1080, // Using max screen height assumption
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
            ease: "linear",
          }}
        />
      ))}
      
      {/* Rotating Ring */}
      {/* <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 border border-purple-500/20 rounded-full"
      > */}
        {/* Orbiting Dot */}
        {/* <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 bg-purple-400 rounded-full absolute -top-2 left-1/2"
        />
      </motion.div> */}
      
      {/* ------------------------------------
        END ANIMATED BACKGROUND ELEMENTS
        ------------------------------------
      */}
      
      {/* Content */}
      <div className="relative z-20 max-w-5xl w-full"> {/* Added z-20 to ensure content is above particles */}
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          <span className="text-purple-400">About</span> Me
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">

         {/* LEFT CARD - PHOTO (Baseline) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative group h-full"
          >
            <div className="bg-[#0a0a0a] border border-purple-600/40 rounded-3xl p-8 shadow-xl backdrop-blur-lg h-full flex flex-col items-center text-center transition transform group-hover:scale-105 duration-500">

              <img
                src="/images/nandini.jpeg"
                alt="Nandini"
                className="w-28 h-28 object-cover rounded-full border-2 border-purple-500 shadow-lg mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3">Who Am I </h3>

              <p className="text-gray-300 leading-relaxed">
                I'm Nandini Singh, an enthusiastic <span className="text-purple-400">Backend Developer </span>specializing in{" "}
                <span className="text-purple-400">Django & Python</span>, currently pursuing B.Tech in CS. My passion is building responsive, scalable, and clean web applications using modern backend logic.
                While my core expertise is in the backend, I possess fundamental frontend knowledge, ensuring the applications I deliver featuring <span className="text-purple-400">user-friendly UI</span>.
              </p>
            </div>

            <div className="absolute inset-0 blur-3xl bg-purple-600/20 -z-10 opacity-0 group-hover:opacity-100 transition duration-700"></div>
          </motion.div>

          {/* RIGHT CARD (Corrected Heading Position) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative group h-full"
          >
            <div className="bg-[#0a0a0a] border border-purple-600/40 rounded-3xl p-8 shadow-xl backdrop-blur-lg h-full flex flex-col items-center text-center transition transform group-hover:scale-105 duration-500">

              <Code className="text-purple-400 w-14 h-14 mt-8" />

              <div className="h-24 mb-6 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold mb-3">What I Do</h3> 
              </div>
              
              <p className="text-gray-300 leading-relaxed"> 
                I build and maintain full-stack web applications. My technology stack centers on the backend, utilizing <span className="text-purple-400">Django, DRF, MySQL and PostgreSQL.</span> I complete the stack with<span className="text-purple-400"> React</span>, and I am dedicated to continuously improving <span className="text-purple-400">application performance, optimizing workflows, and enhancing the UI experience </span>to solve practical problems effectively.
              </p>
            </div>

            <div className="absolute inset-0 blur-3xl bg-purple-600/20 -z-10 opacity-0 group-hover:opacity-100 transition duration-700"></div>
          </motion.div>

        </div>

        {/* BADGES */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="flex flex-wrap justify-center gap-8 mt-16"
>
{/* REAL CODING PROFILE ICONS */}
{/* REAL CODING PROFILE ICONS */}
<div className="flex justify-center gap-6 mt-12">

  {/* LeetCode (Official) */}
  <a
    href="https://leetcode.com/u/nandinisingh27/"
    target="_blank"
    className="p-3 rounded-xl bg-[#0a0a0a] border border-purple-600/30 hover:border-purple-500 hover:scale-110 transition-all duration-300"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
      alt="LeetCode"
      className="w-10 h-10 object-contain"
    />
  </a>

<a
href="https://www.codechef.com/users/nandinisingh27"
target="_blank"
rel="noopener noreferrer"
className="p-3 rounded-xl bg-[#0a0a0a] border border-purple-600/30 hover:border-purple-500 hover:scale-110 transition-all duration-300"
>
<img
  src="https://cdn.brandfetch.io/idM2-b7Taf/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1759119333623"
  alt="CodeChef"
  className="w-16 h-12 object-contain"
/>
</a>
  {/* GeeksForGeeks (Official) */}
  <a
    href="https://www.geeksforgeeks.org/profile/nandinisibdvr"
    target="_blank"
    className="p-3 rounded-xl bg-[#0a0a0a] border border-purple-600/30 hover:border-purple-500 hover:scale-110 transition-all duration-300"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
      alt="GFG"
      className="w-10 h-10 object-contain"
    />
  </a>

  {/* GitHub (Official)
  <a
    href="https://github.com/your_id"
    target="_blank"
    className="p-3 rounded-xl bg-[#0a0a0a] border border-purple-600/30 hover:border-purple-500 hover:scale-110 transition-all duration-300"
  >
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
      alt="GitHub"
      className="w-10 h-10 invert"
    />
  </a> */}
</div>



</motion.div>
      </div>
    </section>
  );
};

export default About;