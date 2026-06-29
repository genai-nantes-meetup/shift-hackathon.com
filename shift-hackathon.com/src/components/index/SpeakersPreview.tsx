import Reveal from '../Reveal';
import { SPEAKERS } from '../../data/edition_speakers';
import { EDITION } from '../../data/edition';
import { speakerSlug } from '../../lib/seo';

export default function SpeakersPreview() {
  const preview = SPEAKERS.slice(0, 6);
  return (
    <section className="speakers">
      <div className="speakers__inner">
        <Reveal>
          <h2 className="speakers__title">Ils seront présents en {EDITION.year}</h2>
        </Reveal>
        <Reveal>
          <div className="speakers__grid">
            {preview.map((s) => (
              <a
                key={s.name}
                href={`/intervenants/${speakerSlug(s)}`}
                className="speakers__card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <img src={s.img} alt={`${s.name}, ${s.roles.join(' · ')}`} loading="lazy" />
                <div>
                  <p className="speakers__name">{s.name}</p>
                  {s.roles.map((r) => (
                    <p key={r}>{r}</p>
                  ))}
                </div>
              </a>
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
