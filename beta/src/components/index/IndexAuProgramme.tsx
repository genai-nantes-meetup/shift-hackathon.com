import html from '../../framer/index/au-programme.html?raw';

const IndexAuProgramme = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default IndexAuProgramme;
