import { motion } from 'motion/react';

import { EDITION, JE_SUIS_CHAUD_URL } from '../../data/edition';
import { CTA_LABELS } from '../../data/site';
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function SpeakersHero() {
  return (
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
      {/* Dot-grid texture — upper-right quadrant */}
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
          maskImage:
            'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(0,0,0,0.6) 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(0,0,0,0.6) 0%, transparent 70%)',
        }}
      />

      {/* Background image (faint) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={'/assets/images/hero/hero-background.webp'}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'transparent',
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
            <h1
              style={{
                fontFamily: AGRANDIR,
                fontSize: '64px',
                fontWeight: 800,
                color: '#fff',
                lineHeight: '57.6px',
                textTransform: 'uppercase',
                margin: '0 0 28px',
              }}
            >
              Les <span style={{ color: EDITION.dominantColor }}>Intervenants</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: '24px' }}
          >
            <p
              style={{
                color: '#fff',
                fontFamily: OXANIUM,
                fontSize: '18px',
                margin: '0',
                lineHeight: '27.9px',
              }}
            >
              Attache ta ceinture et jette un œil au line-up de ce hackathon d’anthologie !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'flex-start',
            }}
          >
            <a
              href={JE_SUIS_CHAUD_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: EDITION.dominantColor,
                color: 'rgb(25,5,50)',
                padding: '0.7rem 1.75rem',
                fontFamily: AGRANDIR,
                fontWeight: 400,
                fontSize: '0.75rem',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                boxShadow: `${EDITION.dominantColorShadow} 0px 5px 0px 0px`,
              }}
            >
              {CTA_LABELS.primary}
            </a>
          </motion.div>
        </div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ position: 'relative' }}
        >
          <img
            src={'/assets/images/hero/speakers-hero.webp'}
            alt="Shift Hackathon"
            decoding="async"
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              objectPosition: 'center center',
              borderRadius: '6px',
              display: 'block',
              boxShadow: '0 0 60px rgba(0,180,0,0.12), 0 20px 60px rgba(0,0,0,0.5)',
            }}
          />
          <img
            src={'/assets/images/hero/hero-arrow-decoration.svg'}
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
          <img
            src={'/assets/images/hero/hero-circle-decoration.svg'}
            alt=""
            aria-hidden
            style={{
              position: 'absolute',
              top: '60px',
              right: '-65px',
              width: 90,
              height: 90,
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
