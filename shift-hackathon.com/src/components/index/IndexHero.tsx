import { motion } from 'motion/react';
import { CDN } from '../../data/site';
import { EDITION } from '../../data/edition';

const TICKET_URL = EDITION.earlyTicketUrl;

// All sponsors/complices — shown in scrolling marquee below the hero.
const ALL_COMPLICES = [
  { name: 'Gemini',         logo: `${CDN}/sponsors/logo-gemini.png` },
  { name: 'Mistral AI',     logo: `${CDN}/sponsors/logo-mistral-ai.png` },
  { name: 'ElevenLabs',     logo: `${CDN}/sponsors/logo-elevenlabs.png` },
  { name: 'n8n',            logo: `${CDN}/sponsors/logo-n8n.png` },
  { name: 'OpenAI',         logo: `${CDN}/sponsors/logo-openai.png` },
  { name: 'Meilisearch',    logo: `${CDN}/sponsors/logo-meilisearch.png` },
  { name: 'Gladia',         logo: `${CDN}/sponsors/logo-gladia.png` },
  { name: 'GitHub Copilot', logo: `${CDN}/sponsors/logo-github-copilot.png` },
  { name: 'Clever Cloud',   logo: `${CDN}/sponsors/logo-clever-cloud.png` },
  { name: 'Reecall',        logo: `${CDN}/sponsors/logo-reecall.png` },
  { name: 'Externatic',     logo: `${CDN}/sponsors/logo-externatic.png` },
  { name: 'Agoriade AI',    logo: `${CDN}/sponsors/logo-agoriade-ai.png` },
  { name: 'Theodo',         logo: `${CDN}/sponsors/logo-theodo.png` },
  { name: 'Onepoint',       logo: `${CDN}/sponsors/logo-onepoint.png` },
  { name: 'Extia',          logo: `${CDN}/sponsors/logo-extia.png` },
  { name: 'Ici Lundi',      logo: `${CDN}/sponsors/logo-ici-lundi.png` },
  { name: 'La Cantine',     logo: `${CDN}/sponsors/logo-la-cantine.svg` },
  { name: 'Kalicube',       logo: `${CDN}/sponsors/logo-kalicube.png` },
  { name: 'RCA',            logo: `${CDN}/sponsors/logo-rca.png` },
  { name: 'Arzel',          logo: `${CDN}/sponsors/logo-arzel.png` },
  { name: 'Clint',          logo: `${CDN}/sponsors/logo-clint.png` },
  { name: 'dev.events',     logo: `${CDN}/sponsors/logo-dev-events.png` },
];

export default function IndexHero() {
  return (
    <>
      <section className="hero">
        {/* Background image, faded */}
        <img
          className="hero__bg"
          src={`${CDN}/hero/hero-background.png`}
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
              <span className="hero__title-italic">pour les Designers, Devs &amp; Product lovers</span>
            </h1>

            <div className="hero__body">
              <p>Crée des produits Gen AI game-changer en 48 heures.</p>
              <p>Édition &ldquo;Time to Custom&rdquo; → Hack ton outil préféré.</p>
              <p>🔥 Event all-inclusive - coaching, food &amp; fun.</p>
            </div>

            <div className="hero__cta-group">
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" className="cta-primary">
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
              src={`${CDN}/hero/home-hero.png`}
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
                <img
                  key={`${p.name}-${i}`}
                  src={p.logo}
                  alt={p.name}
                  className="marquee__logo"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
