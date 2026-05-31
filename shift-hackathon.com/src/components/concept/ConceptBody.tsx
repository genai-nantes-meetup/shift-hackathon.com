import type { FC } from 'react';
import navScript from '../../framer/shared/nav-script.js?raw';
import animatorScript from '../../framer/shared/animator-script.js?raw';
import appearAnimations from '../../framer/concept/appear-animations.json?raw';
import breakpoints from '../../framer/concept/breakpoints.json?raw';
import appearRunner from '../../framer/shared/appear-runner.js?raw';
import preloadLinks from '../../framer/concept/preload-links.html?raw';
import htmlStyle from '../../framer/concept/html-style.css?raw';

import headerHtml from '../../framer/concept/header.html?raw';
import heroHtml from '../../framer/concept/hero.html?raw';
import featuresLargeHtml from '../../framer/concept/features-large.html?raw';
import featuresHtml from '../../framer/concept/features.html?raw';
import galleryHtml from '../../framer/concept/gallery.html?raw';
import footerHtml from '../../framer/concept/footer.html?raw';
import containerHtml from '../../framer/concept/container.html?raw';
import contactHtml from '../../framer/concept/contact.html?raw';

const HYDRATE_V2 =
  '{"routeId":"qP_c96aKH","localeId":"default","breakpoints":[{"hash":"9brr6f","mediaQuery":"(min-width: 1240px)"},{"hash":"pmzee1","mediaQuery":"(min-width: 768px) and (max-width: 1239.98px)"},{"hash":"17j2mkx","mediaQuery":"(max-width: 767.98px)"}]}';
const ROOT_CLASS =
  'framer-0Sc7d framer-h4WkX framer-WkFoA framer-Av4mF framer-Dk0KU framer-9brr6f';

const rootHtml =
  headerHtml +
  heroHtml +
  featuresLargeHtml +
  featuresHtml +
  galleryHtml +
  footerHtml +
  containerHtml +
  contactHtml +
  '<div id="overlay"></div>';

const ConceptBody: FC = () => (
  <>
    <div
      id="main"
      data-framer-hydrate-v2={HYDRATE_V2}
      data-framer-ssr-released-at="2026-05-12T14:28:04.547Z"
      data-framer-page-optimized-at="2026-05-16T15:11:55.246Z"
      data-framer-generated-page=""
    >
      <style data-framer-html-style dangerouslySetInnerHTML={{ __html: htmlStyle }} />
      <div
        data-framer-root
        className={ROOT_CLASS}
        style={{ minHeight: '100vh', width: 'auto' }}
        dangerouslySetInnerHTML={{ __html: rootHtml }}
      />
    </div>
    <script dangerouslySetInnerHTML={{ __html: navScript }} />
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
    <div dangerouslySetInnerHTML={{ __html: preloadLinks }} />
  </>
);

export default ConceptBody;
