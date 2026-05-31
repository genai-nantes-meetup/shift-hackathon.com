import Reveal from '../Reveal';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

const ITEMS = [
  {
    icon: '🎤',
    title: "Confs'",
    color: 'rgb(245,183,0)',
    desc: "Cette aventure, c'est le level up que vous attendiez : des conférences si croustillantes sur la Gen AI et le Product que vous allez bouillir d'envie de tout disrupter sur votre passage. On parle de stratégies de ninja et de techniques secrètes activables directement à embarquer illico dans votre arsenal.",
  },
  {
    icon: '🔗',
    title: 'Coaching',
    color: 'rgb(162,255,44)',
    desc: "Vous bloquez sur la tech ? Nous débarquons avec une équipe de choc en Gen AI & Product prête à vous extirper de n'importe quel pétrin. Plus d'excuses.",
  },
  {
    icon: '🧪',
    title: 'User tests',
    color: '#2aebf5',
    desc: "Attention, messieurs-dames, on change les règles du jeu pour ce hackathon : deux rounds de battle avec les utilisateurs au programme ! On est là pour pimenter les choses et enrichir votre idée avec une expérience utilisateur qui déchire.",
  },
  {
    icon: '🤘',
    title: "Fun & Rock'n Roll",
    color: 'rgb(233,25,15)',
    desc: "On vous réserve quelques surprises mais attendez-vous à une ambiance déjantée et des participants chauds bouillants !",
  },
];

export default function Programme() {
  return (
    <section style={{ padding: '80px 32px', background: 'rgb(8,8,8)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '50px',
              fontWeight: 800,
              lineHeight: '75px',
              color: '#fff',
              marginBottom: '48px',
            }}
          >
            Au programme
          </h2>
        </Reveal>

        {/* 2-column staggered grid matching live site */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div
                style={{
                  background: 'rgb(17,17,17)',
                  border: `2px solid ${item.color}`,
                  borderRadius: '8px',
                  padding: '2.5rem',
                  marginTop: i % 2 === 1 ? '3rem' : '0',
                }}
              >
                {/* Icon */}
                <div style={{ fontSize: '2rem', marginBottom: '1.25rem', lineHeight: 1 }}>
                  {item.icon}
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: AGRANDIR,
                    fontWeight: 800,
                    color: item.color,
                    fontSize: '40px',
                    marginBottom: '1rem',
                    lineHeight: 1.1,
                  }}
                >
                  {item.title}
                </h4>

                {/* Description */}
                <p
                  style={{
                    color: '#fff',
                    fontFamily: OXANIUM,
                    fontSize: '18px',
                    lineHeight: '27px',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
