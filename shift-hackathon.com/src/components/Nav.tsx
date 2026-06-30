import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { EDITION, JE_SUIS_CHAUD_URL } from '../data/edition';
import { CTA_LABELS } from '../data/site';

const NAV_LINKS = [
  { label: 'Concept', href: '/concept' },
  { label: 'Intervenants', href: '/intervenants' },
  { label: 'Agenda', href: '/agenda' },
];
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";

const ctaStyle = {
  background: EDITION.dominantColor,
  color: 'rgb(25,5,50)',
  padding: '0.5rem 1.1rem',
  fontFamily: AGRANDIR,
  fontWeight: 400,
  fontSize: '14px',
  letterSpacing: '1.4px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
  boxShadow: `${EDITION.dominantColorShadow} 0px 5px 0px 0px`,
} as const;

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{
        rest: { color: '#fff' },
        hover: { color: '#f75787' },
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{
        position: 'relative',
        color: '#fff',
        textDecoration: 'none',
        fontFamily: AGRANDIR,
        fontSize: '14px',
        fontWeight: 400,
        letterSpacing: '1.4px',
        textTransform: 'uppercase',
      }}
    >
      {label}
      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '-4px',
          height: '2px',
          background: '#f75787',
          transformOrigin: 'center',
        }}
      />
    </motion.a>
  );
}

export default function Nav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  // Close on Escape + lock body scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <motion.nav
        className="site-nav"
        initial={reduce ? false : { y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 0.4, ease: 'easeOut' }}
      >
        <a href="/" className="site-nav__logo">
          <img
            src="/assets/images/hero/logo-shift.png"
            alt="SHIFT"
            style={{ height: 24, width: 'auto' }}
          />
        </a>

        <div className="site-nav__links">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} label={l.label} href={l.href} />
          ))}
          <a href={JE_SUIS_CHAUD_URL} target="_blank" rel="noopener noreferrer" style={ctaStyle}>
            {CTA_LABELS.primary}
          </a>
        </div>

        <button
          type="button"
          className="site-nav__burger"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="site-nav-drawer"
          onClick={() => setOpen(true)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="site-nav__overlay"
              onClick={() => setOpen(false)}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.2 }}
            />
            <motion.aside
              id="site-nav-drawer"
              className="site-nav__drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
              initial={reduce ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={reduce ? { x: '100%' } : { x: '100%' }}
              transition={
                reduce ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 30 }
              }
            >
              <button
                type="button"
                className="site-nav__close"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
                autoFocus
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>

              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="site-nav__drawer-link"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={JE_SUIS_CHAUD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-nav__drawer-cta"
                style={{ ...ctaStyle, whiteSpace: 'normal', textAlign: 'center' }}
                onClick={() => setOpen(false)}
              >
                {CTA_LABELS.primary}
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
