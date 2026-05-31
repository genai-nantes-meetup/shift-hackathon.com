import { motion } from 'motion/react';
const TICKET_URL = 'https://www.billetweb.fr/shift-hackathon-2026';
const CDN = 'https://framerusercontent.com/images';

export default function SpeakersHero() {
  return (
    <section style={{ position: 'relative', padding: '6rem 2rem 4rem', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={`${CDN}/BEuIuTovs901AlleEtQLUxkuxI.png`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0e0218 0%, transparent 30%, #0e0218 100%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Les <span style={{ color: '#f75787' }}>Intervenants</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Barlow, sans-serif', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: 600, margin: '0 auto 2rem' }}>
          Attache ta ceinture et jette un œil au line-up de ce hackathon d'anthologie !
        </motion.p>
        <motion.a href={TICKET_URL} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          style={{ display: 'inline-block', background: '#f75787', color: '#000', padding: '0.9rem 2.5rem', fontFamily: 'Barlow, sans-serif', fontWeight: 900, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '2px' }}>
          Take my money 🤘
        </motion.a>
      </div>
    </section>
  );
}
