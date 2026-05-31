import Reveal from '../Reveal';

const TICKET_URL = 'https://www.billetweb.fr/shift-hackathon-2026';

export default function CTASection() {
  return (
    <section style={{
      padding: '5rem 2rem',
      background: 'linear-gradient(135deg, #0e0218 0%, #1a0330 50%, #0e0218 100%)',
      textAlign: 'center',
    }}>
      <Reveal>
        <h2 style={{
          fontFamily: "'Agrandir Grand Heavy', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800, color: '#fff', marginBottom: '1rem',
          textTransform: 'uppercase', letterSpacing: '-0.02em',
        }}>
          Ça te tente ?
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p style={{
          color: 'rgba(255,255,255,0.7)', fontFamily: 'Barlow, sans-serif',
          fontSize: '1.125rem', marginBottom: '2rem',
        }}>
          Inscris toi dès maintenant et chauffe tes potes !
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block',
          background: '#fae01b', color: '#000',
          padding: '1rem 2.5rem',
          fontFamily: 'Barlow, sans-serif', fontWeight: 900,
          fontSize: '1.1rem', textDecoration: 'none',
          textTransform: 'uppercase', letterSpacing: '0.05em',
          borderRadius: '2px',
          boxShadow: 'rgba(159,248,57,0.5) 0px 5px 0px 0px',
        }}>
          Take my money 🤘
        </a>
      </Reveal>
    </section>
  );
}
