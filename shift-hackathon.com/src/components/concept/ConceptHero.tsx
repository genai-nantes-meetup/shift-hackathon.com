import { motion } from 'motion/react';

import { EDITION, JE_SUIS_CHAUD_URL } from '../../data/edition';
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function ConceptHero() {
  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgb(0, 0, 0)',
        color: 'rgb(255, 255, 255)',
        overflow: 'hidden',
        minHeight: '843px',
      }}
    >
      {/* Background image (faint, full section) */}
      <img
        src={'/assets/images/hero/hero-background.png'}
        alt=""
        style={{
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      {/* Content layout */}
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
                margin: '0 0 4px',
                textTransform: 'uppercase',
              }}
            >
              Shift,
            </h1>
            <p
              style={{
                fontFamily: AGRANDIR,
                fontSize: '36px',
                fontWeight: 800,
                color: EDITION.dominantColor,
                lineHeight: '38px',
                margin: '0 0 4px',
                textTransform: 'uppercase',
              }}
            >
              C’est quoi ?
            </p>
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
                margin: 0,
                lineHeight: '27.9px',
              }}
            >
              Shift - Time To Custom, c’est 48 heures pour hacker ton outil préféré, créer une vraie
              feature Gen AI utile pour ton usage, et produire aux côtés des meilleurs experts tech.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <a
              href={JE_SUIS_CHAUD_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: EDITION.dominantColor,
                color: 'rgb(25, 5, 50)',
                padding: '11.2px 28px',
                fontFamily: AGRANDIR,
                fontWeight: 400,
                fontSize: '12px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.48px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                boxShadow: `${EDITION.dominantColorShadow} 0px 5px 0px 0px`,
              }}
            >
              Take my money
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
            src={'/assets/images/hero/concept-hero.webp'}
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
        </motion.div>
      </div>
    </section>
  );
}
