import Layout from '../layouts/Layout';
import IndexBody from '../components/index/IndexBody';
import canonical from '../framer/index/canonical.txt?raw';
import breakpointCss from '../framer/index/breakpoint.css?raw';
import ssrCss from '../framer/index/ssr.css?raw';
import ssrCssComponents from '../framer/index/ssr-components.txt?raw';

const IndexPage = () => (
  <Layout
    canonical={canonical}
    breakpointCss={breakpointCss}
    ssrCss={ssrCss}
    ssrCssComponents={ssrCssComponents}
  >
    <IndexBody />
  </Layout>
);

export default IndexPage;
