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
        padding: '120px 30px 160px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Horizontal neon beam — colored laser through SHIFT */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '62%',
          left: '-10%',
          right: '-10%',
          height: '4px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(159,248,57,0.95) 22%, rgba(255,255,255,1) 45%, rgba(247,87,135,0.95) 58%, rgba(42,235,245,0.9) 78%, transparent 100%)',
          filter: 'blur(1px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Glow halo around the beam */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '52%',
          left: 0,
          right: 0,
          height: '180px',
          background:
            'radial-gradient(ellipse 50% 100% at 50% 50%, rgba(159,248,57,0.45) 0%, rgba(247,87,135,0.4) 35%, rgba(42,235,245,0.3) 65%, transparent 90%)',
          filter: 'blur(48px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Huge background SHIFT text behind the beam */}
      <p
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '58%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          fontFamily: AGRANDIR,
          fontSize: 'clamp(140px, 20vw, 320px)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.14)',
          letterSpacing: '0.05em',
          margin: 0,
          lineHeight: 1,
          pointerEvents: 'none',
          textTransform: 'uppercase',
          zIndex: 0,
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
