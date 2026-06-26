import { motion } from 'motion/react';
import { EDITION } from '../data/edition';

const NAV_LINKS = [
  { label: 'Concept', href: '/concept' },
  { label: 'Intervenants', href: '/intervenants' },
  { label: 'Agenda', href: '/agenda' },
];
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
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
          <a
            key={l.href}
            href={l.href}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontFamily: AGRANDIR,
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '1.4px',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s',
              opacity: 0.85,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
          >
            {l.label}
          </a>
        ))}
        <a
          href={EDITION.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#9ff839',
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
            boxShadow: 'rgba(159,248,57,0.5) 0px 5px 0px 0px',
          }}
        >
          Je suis chaud
        </a>
      </div>
    </motion.nav>
  );
}
