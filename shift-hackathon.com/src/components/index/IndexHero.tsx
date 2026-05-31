import { motion } from 'motion/react';
import { PARTNERS } from '../../data/site';

const TICKET_URL = 'https://tally.so/r/D45GKl';
const CDN = 'https://framerusercontent.com/images';

const SPONSOR_LOGOS = PARTNERS.slice(0, 8);

export default function IndexHero() {
  return (
    <>
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#000' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src={`${CDN}/wa9oVNjleDQIbBtztqNGal6M.png`}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }}
          />
          {/* Green radial glow matching live site */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 70% at 20% 60%, rgba(0,80,0,0.55) 0%, rgba(0,40,0,0.3) 40%, transparent 70%)',
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.7) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top, #000, transparent)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '5rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', width: '100%' }}>
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'inline-block', background: 'rgba(0,180,0,0.15)', border: '1px solid rgba(0,200,0,0.3)', borderRadius: '2px', padding: '0.2rem 0.8rem', marginBottom: '1.5rem' }}
            >
              <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.75rem', color: '#9ff839', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Édition 2026 — Time to Custom
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "'Agrandir', 'Barlow', sans-serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.05,
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
              }}
            >
              Shift<br />
              <span style={{ color: '#9ff839' }}>Le Hackathon Gen AI n°1</span><br />
              pour les Designers,<br />Devs & Product lovers
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ marginBottom: '2rem' }}
            >
              {[
                'Crée des produits Gen AI game-changer en 48 heures.',
                'Édition "Time to Custom" → Hack ton outil préféré.',
                '🔥 Event all-inclusive - coaching, food & fun.',
              ].map((line) => (
                <p key={line} style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem', marginBottom: '0.3rem', lineHeight: 1.5 }}>
                  {line}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}
            >
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block', background: '#9ff839', color: '#000',
                padding: '0.85rem 2.2rem', fontFamily: 'Barlow, sans-serif',
                fontWeight: 900, fontSize: '0.95rem', textDecoration: 'none',
                textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '2px',
              }}>
                Je suis chaud pour 2027 !
              </a>
              <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                Réserve ta place !!
              </span>
            </motion.div>
          </div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src={`${CDN}/Rdl8zkLOcqcng7VGIk3w5sXc38.png`}
              alt="Shift Hackathon"
              style={{ width: '100%', borderRadius: '6px', boxShadow: '0 0 80px rgba(0,200,0,0.15), 0 20px 60px rgba(0,0,0,0.6)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Sponsor strip */}
      <div style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '1.25rem' }}>
            Les complices de Shift depuis 2024
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            {SPONSOR_LOGOS.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                style={{ opacity: 0.5, transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.5')}
              >
                <img src={p.logo} alt={p.name} style={{ height: 28, width: 'auto', maxWidth: 120, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
