import { VIDEOS } from '../../data/videos';
import { EDITION } from '../../data/edition';

export default function Testimonials() {
  return (
    <section className="past">
      <div className="past__inner">
        <h4 className="past__title">Revivez les éditions précédentes</h4>
        <div className="past__grid">
          {VIDEOS.map((v) => (
            <div key={v.id} className="past__card">
              <div className="past__video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=${v.autoplay ? 1 : 0}${v.autoplay ? '&mute=1' : ''}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h5>{v.title}</h5>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: 'Oxanium, sans-serif',
            fontStyle: 'italic',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            margin: 0,
          }}
        >
          Pour explorer les projets des dernières éditions, c’est juste ici :{' '}
          <a
            href="https://taap.it/playlistshift"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: EDITION.dominantColor, textDecoration: 'none' }}
          >
            @playlistSHIFT
          </a>
        </p>
      </div>
    </section>
  );
}
