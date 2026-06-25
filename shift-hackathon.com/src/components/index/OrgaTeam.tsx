import Reveal from '../Reveal';
import { ORGA_TEAM } from '../../data/site';

export default function OrgaTeam() {
  return (
    <section className="orga">
      <div className="orga__inner">
        <Reveal delay={0.1}>
          <div className="orga__grid">
            {ORGA_TEAM.map((m) => (
              <div key={m.name} className="orga__card">
                <img src={m.img} alt={m.name} loading="lazy" />
                <div>
                  <h6>{m.name}</h6>
                  {m.roles.map((r) => (
                    <p key={r}>{r}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
