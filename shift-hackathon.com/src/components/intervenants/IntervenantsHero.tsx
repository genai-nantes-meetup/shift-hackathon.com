import html from '../../framer/intervenants/hero.html?raw';

const IntervenantsHero = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default IntervenantsHero;
