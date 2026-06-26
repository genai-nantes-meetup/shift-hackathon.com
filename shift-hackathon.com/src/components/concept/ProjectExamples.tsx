import Reveal from '../Reveal';
import { CDN } from '../../data/site';

const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

type Project = {
  name: string;
  img: string;
  probleme: string;
  concept: string;
  features: string[];
};

const PROJECTS: Project[] = [
  {
    name: 'Vinted',
    img: `${CDN}/projects/project-vinted.jpeg`,
    probleme:
      "Sur Vinted, on achète des vêtements sans jamais vraiment savoir s'ils vont nous aller et les photos à plat n'aident pas à se projeter.",
    concept:
      "Une feature intégrée à Vinted qui permet de projeter un vêtement directement sur sa propre photo pour visualiser le rendu réel avant d'acheter.",
    features: [
      "Projection automatique du vêtement sur l'utilisateur",
      'Évaluation du risque de mauvais fit',
    ],
  },
  {
    name: 'Slack',
    img: `${CDN}/projects/project-slack.jpeg`,
    probleme: 'Les équipes perdent un temps monstrueux dans des réunions qui ne servent à rien.',
    concept:
      'Une IA intégrée à Slack qui identifie les réunions inutiles et propose des alternatives asynchrones.',
    features: ['Scoring automatique des meetings', 'Alternative asynchrone générée'],
  },
  {
    name: 'eBay',
    img: `${CDN}/projects/project-ebay.png`,
    probleme:
      'Sur eBay, les objets ont souvent une histoire riche, mais elle est invisible et réduite à un simple prix et quelques photos.',
    concept:
      "Une feature intégrée à eBay qui transforme les annonces en mini-musées en racontant l'histoire, le contexte et la vie probable des objets vendus.",
    features: [
      "Reconstruction automatique de l'histoire de l'objet",
      'Mise en perspective culturelle et temporelle',
    ],
  },
];

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p
        style={{
          fontFamily: AGRANDIR,
          fontSize: 16,
          fontWeight: 800,
          color: '#9ff839',
          textTransform: 'uppercase',
          letterSpacing: '1.6px',
          margin: '0 0 6px',
        }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

export default function ProjectExamples() {
  return (
    <section style={{ padding: '80px 32px', background: '#000' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: AGRANDIR,
              fontSize: '50px',
              fontWeight: 800,
              lineHeight: 1,
              color: '#fff',
              textAlign: 'center',
              margin: '0 0 64px',
            }}
          >
            Exemples de projets à réaliser
          </h2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={0.05}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                  gap: 48,
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ flex: '1 1 420px', minWidth: 280 }}>
                  <h3
                    style={{
                      fontFamily: AGRANDIR,
                      fontSize: 40,
                      fontWeight: 800,
                      color: '#fff',
                      margin: '0 0 24px',
                    }}
                  >
                    {p.name}
                  </h3>
                  <Block label="Problème">
                    <p style={paraStyle}>{p.probleme}</p>
                  </Block>
                  <Block label="Concept">
                    <p style={paraStyle}>{p.concept}</p>
                  </Block>
                  <Block label="Features Clés">
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {p.features.map((f) => (
                        <li
                          key={f}
                          style={{ ...paraStyle, display: 'flex', gap: 8, marginBottom: 6 }}
                        >
                          <span style={{ color: '#9ff839', flexShrink: 0 }}>•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                </div>
                <div style={{ flex: '1 1 480px', minWidth: 280 }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: '100%',
                      aspectRatio: '16 / 9',
                      objectFit: 'cover',
                      borderRadius: 8,
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const paraStyle: React.CSSProperties = {
  fontFamily: OXANIUM,
  fontSize: 18,
  lineHeight: '27px',
  color: 'rgba(255,255,255,0.85)',
  margin: 0,
};
