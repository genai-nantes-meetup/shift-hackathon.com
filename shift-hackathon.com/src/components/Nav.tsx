import { motion, useReducedMotion } from 'motion/react';
import { EDITION, JE_SUIS_CHAUD_URL } from '../data/edition';
import { CTA_LABELS } from '../data/site';

const NAV_LINKS = [
  { label: 'Concept', href: '/concept' },
  { label: 'Intervenants', href: '/intervenants' },
  { label: 'Agenda', href: '/agenda' },
];
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";

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
  return (
    <motion.nav
      initial={reduce ? false : { y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={reduce ? { duration: 0 } : { duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        height: '68px',
        background: 'rgba(0,0,0,0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/assets/images/hero/logo-shift.png"
          alt="SHIFT"
          style={{ height: 24, width: 'auto' }}
        />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
        {NAV_LINKS.map((l) => (
          <NavLink key={l.href} label={l.label} href={l.href} />
        ))}
        <a
          href={JE_SUIS_CHAUD_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
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
          }}
        >
          {CTA_LABELS.primary}
        </a>
      </div>
    </motion.nav>
  );
}
