import Layout from '../layouts/Layout';
import { extractCanonical, extractBreakpointCss, extractSsrCss } from '../lib/framer';
import ConceptBody from '../components/concept/ConceptBody';
import headStylesRaw from '../framer/concept.head-styles.html?raw';

const canonical = extractCanonical(headStylesRaw);
const breakpointCss = extractBreakpointCss(headStylesRaw);
const { css: ssrCss, components: ssrCssComponents } = extractSsrCss(headStylesRaw);

const ConceptPage = () => (
  <Layout
    canonical={canonical}
    breakpointCss={breakpointCss}
    ssrCss={ssrCss}
    ssrCssComponents={ssrCssComponents}
  >
    <ConceptBody />
  </Layout>
);

export default ConceptPage;
