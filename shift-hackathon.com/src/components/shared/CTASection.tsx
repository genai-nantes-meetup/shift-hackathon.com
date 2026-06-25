import Reveal from '../Reveal';
import { EDITION } from '../../data/edition';

const TICKET_URL = EDITION.ticketUrl;

export default function CTASection() {
  return (
    <section style={{ background: '#000', padding: '80px 32px' }}>
      <Reveal>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            border: '8px solid #9ff839',
            padding: '56px 56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Agrandir Grand Heavy', sans-serif",
                fontSize: '50px',
                lineHeight: '50px',
                fontWeight: 800,
                color: '#fff',
                margin: '0 0 12px',
              }}
            >
              Ça te tente ?
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontFamily: 'Oxanium, sans-serif',
                fontSize: '18px',
                lineHeight: '27px',
                margin: 0,
              }}
            >
              Inscris-toi dès maintenant et chauffe tes potes !
          </div>
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Take my money
          </a>
        </div>
      </Reveal>
    </section>
  );
}
