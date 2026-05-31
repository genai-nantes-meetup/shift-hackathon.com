import { motion } from 'motion/react';
import { PARTNERS } from '../../data/site';

const TICKET_URL = 'https://tally.so/r/D45GKl';
const CDN = 'https://framerusercontent.com/images';
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const AGRANDIR_ITALIC = "'Agrandir Thin Italic', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

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
        {/* Dot-grid texture — upper-right quadrant like live site */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '45%',
            height: '60%',
            zIndex: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(0,0,0,0.6) 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(0,0,0,0.6) 0%, transparent 70%)',
          }}
        />

        {/* Background image (faint) */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src={`${CDN}/wa9oVNjleDQIbBtztqNGal6M.png`}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }}
          />
          {/* Green glow — bottom-left */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 55% 65% at 8% 80%, rgba(15,90,0,0.65) 0%, rgba(0,50,0,0.2) 50%, transparent 70%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '35%',
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
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* SHIFT */}
              <p
                style={{
                  fontFamily: AGRANDIR,
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 0.9,
                  margin: '0 0 0.15rem',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                Shift
              </p>
              {/* Le Hackathon Gen AI n°1 — WHITE */}
              <p
                style={{
                  fontFamily: AGRANDIR,
                  fontSize: 'clamp(1rem, 2vw, 1.375rem)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.1,
                  margin: '0 0 0.15rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                }}
              >
                Le Hackathon Gen AI n°1
              </p>
              {/* Italic subtitle */}
              <p
                style={{
                  fontFamily: AGRANDIR_ITALIC,
                  fontSize: 'clamp(0.85rem, 1.3vw, 1.25rem)',
                  fontWeight: 100,
                  color: '#fff',
                  lineHeight: 1.2,
                  margin: '0 0 1.75rem',
                  letterSpacing: '0.01em',
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
              style={{ marginBottom: '1.5rem' }}
            >
              {/* Line 1 */}
              <p
                style={{
                  color: '#fff',
                  fontFamily: OXANIUM,
                  fontSize: '0.875rem',
                  marginBottom: '0',
                  lineHeight: 1.55,
                }}
              >
                Crée des produits Gen AI game-changer en 48 heures.
              </p>
              {/* Line 2 */}
              <p
                style={{
                  color: '#fff',
                  fontFamily: OXANIUM,
                  fontSize: '0.9375rem',
                  marginBottom: '0',
                  lineHeight: 1.55,
                }}
              >
                Édition &quot;Time to Custom&quot; → Hack ton outil préféré.
              </p>
              {/* Line 3 — with margin top + bold "Event all-inclusive" */}
              <p
                style={{
                  color: '#fff',
                  fontFamily: OXANIUM,
                  fontSize: '0.9375rem',
                  lineHeight: 1.55,
                  marginTop: '0.85rem',
                  marginBottom: '0',
                }}
              >
                🔥 <strong style={{ fontWeight: 700 }}>Event all-inclusive</strong> - coaching, food &amp; fun.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}
            >
              {/* CTA Button — Agrandir Grand Heavy, dark bg, green border like live */}
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#9ff839',
                  color: 'rgb(25,5,50)',
                  padding: '0.7rem 1.75rem',
                  fontFamily: AGRANDIR,
                  fontWeight: 400,
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  borderRadius: '3px',
                  whiteSpace: 'nowrap',
                }}
              >
                Je suis chaud pour 2027 !
              </a>
              {/* "Réserve ta place !!" — bigger */}
              <em
                style={{
                  fontFamily: OXANIUM,
                  fontSize: '0.9375rem',
                  color: '#fff',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Réserve ta place !!
              </em>
            </motion.div>
          </div>

          {/* Right: Hero image — square crop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ position: 'relative' }}
          >
            <img
              src={`${CDN}/Rdl8zkLOcqcng7VGIk3w5sXc38.png`}
              alt="Shift Hackathon"
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                objectPosition: 'right center',
                borderRadius: '6px',
                display: 'block',
                boxShadow: '0 0 60px rgba(0,180,0,0.12), 0 20px 60px rgba(0,0,0,0.5)',
              }}
            />
            {/* Decorative dots/angel shape — bottom-left of image */}
            <img
              src={`${CDN}/mRZACm4BynYCqQoFUgtHbuSrdQ8.svg`}
              alt=""
              aria-hidden
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                width: 112,
                height: 120,
                pointerEvents: 'none',
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
          <em
            style={{
              display: 'block',
              fontFamily: OXANIUM,
              fontSize: '1rem',
              color: '#fff',
              textAlign: 'center',
              marginBottom: '1rem',
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            Les complices de Shift depuis 2024
          </em>
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
                style={{ opacity: 0.55, transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.55')}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{
                    height: 28,
                    width: 'auto',
                    maxWidth: 120,
                    objectFit: 'contain',
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
