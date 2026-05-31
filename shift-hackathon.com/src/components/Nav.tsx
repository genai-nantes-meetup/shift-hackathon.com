import { motion } from 'motion/react';

const NAV_LINKS = [
  { label: 'Concept', href: '/concept-2026' },
  { label: 'Intervenants', href: '/intervenants-2026' },
  { label: 'Agenda', href: '/agenda-2026' },
];
const TICKET_URL = 'https://www.billetweb.fr/shift-hackathon-2026';
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 1.5rem', height: '68px',
        background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://framerusercontent.com/images/pSUT90jYhOZMo6IvXy5LtJs0.png"
          alt="SHIFT"
          style={{ height: 24, width: 'auto' }}
        />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: '#fff', textDecoration: 'none',
              fontFamily: AGRANDIR, fontSize: '0.75rem',
              fontWeight: 400, letterSpacing: '1.2px', textTransform: 'uppercase',
              transition: 'opacity 0.2s', opacity: 0.85,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
          >
            {l.label}
          </a>
        ))}
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#9ff839', color: 'rgb(25,5,50)',
            padding: '0.5rem 1.1rem',
            fontFamily: AGRANDIR, fontWeight: 400, fontSize: '0.75rem',
            letterSpacing: '1.2px', textDecoration: 'none', textTransform: 'uppercase',
            borderRadius: '3px', whiteSpace: 'nowrap',
          }}
        >
          Je suis chaud
        </a>
      </div>
    </motion.nav>
  );
}
