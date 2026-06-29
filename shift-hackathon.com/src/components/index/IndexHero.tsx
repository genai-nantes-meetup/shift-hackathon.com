import { motion, useReducedMotion } from 'motion/react';
import { EDITION, JE_SUIS_CHAUD_URL } from '../../data/edition';
import { ALL_COMPLICES } from '../../data/edition_complices';

export default function IndexHero() {
  const reduce = useReducedMotion();
  return (
    <>
      <section className="hero">
        {/* Background image, faded */}
        <img
          className="hero__bg"
          src={'/assets/images/hero/hero-background.png'}
          alt=""
          aria-hidden="true"
        />
        {/* Dot-grid texture — upper-right */}
        <div className="hero__dots" aria-hidden="true" />
        {/* Green glow — bottom-left */}
        <div className="hero__glow" aria-hidden="true" />

        <div className="hero__container">
          <motion.div
            className="hero__text"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.5 }}
          >
            <h1 className="hero__title">
              <span className="hero__title-main">Shift</span>
              <span className="hero__title-sub">Le Hackathon Gen AI n°1</span>
              <span className="hero__title-italic">pour les Designers, Devs & Product lovers</span>
            </h1>

            <div className="hero__body">
              <p>Crée des produits Gen AI game-changer en 48 heures.</p>
              <p>Édition “Time to Custom” → Hack ton outil préféré.</p>
              <p>🔥 Event all-inclusive - coaching, food & fun.</p>
            </div>

            <div className="hero__cta-group">
              <a
                href={JE_SUIS_CHAUD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary"
              >
                Je suis chaud pour {EDITION.nextYear} !
              </a>
              <p className="hero__sub-cta">Réserve ta place !!</p>
            </div>
          </motion.div>

          <motion.div
            className="hero__image-wrap"
            initial={reduce ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.1 }}
          >
            <img
              src={'/assets/images/hero/home-hero.webp'}
              alt="Shift Hackathon"
              className="hero__image"
              fetchPriority="high"
              decoding="async"
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

      {/* Sponsor marquee */}
      <div className="marquee">
        <div className="marquee__inner">
          <em className="marquee__label">Les complices de Shift depuis 2024</em>
          <div className="marquee__track-wrap">
            <motion.div
              className="marquee__track"
              animate={reduce ? undefined : { x: ['0%', '-50%'] }}
              transition={reduce ? undefined : { duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...ALL_COMPLICES, ...ALL_COMPLICES].map((p, i) => (
                <img
                  key={`${p.name}-${i}`}
                  src={p.logo}
                  alt={p.name}
                  className="marquee__logo"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
