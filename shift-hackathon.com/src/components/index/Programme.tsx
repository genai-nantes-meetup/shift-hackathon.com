import Reveal from '../Reveal';

const ITEMS = [
  { icon: '🎤', title: 'Confs\'', desc: 'Des conférences croustillantes sur la Gen AI et le Product que vous allez bouillir d\'envie d\'activer illico dans votre arsenal.' },
  { icon: '🧑‍💻', title: 'Coaching', desc: 'Une équipe de choc en Gen AI & Product prête à vous extirper de n\'importe quel pétrin. Plus d\'excuses.' },
  { icon: '🧪', title: 'User tests', desc: 'Deux rounds de battle avec des utilisateurs au programme pour enrichir votre produit avec une UX qui déchire.' },
  { icon: '🤘', title: 'Fun & Rock\'n Roll', desc: 'Une ambiance déjantée, des participants chauds bouillants, et quelques surprises au programme !' },
];

export default function Programme() {
  return (
    <section style={{ padding: '5rem 2rem', background: '#090909' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Agrandir', 'Barlow', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem' }}>
            Au <span style={{ color: '#fae01b' }}>programme</span>
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px', padding: '2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 900, color: '#fff', fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
