import { motion } from 'motion/react';
import Reveal from '../Reveal';
import { ORGA_TEAM } from '../../data/team';

// Cards are laid out on a 3-column grid; group the reveal delay by row so each
// row fades in one after another on scroll.
const COLS = 3;

export default function OrgaTeam() {
  return (
    <section className="orga">
      <div className="orga__inner">
        <Reveal>
          <h2 className="orga__title">La team orga de choc</h2>
        </Reveal>
        <div className="orga__grid">
          {ORGA_TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              className="orga__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: Math.floor(i / COLS) * 0.15,
              }}
            >
              <img src={m.img} alt={m.name} loading="lazy" />
              <div>
                <h6>{m.name}</h6>
                {m.roles.map((r) => (
                  <p key={r}>{r}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
