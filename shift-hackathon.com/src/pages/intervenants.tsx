import Layout from '../layouts/Layout';
import IntervenantsBody from '../components/intervenants/IntervenantsBody';
import canonical from '../framer/intervenants/canonical.txt?raw';
import breakpointCss from '../framer/intervenants/breakpoint.css?raw';
import ssrCss from '../framer/intervenants/ssr.css?raw';
import ssrCssComponents from '../framer/intervenants/ssr-components.txt?raw';

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
