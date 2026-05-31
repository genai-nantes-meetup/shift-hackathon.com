import Layout from '../layouts/Layout';
import ConceptBody from '../components/concept/ConceptBody';
import canonical from '../framer/concept/canonical.txt?raw';
import breakpointCss from '../framer/concept/breakpoint.css?raw';
import ssrCss from '../framer/concept/ssr.css?raw';
import ssrCssComponents from '../framer/concept/ssr-components.txt?raw';

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
