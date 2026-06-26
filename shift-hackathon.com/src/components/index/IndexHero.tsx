import { motion } from 'motion/react';
import { EDITION } from '../../data/edition';

// All sponsors/complices — shown in scrolling marquee below the hero.
const ALL_COMPLICES = [
  { name: 'Gemini', logo: '/assets/images/sponsors/logo-gemini.png' },
  { name: 'Mistral AI', logo: '/assets/images/sponsors/logo-mistral-ai.png' },
  { name: 'ElevenLabs', logo: '/assets/images/sponsors/logo-elevenlabs.png' },
  { name: 'n8n', logo: '/assets/images/sponsors/logo-n8n.png' },
  { name: 'OpenAI', logo: '/assets/images/sponsors/logo-openai.png' },
  { name: 'Meilisearch', logo: '/assets/images/sponsors/logo-meilisearch.png' },
  { name: 'Gladia', logo: '/assets/images/sponsors/logo-gladia.png' },
  { name: 'GitHub Copilot', logo: '/assets/images/sponsors/logo-github-copilot.png' },
  { name: 'Clever Cloud', logo: '/assets/images/sponsors/logo-clever-cloud.png' },
  { name: 'Reecall', logo: '/assets/images/sponsors/logo-reecall.png' },
  { name: 'Externatic', logo: '/assets/images/sponsors/logo-externatic.png' },
  { name: 'Agoriade AI', logo: '/assets/images/sponsors/logo-agoriade-ai.png' },
  { name: 'Theodo', logo: '/assets/images/sponsors/logo-theodo.png' },
  { name: 'Onepoint', logo: '/assets/images/sponsors/logo-onepoint.png' },
  { name: 'Extia', logo: '/assets/images/sponsors/logo-extia.png' },
  { name: 'Ici Lundi', logo: '/assets/images/sponsors/logo-ici-lundi.png' },
  { name: 'La Cantine', logo: '/assets/images/sponsors/logo-la-cantine.svg' },
  { name: 'Kalicube', logo: '/assets/images/sponsors/logo-kalicube.png' },
  { name: 'RCA', logo: '/assets/images/sponsors/logo-rca.png' },
  { name: 'Arzel', logo: '/assets/images/sponsors/logo-arzel.png' },
  { name: 'Clint', logo: '/assets/images/sponsors/logo-clint.png' },
  { name: 'dev.events', logo: '/assets/images/sponsors/logo-dev-events.png' },
];

export default function IndexHero() {
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero__title">
              <span className="hero__title-main">Shift</span>
              <span className="hero__title-sub">Le Hackathon Gen AI n°1</span>
              <span className="hero__title-italic">
                pour les Designers, Devs &amp; Product lovers
              </span>
            </h1>

            <div className="hero__body">
              <p>Crée des produits Gen AI game-changer en 48 heures.</p>
              <p>Édition &ldquo;Time to Custom&rdquo; → Hack ton outil préféré.</p>
              <p>🔥 Event all-inclusive - coaching, food &amp; fun.</p>
            </div>

            <div className="hero__cta-group">
              <a
                href={EDITION.earlyTicketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary"
              >
                Je suis chaud pour 2027 !
              </a>
              <p className="hero__sub-cta">Réserve ta place !!</p>
            </div>
          </motion.div>

          <motion.div
            className="hero__image-wrap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img
              src={'/assets/images/hero/home-hero.png'}
              alt="Shift Hackathon"
              className="hero__image"
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
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...ALL_COMPLICES, ...ALL_COMPLICES].map((p, i) => (
                <img key={`${p.name}-${i}`} src={p.logo} alt={p.name} className="marquee__logo" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
