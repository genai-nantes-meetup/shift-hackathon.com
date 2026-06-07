import Reveal from '../Reveal';
import { EDITION } from '../../data/edition';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const DELA = "'Dela Gothic One', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

const TICKET_URL = EDITION.ticketUrl;

const DESCRIPTION_PARAGRAPHS = [
  "Shift, c'est LE hackathon Gen AI de la place nantaise. Après 2 éditions hautes en couleur, nous revenons sous le pavillon noir : toi, l'iconoclastic hacker, toi le designer alchemist, ou toi le product shaper, à cette édition 2026, tu vas te RÉ-GA-LER.",
  'Le concept de cette année, ça va être de hacker ton outil préféré. Tu le trouves cool mais il ne répond pas exactement à ton usage parce qu\'il lui manque une fonctionnalité clé ou parce que tu n\'en es pas vraiment le "user type" ? Viens proposer ton hack pour développer la feature qui te ferait kiffer !',
  "Shift, c'est 48H de pure prod pour créer des produits Gen AI à en faire rougir les techos de la Silicon Valley. On te fournit tout : le cadre, les outils, et les conseils des meilleurs experts de la tech et de la Gen AI.",
  'Prêt à faire tomber les barrières ? Inscris-toi et embarque pour une aventure inoubliable !',
];

const CARDS = [
  {
    title: "Confs'",
    color: '#f5b700',
    description:
      "Cette aventure, c'est le level up que vous attendiez : des conférences si croustillantes sur la Gen AI et le Product que vous allez bouillir d'envie de tout disrupter sur votre passage. On parle de stratégies de ninja et de techniques secrètes activables directement à embarquer illico dans votre arsenal.",
  },
  {
    title: 'Coaching',
    color: '#a2ff2c',
    description:
      "Vous bloquez sur la tech ? Nous débarquons avec une équipe de choc en Gen AI & Product prête à vous extirper de n'importe quel pétrin. Plus d'excuses.",
  },
  {
    title: 'User tests',
    color: '#44e5e7',
    description:
      'Attention, messieurs-dames, on change les règles du jeu pour ce hackathon : deux rounds de battle avec les utilisateurs au programme ! On est là pour pimenter les choses et enrichir votre idée avec une expérience utilisateur qui déchire.',
  },
  {
    title: "Fun &\nRock'n Roll",
    color: '#e9190f',
    description:
      'On vous réserve quelques surprises mais attendez-vous à une ambiance déjantée et des participants chauds bouillants !',
  },
];

export default function HackathonPerfait() {
  return (
    <>
      {/* Banner */}
      <section
        style={{
          position: 'relative',
          background: `url('/assets/images/YrNKkFgKwlA7VfiYGChWHowALE.jpg') center/cover no-repeat`,
          padding: '100px 120px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto' }}>
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
                fontFamily: DELA,
                fontSize: '20px',
                color: '#fff',
                marginBottom: '2.5rem',
              }}
            >
              Un événement pour developpeurs, designers &amp; product lovers.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: 720,
                marginBottom: '2.5rem',
              }}
            >
              {DESCRIPTION_PARAGRAPHS.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: OXANIUM,
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
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

      {/* Programme cards */}
      <section style={{ background: '#000', padding: '50px 120px 100px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <Reveal>
            <h3
              style={{
                fontFamily: AGRANDIR,
                fontSize: '40px',
                color: '#fff',
                marginBottom: '2rem',
              }}
            >
              Au programme
            </h3>
          </Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <div
                  style={{
                    border: `8px solid ${card.color}`,
                    padding: '60px 70px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: AGRANDIR,
                      fontSize: 'clamp(24px, 2.5vw, 40px)',
                      color: card.color,
                      margin: 0,
                      whiteSpace: 'pre-line',
                      lineHeight: 1.1,
                    }}
                  >
                    {card.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: OXANIUM,
                      fontSize: 'clamp(15px, 1.2vw, 18px)',
                      color: card.color,
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
