import { motion } from 'motion/react';

import { EDITION, JE_SUIS_CHAUD_URL } from '../../data/edition';
import { CTA_LABELS } from '../../data/site';
import { capture } from '../../lib/analytics';
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function ConceptHero() {
  return (
    <section
      className="concept-hero"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgb(0, 0, 0)',
        color: 'rgb(255, 255, 255)',
        overflow: 'hidden',
      }}
    >
      {/* Background image (faint, full section) — CSS background so it's never picked as LCP element */}
      <div className="hero__bg" aria-hidden="true" />

      {/* Content layout */}
      <div className="concept-hero__grid">
        {/* Left: Text */}
        <div>
          <motion.div initial={{ y: 24 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
            <h1 style={{ margin: '0 0 4px', textTransform: 'uppercase' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: AGRANDIR,
                  fontSize: 'clamp(40px, 8vw, 64px)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 0.9,
                }}
              >
                Shift,
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: AGRANDIR,
                  fontSize: 'clamp(26px, 5vw, 36px)',
                  fontWeight: 800,
                  color: EDITION.dominantColor,
                  lineHeight: 1.05,
                }}
              >
                C’est quoi ?
              </span>
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
              onClick={() => capture('cta_clicked', { cta_location: 'concept_hero' })}
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
              {CTA_LABELS.primary}
            </a>
          </motion.div>
        </div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ position: 'relative' }}
        >
          <img
            src={'/assets/images/hero/concept-hero.webp'}
            alt="Shift, le Hackathon Gen AI à Nantes : hacke ton outil préféré"
            decoding="async"
            fetchPriority="high"
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
            className="hero-deco"
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
            className="hero-deco"
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
