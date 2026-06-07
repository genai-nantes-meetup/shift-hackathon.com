import Reveal from '../Reveal';
import { TESTIMONIALS } from '../../data/site';

export default function TestimonialsList() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <Reveal>
          <h2 className="testimonials__title">Témoignages</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="testimonials__masonry">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonials__card">
                <div className="testimonials__card-head">
                  <img src={t.img} alt={t.name} loading="lazy" />
                  <div>
                    <p className="testimonials__name">{t.name}</p>
                    <p className="testimonials__role">{t.role}</p>
                  </div>
                </div>
                <p className="testimonials__quote">{t.quote}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
