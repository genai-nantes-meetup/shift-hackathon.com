import html from '../../framer/agenda/hero.html?raw';

const AgendaHero = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

export default AgendaHero;
