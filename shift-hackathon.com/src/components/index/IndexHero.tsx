import { motion } from 'motion/react';
import { PARTNERS } from '../../data/site';

const TICKET_URL = 'https://tally.so/r/D45GKl';
const CDN = 'https://framerusercontent.com/images';

// Same order as displayed on live site sponsor strip
const HERO_LOGOS = [
  PARTNERS.find((p) => p.name === 'Ici Lundi')!,
  PARTNERS.find((p) => p.name === 'Reecall')!,
  PARTNERS.find((p) => p.name === 'Clever Cloud')!,
  PARTNERS.find((p) => p.name === 'Externatic')!,
  PARTNERS.find((p) => p.name === 'Agoriade AI')!,
  PARTNERS.find((p) => p.name === 'OpenAI')!,
  PARTNERS.find((p) => p.name === 'n8n')!,
  PARTNERS.find((p) => p.name === 'ElevenLabs')!,
].filter(Boolean);

export default function IndexHero() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        {/* Subtle dot-grid texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.6) 80%, transparent 100%)',
          }}
        />

        {/* Background hero image (faint) */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src={`${CDN}/wa9oVNjleDQIbBtztqNGal6M.png`}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }}
          />
          {/* Green glow — bottom-left like live site */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 50% 60% at 10% 75%, rgba(20,100,0,0.6) 0%, rgba(0,60,0,0.25) 45%, transparent 70%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to top, #000, transparent)',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1200,
            margin: '0 auto',
            padding: '4rem 2rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Left */}
          <div>
            {/* SHIFT — huge standalone wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p
                style={{
                  fontFamily: "'Agrandir Grand Heavy', sans-serif",
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 0.9,
                  margin: '0 0 0.2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                Shift
              </p>
              {/* Green subtitle */}
              <p
                style={{
                  fontFamily: "'Agrandir Grand Heavy', sans-serif",
                  fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                  fontWeight: 800,
                  color: '#9ff839',
                  lineHeight: 1.1,
                  margin: '0 0 0.2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                }}
              >
                Le Hackathon Gen AI n°1
              </p>
              {/* Small subtitle */}
              <p
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.2,
                  margin: '0 0 1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  fontStyle: 'italic',
                }}
              >
                pour les Designers, Devs &amp; Product Lovers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginBottom: '2rem' }}
            >
              <p
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '0.9rem',
                  marginBottom: '0.25rem',
                  lineHeight: 1.5,
                }}
              >
                Crée des produits Gen AI game-changer en 48 heures.
              </p>
              <p
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '0.9rem',
                  marginBottom: '0.25rem',
                  lineHeight: 1.5,
                }}
              >
                Édition &quot;Time to Custom&quot; → Hack ton outil préféré.
              </p>
              <p
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                }}
              >
                🔥 Event all-inclusive - coaching, food &amp; fun.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}
            >
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#9ff839',
                  color: '#000',
                  padding: '0.85rem 2.2rem',
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderRadius: '2px',
                }}
              >
                Je suis chaud pour 2027 !
              </a>
              <span
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.35)',
                  fontStyle: 'italic',
                }}
              >
                Réserve ta place !!
              </span>
            </motion.div>
          </div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img
              src={`${CDN}/Rdl8zkLOcqcng7VGIk3w5sXc38.png`}
              alt="Shift Hackathon"
              style={{
                width: '100%',
                borderRadius: '4px',
                boxShadow: '0 0 60px rgba(0,180,0,0.12), 0 20px 60px rgba(0,0,0,0.5)',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Sponsor strip */}
      <div
        style={{
          background: '#000',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '1.25rem 2rem',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Les complices de Shift depuis 2024
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {HERO_LOGOS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: 0.45, transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.45')}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{
                    height: 26,
                    width: 'auto',
                    maxWidth: 110,
                    objectFit: 'contain',
                    filter: 'brightness(1.1) contrast(0.9)',
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
