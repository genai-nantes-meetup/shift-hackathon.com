import html from '../../framer/index/templates.html?raw';

const IndexTemplates = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

export default IndexTemplates;
