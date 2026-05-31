import html from '../../framer/index/intro-section.html?raw';

const IndexIntroSection = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default IndexIntroSection;
