import { motion } from 'motion/react';
import { PARTNERS } from '../../data/site';

const TICKET_URL = 'https://tally.so/r/D45GKl';
const CDN = 'https://framerusercontent.com/images';
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const AGRANDIR_ITALIC = "'Agrandir Thin Italic', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

// All sponsors/complices — shown in scrolling marquee
const ALL_COMPLICES = [
  { name: 'Gemini',        logo: `${CDN}/ZDjW6Wo0anEy1mUzbo2oqRQtpeY.png` },
  { name: 'Mistral AI',    logo: `${CDN}/D8JhRI4faB6vhAVUDF9e72ra0.png` },
  { name: 'ElevenLabs',    logo: `${CDN}/8pyqucSyEzD44VogAFy6xnROzw.png` },
  { name: 'n8n',           logo: `${CDN}/WgEQw7xxkydh0HvPGxeC5gEXf0E.png` },
  { name: 'OpenAI',        logo: `${CDN}/2GfcXCoTjp9udilU3hSRmNI.png` },
  { name: 'Meilisearch',   logo: `${CDN}/lLgDez4N7yTxGAZM34UIiFyWGYU.png` },
  { name: 'Gladia',        logo: `${CDN}/3OZbojzYOu5aWZVGg9TzXv62rg.png` },
  { name: 'GitHub Copilot',logo: `${CDN}/c70JnFks3D6g1Jt8j3uifdssjs.png` },
  { name: 'Clever Cloud',  logo: `${CDN}/blQC5WAIES7A46wE17tWPV4vUM8.png` },
  { name: 'Reecall',       logo: `${CDN}/Q4GlC03HI3EvrvR6avl4vVLn7RU.png` },
  { name: 'Externatic',    logo: `${CDN}/NjhM1EcoE5U1JUbx41DQKwUqaY.png` },
  { name: 'Agoriade AI',   logo: `${CDN}/FhyDFHEcmFWTH2IRbcuTP4xr8E.png` },
  { name: 'Theodo',        logo: `${CDN}/mCTZuc3WkAEbF7mvjFvlgq2UpdY.png` },
  { name: 'Onepoint',      logo: `${CDN}/4LTQ4nbLOoVH247zlIwkmulQeY.png` },
  { name: 'Extia',         logo: `${CDN}/UY4Fa4zoVRxtT9bLGGzXa4CDvo.png` },
  { name: 'Ici Lundi',     logo: `${CDN}/9HTUJVvG5eehTUa23w4KbvQXQ.png` },
  { name: 'La Cantine',    logo: `${CDN}/jAnWbOPKhE4bgowOaZTeVS5I.svg` },
  { name: 'Kalicube',      logo: `${CDN}/vUgDWWn8ASxflI3r8gukN5nzSA.png` },
  { name: 'RCA',           logo: `${CDN}/Hp1Tl3hJIse0Z786qNEEdKjLSCU.png` },
  { name: 'Arzel',         logo: `${CDN}/cHgckECvWGlsSEkTQRYeEbkkQtg.png` },
  { name: 'Clint',         logo: `${CDN}/EyVeU2UQzbHZScFcXMMED5yAud8.png` },
  { name: 'dev.events',    logo: `${CDN}/B3tmi7wxJqSp3uS69o09WfrttmQ.png` },
];

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
              {/* SHIFT — 64px exact live site value */}
              <p
                style={{
                  fontFamily: AGRANDIR,
                  fontSize: '64px',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 0.9,
                  margin: '0 0 4px',
                  textTransform: 'uppercase',
                  letterSpacing: 'normal',
                }}
              >
                Shift
              </p>
              {/* Le Hackathon Gen AI n°1 — 22px exact */}
              <p
                style={{
                  fontFamily: AGRANDIR,
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.1,
                  margin: '0 0 2px',
                  textTransform: 'uppercase',
                  letterSpacing: 'normal',
                }}
              >
                Le Hackathon Gen AI n°1
              </p>
              {/* Italic subtitle — 20px exact */}
              <p
                style={{
                  fontFamily: AGRANDIR_ITALIC,
                  fontSize: '20px',
                  fontWeight: 100,
                  color: '#fff',
                  lineHeight: 1.2,
                  margin: '0 0 28px',
                  fontStyle: 'italic',
                  textTransform: 'uppercase',
                }}
              >
                pour les Designers, Devs &amp; Product Lovers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginBottom: '24px' }}
            >
              {/* Line 1 — 18px Oxanium (live site value) */}
              <p style={{ color: '#fff', fontFamily: OXANIUM, fontSize: '18px', margin: 0, lineHeight: 1.55 }}>
                Crée des produits Gen AI game-changer en 48 heures.
              </p>
              {/* Line 2 — 15px Oxanium */}
              <p style={{ color: '#fff', fontFamily: OXANIUM, fontSize: '15px', margin: 0, lineHeight: 1.55 }}>
                Édition &quot;Time to Custom&quot; → Hack ton outil préféré.
              </p>
              {/* Line 3 — 15px Oxanium + margin top + bold */}
              <p style={{ color: '#fff', fontFamily: OXANIUM, fontSize: '15px', lineHeight: 1.55, marginTop: '14px', marginBottom: 0 }}>
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
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  boxShadow: 'rgba(159,248,57,0.5) 0px 5px 0px 0px',
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

      {/* Scrolling sponsor marquee */}
      <div
        style={{
          background: '#000',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '0.6rem 0',
        }}
      >
        {/* Label + marquee constrained to 1200px like all sections */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <em
            style={{
              display: 'block',
              fontFamily: OXANIUM,
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'left',
              marginBottom: '0.4rem',
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            Les complices de Shift depuis 2024
          </em>
          {/* Marquee track — overflow hidden on this container only */}
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', width: 'max-content' }}
            >
              {[...ALL_COMPLICES, ...ALL_COMPLICES].map((p, i) => (
                <img
                  key={`${p.name}-${i}`}
                  src={p.logo}
                  alt={p.name}
                  style={{
                    height: 28,
                    width: 'auto',
                    maxWidth: 120,
                    objectFit: 'contain',
                    flexShrink: 0,
                    opacity: 0.65,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
