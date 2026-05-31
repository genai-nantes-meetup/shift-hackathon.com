import Layout from '../layouts/Layout';
import { extractCanonical, extractBreakpointCss, extractSsrCss } from '../lib/framer';
import AgendaBody from '../components/agenda/AgendaBody';
import headStylesRaw from '../framer/agenda.head-styles.html?raw';

const canonical = extractCanonical(headStylesRaw);
const breakpointCss = extractBreakpointCss(headStylesRaw);
const { css: ssrCss, components: ssrCssComponents } = extractSsrCss(headStylesRaw);

const AgendaPage = () => (
  <Layout
    canonical={canonical}
    breakpointCss={breakpointCss}
    ssrCss={ssrCss}
    ssrCssComponents={ssrCssComponents}
  >
    <AgendaBody />
  </Layout>
);

export default AgendaPage;
