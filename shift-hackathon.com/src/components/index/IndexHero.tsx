import html from '../../framer/index/hero.html?raw';

const IndexHero = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

export default IndexHero;
