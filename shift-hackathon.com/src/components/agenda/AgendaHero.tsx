import { motion } from 'motion/react';
const TICKET_URL = 'https://www.billetweb.fr/shift-hackathon-2026';
const CDN = 'https://framerusercontent.com/images';

export default function AgendaHero() {
  return (
    <section style={{ position: 'relative', padding: '6rem 2rem 4rem', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={`${CDN}/wDi0gtJVMnvVglqFOk8UiRQUdM.png`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0e0218 0%, transparent 30%, #0e0218 100%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', marginBottom: '1rem' }}>
          L'Agenda <span style={{ color: '#9ff839' }}>Shift</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Barlow, sans-serif', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Check l'agenda de ce hackathon qui s'annonce épique !
        </motion.p>
        <motion.a href={TICKET_URL} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          style={{ display: 'inline-block', background: '#9ff839', color: '#000', padding: '0.9rem 2.5rem', fontFamily: 'Barlow, sans-serif', fontWeight: 900, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '2px' }}>
          Take my money 🤘
        </motion.a>
      </div>
    </section>
  );
}
