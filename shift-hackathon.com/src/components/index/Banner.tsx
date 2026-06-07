import Reveal from '../Reveal';
import { EDITION } from '../../data/edition';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const DELA = "'Dela Gothic One', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

const TICKET_URL = EDITION.ticketUrl;

export default function Banner() {
  return (
    <section
      style={{
        position: 'relative',
        background: '#000',
        padding: '100px 30px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Neon glow background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '20% 0 0 0',
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(159,248,57,0.35) 0%, rgba(247,87,135,0.25) 30%, rgba(42,235,245,0.15) 60%, transparent 80%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      {/* Huge background SHIFT text */}
      <p
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          fontFamily: AGRANDIR,
          fontSize: 'clamp(120px, 18vw, 280px)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.08)',
          letterSpacing: '0.05em',
          margin: 0,
          lineHeight: 1,
          pointerEvents: 'none',
          textTransform: 'uppercase',
        }}
      >
        SHIFT
      </p>
      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', zIndex: 1 }}>
        <Reveal>
          <h2
            style={{
              fontFamily: DELA,
              fontSize: 'clamp(30px, 4vw, 50px)',
              color: '#fff',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              whiteSpace: 'pre-line',
            }}
          >
            {'Le hackathon parfait pour allier\nproduct & tech'}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            style={{
              fontFamily: OXANIUM,
              fontSize: '18px',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '2.5rem',
            }}
          >
            Un événement pour développeurs, designers &amp; product lovers.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#9ff839',
              color: '#190532',
              fontFamily: AGRANDIR,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 32px',
              borderRadius: '4px',
              boxShadow: 'rgba(159,248,57,0.5) 0px 5px 0px 0px',
            }}
          >
            Je suis chaud
          </a>
        </Reveal>
      </div>
    </section>
  );
}
