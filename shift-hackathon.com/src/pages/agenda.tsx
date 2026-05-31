import Layout from '../layouts/Layout';
import AgendaBody from '../components/agenda/AgendaBody';
import canonical from '../framer/agenda/canonical.txt?raw';
import breakpointCss from '../framer/agenda/breakpoint.css?raw';
import ssrCss from '../framer/agenda/ssr.css?raw';
import ssrCssComponents from '../framer/agenda/ssr-components.txt?raw';

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
