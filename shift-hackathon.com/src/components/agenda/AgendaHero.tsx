import { motion } from 'motion/react';

const TICKET_URL = 'https://www.billetweb.fr/shift-hackathon-2026';
const CDN = '/assets/images';
const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

export default function AgendaHero() {
  return (
    <section
      style={{
        position: 'relative',
        height: '720px',
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
          maskImage: 'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(0,0,0,0.6) 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 100% 0%, rgba(0,0,0,0.6) 0%, transparent 70%)',
        }}
      />

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
                lineHeight: 0.9,
                margin: '0 0 4px',
                textTransform: 'uppercase',
              }}
            >
              L&apos;Agenda
            </p>
            <p
              style={{
                fontFamily: AGRANDIR,
                fontSize: '64px',
                fontWeight: 800,
                color: '#9ff839',
                lineHeight: 0.9,
                margin: '0 0 32px',
                textTransform: 'uppercase',
              }}
            >
              Shift
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginBottom: '32px' }}
          >
            <p style={{ color: '#fff', fontFamily: OXANIUM, fontSize: '18px', margin: 0, lineHeight: 1.55 }}>
              Check l&apos;agenda de ce hackathon qui s&apos;annonce épique !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}
          >
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#9ff839',
                color: 'rgb(25,5,50)',
                padding: '11.2px 28px',
                fontFamily: AGRANDIR,
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '18px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.48px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                boxShadow: 'rgba(159,248,57,0.5) 0px 5px 0px 0px',
              }}
            >
              Take my money
            </a>
          </motion.div>
        </div>

        {/* Right: Hero image (3D sphere from live site) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ position: 'relative' }}
        >
          <img
            src={`${CDN}/Rdl8zkLOcqcng7VGIk3w5sXc38.png`}
            alt="Shift Hackathon Agenda"
            style={{
              width: '100%',
              borderRadius: '6px',
              display: 'block',
              boxShadow: '0 0 60px rgba(0,180,0,0.12), 0 20px 60px rgba(0,0,0,0.5)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
