const VIDEOS = [
  {
    id: '5WpRugDrfvY',
    title: 'Aftermovie 2025',
    description:
      "Plongez dans l'ambiance de la dernière édition pour avoir un aperçu de l'expérience !",
    autoplay: true,
  },
  {
    id: '9hKVPRiJh98',
    title: 'Projet Vainqueur 2025',
    description:
      "Une extension navigateur qui rend le texte sur n'importe quel site accessible aux utilisateurs dyslexiques.",
    autoplay: false,
  },
  {
    id: 'Vi69XNKCSVw',
    title: 'Aftermovie 2024',
    description: "Plongez dans l'ambiance de l'édition 2024 pour avoir un aperçu de l'expérience !",
    autoplay: false,
  },
  {
    id: 'ZQ2QHJ4kOkE',
    title: 'Interviews 2024',
    description: "Découvrez ce qu'on pensé les différents participants de l'édition 2024.",
    autoplay: false,
  },
];

export default function Testimonials() {
  return (
    <section className="past">
      <div className="past__inner">
        <h4 className="past__title">Révivez les éditions précédentes</h4>
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
      </div>
    </section>
  );
}
