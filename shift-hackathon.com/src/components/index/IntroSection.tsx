import Reveal from '../Reveal';

const PARAGRAPHS = [
  "Shift, c'est LE hackathon Gen AI de la place nantaise. Après 2 éditions hautes en couleur, nous revenons sous le pavillon noir : toi, l'iconoclastic hacker, toi le designer alchemist, ou toi le product shaper, à cette édition 2026, tu vas te RÉ-GA-LER.",
  "Le concept de cette année, ça va être de hacker ton outil préféré. Tu le trouves cool mais il ne répond pas exactement à ton usage parce qu'il lui manque une fonctionnalité clé ou parce que tu n'en es pas vraiment le “user type” ? Viens proposer ton hack pour développer la feature qui te ferait kiffer !",
  "Shift, c'est 48H de pure prod pour créer des produits Gen AI à en faire rougir les techos de la Silicon Valley.",
  "On te fournit tout : le cadre, les outils, et les conseils des meilleurs experts de la tech et de la Gen AI.",
  "Prêt à faire tomber les barrières ? Inscris-toi et embarque pour une aventure inoubliable !",
];

const MOSAIC = [
  { src: '/assets/images/gallery/gallery-speaker-session.jpg', alt: 'Speaker session' },
  { src: '/assets/images/gallery/gallery-group-discussion.jpg', alt: 'Group discussion' },
  { src: '/assets/images/gallery/gallery-speaker.jpg', alt: 'Speaker' },
  { src: '/assets/images/gallery/gallery-meeting.jpg', alt: 'Meeting' },
];

export default function IntroSection() {
  return (
    <section className="intro">
      <div className="intro__inner">
        <Reveal>
          <h2 className="intro__title">Une expérience inédite</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="intro__body">
            {PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <a href="/concept-2026" className="intro__cta">
            En savoir plus sur le concept
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="intro__mosaic">
          {MOSAIC.map((m) => (
            <img key={m.src} src={m.src} alt={m.alt} loading="lazy" />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
