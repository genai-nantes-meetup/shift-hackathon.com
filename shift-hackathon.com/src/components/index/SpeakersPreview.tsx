import Reveal from '../Reveal';
import { SPEAKERS } from '../../data/site';

export default function SpeakersPreview() {
  const preview = SPEAKERS.slice(0, 6);
  return (
    <section className="speakers">
      <div className="speakers__inner">
        <Reveal>
          <h2 className="speakers__title">Ils seront présents en 2026</h2>
        </Reveal>
        <Reveal>
          <div className="speakers__grid">
            {preview.map((s) => (
              <div key={s.name} className="speakers__card">
                <img src={s.img} alt={s.name} loading="lazy" />
                <div>
                  <h6>{s.name}</h6>
                  {s.roles.map((r) => (
                    <p key={r}>{r}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="speakers__see-all">
            <a href="/intervenants" className="cta-primary">
              Voir tous les intervenants →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
