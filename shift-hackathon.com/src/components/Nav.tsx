import { motion } from 'motion/react';

const NAV_LINKS = [
  { label: 'Concept', href: '/concept-2026' },
  { label: 'Intervenants', href: '/intervenants-2026' },
  { label: 'Agenda', href: '/agenda-2026' },
];
const TICKET_URL = 'https://www.billetweb.fr/shift-hackathon-2026';

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem', height: '60px',
        background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://framerusercontent.com/images/pSUT90jYhOZMo6IvXy5LtJs0.png"
          alt="SHIFT" height={28}
          style={{ height: 28, width: 'auto' }}
        />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} style={{
            color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
            fontFamily: 'Barlow, sans-serif', fontSize: '0.875rem',
            fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#2aebf5')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
          >
            {l.label}
          </a>
        ))}
        <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" style={{
          background: '#f75787', color: '#000', padding: '0.45rem 1.2rem',
          fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: '0.875rem',
          letterSpacing: '0.03em', textDecoration: 'none', textTransform: 'uppercase',
          borderRadius: '2px', whiteSpace: 'nowrap',
        }}>
          Je suis chaud
        </a>
      </div>
    </motion.nav>
  );
}
