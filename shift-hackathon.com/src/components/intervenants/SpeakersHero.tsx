import { motion } from 'motion/react';

import { EDITION, JE_SUIS_CHAUD_URL } from '../../data/edition';
import { CTA_LABELS } from '../../data/site';
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function SpeakersHero() {
  return (
    <section
      className="speakers-hero"
      style={{
        position: 'relative',
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

      {/* Background image (faint) — CSS background so it's never picked as LCP element.
          NB: previously an <img src="hero-background.webp"> that 404'd (only the .png exists). */}
      <div className="hero__bg" aria-hidden="true" />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '35%',
          background: 'linear-gradient(to top, #000, transparent)',
          zIndex: 0,
        }}
      />

      <div className="speakers-hero__grid">
        {/* Left: Text */}
        <div>
          <motion.div initial={{ y: 24 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
            <h1
              style={{
                fontFamily: AGRANDIR,
                fontSize: 'clamp(26px, 7vw, 64px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 0.9,
                textTransform: 'uppercase',
                margin: '0 0 28px',
                overflowWrap: 'break-word',
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
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ position: 'relative' }}
        >
          <img
            src={'/assets/images/hero/speakers-hero.webp'}
            alt="Intervenants du Shift Hackathon Gen AI 2026 à Nantes"
            decoding="async"
            fetchPriority="high"
            width={1600}
            height={900}
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
