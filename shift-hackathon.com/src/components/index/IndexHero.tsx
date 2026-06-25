import { motion } from 'motion/react';
import { CDN } from '../../data/site';
import { EDITION } from '../../data/edition';

const TICKET_URL = EDITION.earlyTicketUrl;

// All sponsors/complices — shown in scrolling marquee below the hero.
const ALL_COMPLICES = [
  { name: 'Gemini',         logo: `${CDN}/ZDjW6Wo0anEy1mUzbo2oqRQtpeY.png` },
  { name: 'Mistral AI',     logo: `${CDN}/D8JhRI4faB6vhAVUDF9e72ra0.png` },
  { name: 'ElevenLabs',     logo: `${CDN}/8pyqucSyEzD44VogAFy6xnROzw.png` },
  { name: 'n8n',            logo: `${CDN}/WgEQw7xxkydh0HvPGxeC5gEXf0E.png` },
  { name: 'OpenAI',         logo: `${CDN}/2GfcXCoTjp9udilU3hSRmNI.png` },
  { name: 'Meilisearch',    logo: `${CDN}/lLgDez4N7yTxGAZM34UIiFyWGYU.png` },
  { name: 'Gladia',         logo: `${CDN}/3OZbojzYOu5aWZVGg9TzXv62rg.png` },
  { name: 'GitHub Copilot', logo: `${CDN}/c70JnFks3D6g1Jt8j3uifdssjs.png` },
  { name: 'Clever Cloud',   logo: `${CDN}/blQC5WAIES7A46wE17tWPV4vUM8.png` },
  { name: 'Reecall',        logo: `${CDN}/Q4GlC03HI3EvrvR6avl4vVLn7RU.png` },
  { name: 'Externatic',     logo: `${CDN}/NjhM1EcoE5U1JUbx41DQKwUqaY.png` },
  { name: 'Agoriade AI',    logo: `${CDN}/FhyDFHEcmFWTH2IRbcuTP4xr8E.png` },
  { name: 'Theodo',         logo: `${CDN}/mCTZuc3WkAEbF7mvjFvlgq2UpdY.png` },
  { name: 'Onepoint',       logo: `${CDN}/4LTQ4nbLOoVH247zlIwkmulQeY.png` },
  { name: 'Extia',          logo: `${CDN}/UY4Fa4zoVRxtT9bLGGzXa4CDvo.png` },
  { name: 'Ici Lundi',      logo: `${CDN}/9HTUJVvG5eehTUa23w4KbvQXQ.png` },
  { name: 'La Cantine',     logo: `${CDN}/jAnWbOPKhE4bgowOaZTeVS5I.svg` },
  { name: 'Kalicube',       logo: `${CDN}/vUgDWWn8ASxflI3r8gukN5nzSA.png` },
  { name: 'RCA',            logo: `${CDN}/Hp1Tl3hJIse0Z786qNEEdKjLSCU.png` },
  { name: 'Arzel',          logo: `${CDN}/cHgckECvWGlsSEkTQRYeEbkkQtg.png` },
  { name: 'Clint',          logo: `${CDN}/EyVeU2UQzbHZScFcXMMED5yAud8.png` },
  { name: 'dev.events',     logo: `${CDN}/B3tmi7wxJqSp3uS69o09WfrttmQ.png` },
];

export default function IndexHero() {
  return (
    <>
      <section className="hero">
        {/* Background image, faded */}
        <img
          className="hero__bg"
          src={`${CDN}/wa9oVNjleDQIbBtztqNGal6M.png`}
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
              src={`${CDN}/Rdl8zkLOcqcng7VGIk3w5sXc38.png`}
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
