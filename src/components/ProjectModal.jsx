import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE, Magnetic } from './fx';
import { ProjectArt } from './Poster';

const block = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

export default function ProjectModal({ project, onClose, onSwitch }) {
  useScrollLock(true);
  const scroller = useRef(null);
  const closeBtn = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const prevFocus = document.activeElement;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose, lightboxOpen]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [project.id]);

  const more = projects.filter((p) => p.id !== project.id);

  return (
    <motion.div className="fixed inset-0 z-[140]" role="dialog" aria-modal="true" aria-labelledby={`title-${project.id}-modal`}>
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div ref={scroller} data-lenis-prevent className="absolute inset-0 overflow-y-auto overscroll-contain" onClick={onClose}>
        <motion.div
          className="relative mx-auto min-h-full max-w-5xl bg-ink-2 shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          {/* billboard */}
          <div className="relative h-[52vh] min-h-[340px] overflow-hidden sm:rounded-t-2xl">
            <motion.div layoutId={`art-${project.id}`} className="absolute inset-0" transition={{ duration: 0.7, ease: EASE }}>
              <ProjectArt project={project} showImage={false} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent" />
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close project"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-lg text-bone backdrop-blur transition hover:bg-black"
            >
              ✕
            </button>
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10">
              <motion.p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.34em] text-bone/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <span className="font-display text-xl tracking-normal text-crimson-2">N</span> Projects
              </motion.p>
              <motion.h2
                id={`title-${project.id}-modal`}
                layoutId={`title-${project.id}`}
                className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.86] tracking-wide text-bone"
                transition={{ duration: 0.7, ease: EASE }}
              >
                {project.title}
              </motion.h2>
            </div>
          </div>

          <motion.div className="px-5 pb-12 sm:px-10" initial="hidden" animate="show" transition={{ staggerChildren: 0.08, delayChildren: 0.25 }}>
            <motion.div variants={block} className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist">
              <span className="font-semibold text-[#46e3a8]">{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-smoke" />
              <span>{project.genre}</span>
            </motion.div>

            <motion.p variants={block} className="mt-4 max-w-3xl text-lg leading-relaxed text-bone sm:text-xl">
              {project.logline}
            </motion.p>

            <motion.div variants={block} className="mt-6 flex flex-wrap gap-3">
              {project.live && (
                <Magnetic>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="flex min-h-12 items-center gap-2 rounded-md bg-crimson px-6 text-[15px] font-bold text-white shadow-[0_0_40px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2"
                  >
                    ▶ Live Website ↗
                  </a>
                </Magnetic>
              )}
              {project.github && (
                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="flex min-h-12 items-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
                  >
                    GitHub Repository ↗
                  </a>
                </Magnetic>
              )}
            </motion.div>

            {/* Interface & Production Preview */}
            {project.img && (
              <motion.section variants={block} className="mt-8">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson" />
                    </span>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                      Interface & Production Preview
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden text-xs text-mist sm:inline-block">Click preview to enlarge</span>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="link"
                        className="flex items-center gap-1 text-xs font-semibold text-bone/90 transition hover:text-crimson-2"
                      >
                        Visit Live Platform ↗
                      </a>
                    )}
                  </div>
                </div>

                <div
                  role="button"
                  tabIndex={0}
                  data-cursor="view"
                  onClick={() => setLightboxOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxOpen(true);
                    }
                  }}
                  aria-label={`Enlarge preview screenshot of ${project.title}`}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] ring-1 ring-white/5 transition duration-500 hover:border-white/35 focus:outline-none focus:ring-2 focus:ring-crimson"
                >
                  {/* Browser Chrome Header */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f56]/90 shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/90 shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-[#27c93f]/90 shadow-sm" />
                      <div className="ml-3 hidden sm:flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1 text-[11px] font-mono text-mist border border-white/10">
                        <span className="text-emerald-400 text-xs">🔒</span>
                        <span className="truncate max-w-[280px] text-bone/80">
                          {project.live
                            ? project.live.replace(/^https?:\/\//, '').replace(/\/$/, '')
                            : (project.github ? project.github.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${project.id}.internal/preview`)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-mist">
                        HD PREVIEW
                      </span>
                      <span className="hidden sm:inline-flex rounded border border-white/20 bg-black/40 px-2 py-0.5 text-[10px] font-semibold text-bone">
                        🔍 Enlarge
                      </span>
                    </div>
                  </div>

                  {/* Screenshot display */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 sm:max-h-[500px]">
                    <img
                      src={project.img}
                      alt={`${project.title} Interface Preview`}
                      className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.015]"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-5">
                      <span className="flex items-center gap-2 rounded-lg bg-black/85 px-4 py-2 text-xs font-bold text-bone backdrop-blur border border-white/15 shadow-xl">
                        🔍 Click to view full screenshot
                      </span>
                      {project.live && (
                        <span className="hidden sm:flex items-center gap-1.5 rounded-lg bg-crimson px-4 py-2 text-xs font-bold text-white shadow-xl">
                          Live App Available ↗
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {/* impact */}
            {project.metrics && project.metrics.length > 0 && (
              <motion.section variants={block} className="mt-12">
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Result / Architecture Highlights</h3>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-4">
                  {project.metrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      className="bg-ink p-4 sm:p-5"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.07, duration: 0.5, ease: EASE }}
                    >
                      <p className="font-display text-4xl leading-none text-bone sm:text-5xl" style={{ color: i === 0 ? project.palette.accent : undefined }}>
                        {m.value}
                      </p>
                      <p className="mt-2 text-xs leading-snug text-mist">{m.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
              <motion.section variants={block}>
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Key Engineering Implementation</h3>
                <ul className="space-y-4">
                  {project.build.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-bone/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.palette.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.section>

              <div className="space-y-10">
                <motion.section variants={block}>
                  <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span key={t} className="glass rounded-full px-3 py-1.5 text-sm font-medium text-bone">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.section>

                <motion.section variants={block}>
                  <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Key Features</h3>
                  <ul className="space-y-2.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-bone/85">
                        <span className="text-crimson-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.section>
              </div>
            </div>

            {/* more like this */}
            <motion.section variants={block} className="mt-14 border-t border-white/10 pt-8">
              <h3 className="mb-4 font-sans text-lg font-semibold text-bone">More Productions</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {more.slice(0, 4).map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    data-cursor="view"
                    onClick={() => onSwitch(p)}
                    className="group relative aspect-video overflow-hidden rounded-xl text-left ring-1 ring-white/10 transition hover:ring-white/30"
                  >
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <ProjectArt project={p} showImage={false} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-mist">{p.genre}</p>
                      <p className="font-display text-3xl leading-none tracking-wide text-bone">{p.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox Modal for Full-Resolution Preview */}
      <AnimatePresence>
        {lightboxOpen && project.img && (
          <motion.div
            className="fixed inset-0 z-[160] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              className="relative max-h-[92vh] max-w-6xl w-full overflow-hidden rounded-2xl border border-white/20 bg-ink-2 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-black/80 px-5 py-3.5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xl tracking-wide text-bone">{project.title}</span>
                  <span className="rounded bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-mist">
                    Production Screenshot
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:inline-flex rounded-md bg-crimson px-3.5 py-1.5 text-xs font-bold text-white hover:bg-crimson-2 transition"
                    >
                      Visit Live Platform ↗
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(false)}
                    aria-label="Close preview"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-bone hover:bg-white/20 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="max-h-[82vh] overflow-auto overscroll-contain bg-black/90 p-3">
                <img
                  src={project.img}
                  alt={`${project.title} Full Screenshot`}
                  className="mx-auto h-auto max-w-full rounded-lg object-contain shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
