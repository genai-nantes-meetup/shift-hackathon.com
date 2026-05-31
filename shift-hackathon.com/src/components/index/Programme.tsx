import Reveal from '../Reveal';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

const ITEMS = [
  {
    title: "Confs'",
    color: 'rgb(245,183,0)',
    desc: "Des conférences croustillantes sur la Gen AI et le Product que vous allez bouillir d'envie d'activer illico dans votre arsenal.",
  },
  {
    title: 'Coaching',
    color: '#2aebf5',
    desc: "Une équipe de choc en Gen AI & Product prête à vous extirper de n'importe quel pétrin. Plus d'excuses.",
  },
  {
    title: 'User tests',
    color: '#9ff839',
    desc: 'Deux rounds de battle avec des utilisateurs au programme pour enrichir votre produit avec une UX qui déchire.',
  },
  {
    title: "Fun & Rock'n Roll",
    color: 'rgb(233,25,15)',
    desc: 'Une ambiance déjantée, des participants chauds bouillants, et quelques surprises au programme !',
  },
];

export default function Programme() {
  return (
    <section style={{ padding: '5rem 2rem', background: '#080808' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h4
            style={{
              fontFamily: AGRANDIR,
              fontSize: '1.875rem',
              fontWeight: 400,
              color: '#fff',
              textAlign: 'center',
              marginBottom: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            Au programme
          </h4>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div
                style={{
                  background: '#080808',
                  padding: '2.5rem',
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <h4
                  style={{
                    fontFamily: AGRANDIR,
                    fontWeight: 800,
                    color: item.color,
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    lineHeight: 1.1,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.65)',
                    fontFamily: OXANIUM,
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
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
