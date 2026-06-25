import Reveal from '../Reveal';

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
    <section className="topics">
      <div className="topics__inner">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <div
              className={`topics__card ${i % 2 === 1 ? 'topics__card--offset' : ''}`}
              style={{
                border: `8px solid ${card.color}`,
                color: card.color,
              }}
            >
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
