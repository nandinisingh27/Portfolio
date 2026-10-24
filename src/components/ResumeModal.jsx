import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/** Full-screen resume viewer modal */
export default function ResumeModal({ onClose }) {
  useScrollLock(true);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story · Screenplay Resume</p>
        <div className="flex items-center gap-2">
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noreferrer"
            download="Nandini_Singh_Resume.pdf"
            className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink transition hover:bg-white"
          >
            ⤓ Open / Download PDF
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>
      <motion.div
        className="gutter flex-1 overflow-y-auto pb-10"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="mx-auto max-w-5xl">
          <ResumeSheet />
          <div className="mt-6 flex justify-center">
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex min-h-12 items-center justify-center rounded-xl px-8 text-sm font-semibold text-bone hover:bg-white/15"
            >
              Open Original PDF Document in New Tab ↗
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
