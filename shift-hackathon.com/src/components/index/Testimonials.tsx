const AGRANDIR = "'Agrandir Grand Heavy', sans-serif";
const OXANIUM = 'Oxanium, sans-serif';

const VIDEOS = [
  {
    id: '5WpRugDrfvY',
    title: 'Aftermovie 2025',
    description: "Plongez dans l'ambiance de la dernière édition pour avoir un aperçu de l'expérience !",
    autoplay: true,
  },
  {
    id: '9hKVPRiJh98',
    title: 'Projet Vainqueur 2025',
    description:
      "Une extension navigateur qui rend le texte sur n'importe quel site accessible aux utilisateurs dyslexiques.",
    autoplay: false,
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '37px 100px',
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px',
        overflow: 'hidden',
      }}
    >
      <h4
        style={{
          fontFamily: AGRANDIR,
          fontSize: '40px',
          fontWeight: 400,
          lineHeight: '1.1em',
          color: 'rgb(255,255,255)',
          margin: 0,
          alignSelf: 'flex-start',
        }}
      >
        Révivez les éditions précédentes
      </h4>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '60px',
          maxWidth: '1000px',
          width: '100%',
        }}
      >
        {VIDEOS.map((v) => (
          <div
            key={v.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              flex: '1 0 0',
            }}
          >
            <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title={v.title}
                allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                src={`https://www.youtube.com/embed/${v.id}?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=${v.autoplay ? 1 : 0}${v.autoplay ? '&mute=1' : ''}`}
                frameBorder="0"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h6
                style={{
                  fontFamily: AGRANDIR,
                  fontSize: '24px',
                  fontWeight: 400,
                  color: 'rgb(255,255,255)',
                  margin: 0,
                }}
              >
                {v.title}
              </h6>
              <p
                style={{
                  fontFamily: OXANIUM,
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '27px',
                  color: 'rgb(255,255,255)',
                  margin: 0,
                }}
              >
                {v.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
