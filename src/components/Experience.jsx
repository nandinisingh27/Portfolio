import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function Experience() {
  return (
    <div>
      <SectionHeading
        kicker="Career Track"
        title="Work Experience"

      />

      <div className="gutter mt-8">
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Spine Line */}
          <div
            aria-hidden
            className="absolute bottom-6 left-4 top-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-crimson via-crimson/50 to-transparent sm:left-6"
          />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.company + item.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
                className="relative pl-10 sm:pl-16"
              >
                {/* Timeline Node */}
                <div className="absolute left-4 top-1.5 -translate-x-1/2 sm:left-6">
                  {item.current ? (
                    <div className="relative flex h-6 w-6 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-60" />
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-crimson shadow-[0_0_14px_rgba(229,19,43,0.9)]" />
                    </div>
                  ) : (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white/30 bg-ink-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-bone" />
                    </div>
                  )}
                </div>

                {/* Card */}
                <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-ink-2/95 to-ink/95 p-6 backdrop-blur-xl transition duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,61,90,0.25)] sm:p-8">
                  {/* Top Row: Period & Status */}
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-full bg-crimson/15 px-3 py-1 text-xs font-bold tracking-wider text-crimson-2 ring-1 ring-crimson/30">
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 ring-1 ring-emerald-500/20">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>
                    {item.place && <span className="text-xs text-smoke">{item.place}</span>}
                  </div>

                  {/* Role & Company */}
                  <div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-baseline">
                    <div>
                      <h3 className="font-display text-3xl tracking-wide text-bone transition group-hover:text-white sm:text-4xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-base font-semibold text-bone/90">{item.company}</p>
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="link"
                        className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-bone transition hover:border-crimson-2 hover:bg-crimson/20 hover:text-white"
                      >
                        Explore Company ↗
                      </a>
                    )}
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-6 space-y-3">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs leading-relaxed text-mist sm:text-[14px]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-2 shadow-[0_0_8px_rgba(255,61,90,0.8)]" />
                        <span className="text-bone/85">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  {item.stack && item.stack.length > 0 && (
                    <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
                      <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">
                        Stack:
                      </span>
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-mist transition hover:border-white/20 hover:text-bone"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
