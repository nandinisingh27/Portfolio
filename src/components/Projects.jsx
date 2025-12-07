import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data";     // IMPORTANT

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto">

        <motion.h2
initial={{ opacity: 0, y: -10 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-4xl font-bold text-center text-purple-400 mb-16"
>
<h2 className="text-4xl font-bold mb-10 text-center">Featured Projects</h2>
</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              // className="bg-black/30 backdrop-blur-lg border border-purple-700/30 
              //            rounded-2xl shadow-lg overflow-hidden"
              className={`bg-black/30 backdrop-blur-lg border border-purple-700/30 
            rounded-2xl shadow-lg overflow-hidden
            ${i === projects.length - 1 ? "lg:col-start-2" : ""}`}

            >
              <div className="h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-300">{p.title}</h3>

                <p className="text-gray-300 text-sm mt-2">{p.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-purple-900/30 
                                 border border-purple-700/40 text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between mt-5">
                  {p.live ? (
                    <a
                      href={p.live}
                      className="text-purple-400 hover:underline text-sm"
                      target="_blank"
                    >
                      Live
                    </a>
                  ) : <span></span>}

                  {p.github && (
                    <a
                      href={p.github}
                      className="text-purple-400 hover:underline text-sm"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
