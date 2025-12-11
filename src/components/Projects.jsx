import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  const [visible, setVisible] = useState(3);
  const [scrollTo, setScrollTo] = useState(null); // index to scroll after update

  const projectRefs = useRef([]);

  // Ultra smooth scroll
  const smoothScrollTo = (targetY, duration = 350) => {
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    let start;

    const ease = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);

      window.scrollTo(0, startY + diff * ease(percent));

      if (time < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  // Run IMMEDIATELY after the DOM updates (NO delay)
  useLayoutEffect(() => {
    if (scrollTo !== null && projectRefs.current[scrollTo]) {
      const el = projectRefs.current[scrollTo];
      const yOffset = -90;

      const targetY =
        el.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      smoothScrollTo(targetY, 350);
      setScrollTo(null); // reset
    }
  }, [visible, scrollTo]);

  // LOAD MORE
  const loadMore = () => {
    const old = visible;
    const next = Math.min(visible + 3, projects.length);

    setVisible(next);
    setScrollTo(old); // scroll to first new project
  };

  // SHOW LESS
  const showLess = () => {
    setVisible(3);
    setScrollTo(0); // scroll to top project
  };

  return (
    <section id="projects" className="py-20 px-6 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-purple-400 mb-16"
        >
          Featured Projects
        </motion.h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.slice(0, visible).map((p, i) => (
            <motion.div
              key={i}
              ref={(el) => (projectRefs.current[i] = el)}
              whileHover={{ scale: 1.04 }}
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


        {/* Buttons */}
        <div className="flex justify-center mt-12 gap-4">
          {visible < projects.length && (
            <button
              onClick={loadMore}
              className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r 
                         from-purple-600 to-purple-800 hover:from-purple-700 
                         hover:to-purple-900 shadow-lg shadow-purple-900/30 
                         hover:shadow-purple-500/40 transition-all duration-300"
            >
              Show More
            </button>
          )}

          {visible > 3 && (
            <button
              onClick={showLess}
              className="px-6 py-3 rounded-xl font-medium bg-black/30 
                         border border-purple-500/30 hover:bg-purple-900/30 
                         hover:border-purple-500/60 shadow-lg shadow-purple-900/20
                         hover:shadow-purple-500/40 transition-all duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
 