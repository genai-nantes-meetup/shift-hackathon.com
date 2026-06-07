import { motion } from 'motion/react';
import { CDN } from '../../data/site';

import { EDITION } from '../../data/edition';
const TICKET_URL = EDITION.ticketUrl;
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const AGRANDIR_ITALIC = "'Agrandir Thin Italic', sans-serif";
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
        src={`${CDN}/wa9oVNjleDQIbBtztqNGal6M.png`}
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
            <p
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
              Shift
            </p>
            <p
              style={{
                fontFamily: AGRANDIR,
                fontSize: '22px',
                fontWeight: 800,
                color: '#fff',
                lineHeight: '24.2px',
                margin: '0 0 2px',
                textTransform: 'uppercase',
              }}
            >
              Le Hackathon Gen AI n°1
            </p>
            <p
              style={{
                fontFamily: AGRANDIR_ITALIC,
                fontSize: '20px',
                fontWeight: 100,
                color: '#fff',
                lineHeight: '24px',
                margin: '0 0 28px',
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
            <p
              style={{
                color: '#fff',
                fontFamily: OXANIUM,
                fontSize: '18px',
                margin: 0,
                lineHeight: '27.9px',
              }}
            >
              Crée des produits Gen AI game-changer en 48h.
            </p>
            <p
              style={{
                color: '#fff',
                fontFamily: OXANIUM,
                fontSize: '18px',
                margin: 0,
                lineHeight: '27.9px',
              }}
            >
              Édition &quot;Time to Custom&quot; → Hack ton outil favori.
            </p>
            <p
              style={{
                color: '#fff',
                fontFamily: OXANIUM,
                fontSize: '18px',
                margin: '14px 0 0',
                lineHeight: '27.9px',
              }}
            >
              🔥 Event all-inclusive - coaching, food &amp; drinks inclus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'rgb(159, 248, 57)',
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
                boxShadow: 'rgba(159, 248, 57, 0.5) 0px 5px 0px 0px',
              }}
            >
              Je suis chaud pour 2027 !
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
  );
}
