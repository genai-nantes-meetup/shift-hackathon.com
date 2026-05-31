import Layout from '../layouts/Layout';
import { extractCanonical, extractBreakpointCss, extractSsrCss } from '../lib/framer';
import IndexBody from '../components/index/IndexBody';
import headStylesRaw from '../framer/index.head-styles.html?raw';

const canonical = extractCanonical(headStylesRaw);
const breakpointCss = extractBreakpointCss(headStylesRaw);
const { css: ssrCss, components: ssrCssComponents } = extractSsrCss(headStylesRaw);

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
