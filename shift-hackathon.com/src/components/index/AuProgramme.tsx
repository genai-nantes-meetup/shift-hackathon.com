import Reveal from '../Reveal';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

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

export default function AuProgramme() {
  return (
    <section style={{ background: '#000', padding: '100px 30px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px',
          }}
        >
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div
                style={{
                  border: `8px solid ${card.color}`,
                  padding: '80px 70px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '40px',
                  minHeight: 520,
                  marginTop: i % 2 === 1 ? '120px' : 0,
                }}
              >
                <h4
                  style={{
                    fontFamily: AGRANDIR,
                    fontSize: 'clamp(36px, 4vw, 60px)',
                    color: card.color,
                    margin: 0,
                    whiteSpace: 'pre-line',
                    lineHeight: 1.05,
                  }}
                >
                  {card.title}
                </h4>
                <p
                  style={{
                    fontFamily: OXANIUM,
                    fontSize: 'clamp(16px, 1.4vw, 20px)',
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
  );
}
