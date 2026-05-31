import Reveal from '../Reveal';

const EXAMPLES = [
  {
    tool: 'Vinted', accent: '#2aebf5',
    problem: "Les photos à plat n'aident pas à se projeter — on achète sans savoir si les vêtements vont nous aller.",
    concept: 'Une feature qui projette le vêtement directement sur ta propre photo pour visualiser le rendu réel.',
    features: ['Projection automatique du vêtement', 'Évaluation du risque de mauvais fit'],
  },
  {
    tool: 'Slack', accent: '#fae01b',
    problem: 'Les équipes perdent un temps monstrueux dans des réunions qui ne servent à rien.',
    concept: 'Une IA intégrée à Slack qui identifie les réunions inutiles et propose des alternatives asynchrones.',
    features: ['Scoring automatique des meetings', 'Alternative asynchrone générée'],
  },
  {
    tool: 'eBay', accent: '#f75787',
    problem: "Les objets ont souvent une histoire riche, mais elle est invisible — réduite à un prix et quelques photos.",
    concept: "Une feature qui transforme les annonces en mini-musées racontant l'histoire des objets vendus.",
    features: ["Reconstruction automatique de l'histoire", 'Mise en perspective culturelle et temporelle'],
  },
];

export default function ProjectExamples() {
  return (
    <section style={{ padding: '5rem 2rem', background: '#080510' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#fff', textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem' }}>
            Exemples de projets à réaliser
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {EXAMPLES.map((ex, i) => (
            <Reveal key={ex.tool} delay={i * 0.1}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${ex.accent}33`, borderTop: `3px solid ${ex.accent}`, borderRadius: '4px', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 900, color: ex.accent, fontSize: '1.3rem', marginBottom: '1rem', textTransform: 'uppercase' }}>{ex.tool}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Barlow, sans-serif', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Problème :</strong> {ex.problem}</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{ex.concept}</p>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                  {ex.features.map((f) => (
                    <li key={f} style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Barlow, sans-serif', fontSize: '0.8rem', padding: '0.2rem 0', display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: ex.accent }}>›</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
