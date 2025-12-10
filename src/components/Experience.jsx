import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative py-20 px-6 bg-[#050505] text-white overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20 animate-gradient" />

      {/* Glowing blobs */}
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

      {/* Soft glowing ring */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-purple-400/10 blur-[200px] rounded-full mx-auto left-0 right-0"
      />

      {/* Falling particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={`exp-particle-${i}`}
          className="absolute w-1 h-1 bg-purple-300/70 rounded-full"
          initial={{ x: Math.random() * 1920, y: Math.random() * 1080, opacity: 0 }}
          animate={{ x: "+=180", y: "+=330", opacity: [0, 1, 0] }}
          transition={{ duration: 5 + Math.random() * 4, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-20">
        <motion.h2
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-4xl font-bold mb-12 text-purple-400 text-center"
>
  Experience
</motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 ml-4 space-y-12">

          {/* TIMELINE ITEM */}
          <div className="ml-8">
            <div className="w-4 h-4 bg-purple-500 rounded-full absolute -left-2"></div>

          <a 
  href="https://tech.kiet.edu/team-erp/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="relative group"
>
 <span className="text-2xl font-bold group-hover:text-purple-300 transition">
  Developer — Team ERP, KIET
</span>

  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
</a>


            <p className="text-sm text-gray-400 mb-4">June 2024 – Present</p>

            <ul className="text-gray-300 space-y-2">
              <li>• Maintained and enhanced core ERP modules by fixing issues, optimizing workflows, and building supporting utilities using Django and Django REST Framework.</li>
              <li>• Integrated secure REST APIs with dashboards for real‑time workflow automation.</li>
              <li>• Improved system speed through optimized SQL queries and caching strategies.</li>
              <li>• Built  <span className="text-purple-400">NotifyKIET</span>, a bulk email automation system for institute-wide communication.</li>
              <li>• Collaborated with teams on modules like Academics, Registrar, Hostel, HR, Payroll, Accounts, and Marks Monitoring.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
