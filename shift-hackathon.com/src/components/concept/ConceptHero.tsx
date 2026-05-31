import { motion } from 'motion/react';

const TICKET_URL = 'https://www.billetweb.fr/shift-hackathon-2026';
const CDN = 'https://framerusercontent.com/images';

export default function ConceptHero() {
  return (
    <section style={{ position: 'relative', padding: '6rem 2rem 4rem', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src={`${CDN}/dhjQcdCP4VBrUzqK0gjelJruk.png`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0e0218 0%, transparent 30%, #0e0218 100%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ fontFamily: "'Agrandir', 'Barlow', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1 }}>
          Shift, <span style={{ color: '#f75787' }}>c'est quoi ?</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Barlow, sans-serif', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 700, margin: '0 auto 2.5rem' }}>
          Shift — Time To Custom, c'est <strong style={{ color: '#fff' }}>48 heures</strong> pour <strong style={{ color: '#f75787' }}>hacker ton outil préféré</strong>,
          créer une vraie feature Gen AI utile pour ton usage, et produire aux côtés des meilleurs experts tech.
        </motion.p>
        <motion.a href={TICKET_URL} target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'inline-block', background: '#f75787', color: '#000', padding: '1rem 2.5rem', fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: '1rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '2px' }}>
          Take my money 🤘
        </motion.a>
      </div>
    </section>
  );
}
