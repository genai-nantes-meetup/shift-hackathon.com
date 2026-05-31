import html from '../../framer/index/banner.html?raw';

const IndexBanner = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

export default IndexBanner;
