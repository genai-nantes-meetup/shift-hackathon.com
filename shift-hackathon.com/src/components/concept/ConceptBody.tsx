import type { FC } from 'react';
import ConceptHeader from './ConceptHeader';
import ConceptHero from './ConceptHero';
import ConceptFeaturesLarge from './ConceptFeaturesLarge';
import ConceptFeatures from './ConceptFeatures';
import ConceptGallery from './ConceptGallery';
import ConceptFooter from './ConceptFooter';
import ConceptContainer from './ConceptContainer';
import ConceptContact from './ConceptContact';

import navScript from '../../framer/shared/nav-script.js?raw';
import variantScript from '../../framer/shared/variant-script.js?raw';
import animatorScript from '../../framer/shared/animator-script.js?raw';
import appearAnimations from '../../framer/concept/appear-animations.json?raw';
import breakpoints from '../../framer/concept/breakpoints.json?raw';
import appearRunner from '../../framer/shared/appear-runner.js?raw';
import nodeenv from '../../framer/shared/nodeenv.js?raw';
import preloadLinks from '../../framer/concept/preload-links.html?raw';
import htmlStyle from '../../framer/concept/html-style.css?raw';

const HYDRATE_V2 =
  '{"routeId":"qP_c96aKH","localeId":"default","breakpoints":[{"hash":"9brr6f","mediaQuery":"(min-width: 1240px)"},{"hash":"pmzee1","mediaQuery":"(min-width: 768px) and (max-width: 1239.98px)"},{"hash":"17j2mkx","mediaQuery":"(max-width: 767.98px)"}]}';
const ROOT_CLASS =
  'framer-0Sc7d framer-h4WkX framer-WkFoA framer-Av4mF framer-Dk0KU framer-9brr6f';

const ConceptBody: FC = () => (
  <>
    <div
      id="main"
      data-framer-hydrate-v2={HYDRATE_V2}
      data-framer-ssr-released-at="2026-05-12T14:28:04.547Z"
      data-framer-page-optimized-at="2026-05-16T15:11:55.246Z"
      data-framer-generated-page=""
    >
      <style
        data-framer-html-style
        dangerouslySetInnerHTML={{ __html: htmlStyle }}
      />
      <div
        data-framer-root
        className={ROOT_CLASS}
        style={{ minHeight: '100vh', width: 'auto' }}
      >
        <ConceptHeader />
        <ConceptHero />
        <ConceptFeaturesLarge />
        <ConceptFeatures />
        <ConceptGallery />
        <ConceptFooter />
        <ConceptContainer />
        <ConceptContact />
        <div id="overlay" />
      </div>
    </div>
    <script dangerouslySetInnerHTML={{ __html: navScript }} />
    <script dangerouslySetInnerHTML={{ __html: variantScript }} />
    <script dangerouslySetInnerHTML={{ __html: animatorScript }} />
    <script
      type="framer/appear"
      id="__framer__appearAnimationsContent"
      dangerouslySetInnerHTML={{ __html: appearAnimations }}
    />
    <script
      type="framer/appear"
      id="__framer__breakpoints"
      dangerouslySetInnerHTML={{ __html: breakpoints }}
    />
    <script
      data-framer-appear-animation="reduce"
      dangerouslySetInnerHTML={{ __html: appearRunner }}
    />
    <script dangerouslySetInnerHTML={{ __html: nodeenv }} />
    <div dangerouslySetInnerHTML={{ __html: preloadLinks }} />
  </>
);

export default ConceptBody;
