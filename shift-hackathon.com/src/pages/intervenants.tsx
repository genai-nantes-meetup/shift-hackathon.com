import Layout from '../layouts/Layout';
import { extractCanonical, extractBreakpointCss, extractSsrCss } from '../lib/framer';
import IntervenantsBody from '../components/intervenants/IntervenantsBody';
import headStylesRaw from '../framer/intervenants.head-styles.html?raw';

const canonical = extractCanonical(headStylesRaw);
const breakpointCss = extractBreakpointCss(headStylesRaw);
const { css: ssrCss, components: ssrCssComponents } = extractSsrCss(headStylesRaw);

const IntervenantsPage = () => (
  <Layout
    canonical={canonical}
    breakpointCss={breakpointCss}
    ssrCss={ssrCss}
    ssrCssComponents={ssrCssComponents}
  >
    <IntervenantsBody />
  </Layout>
);

export default IntervenantsPage;
