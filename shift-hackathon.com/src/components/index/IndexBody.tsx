import type { FC } from 'react';
import IndexHeader from './IndexHeader';
import IndexHero from './IndexHero';
import IndexIntroSection from './IndexIntroSection';
import IndexContainer from './IndexContainer';
import IndexAuProgramme from './IndexAuProgramme';
import IndexTemplates from './IndexTemplates';
import IndexTestimonials3 from './IndexTestimonials3';
import IndexTicketPricing from './IndexTicketPricing';
import IndexBanner from './IndexBanner';
import IndexPastGlimpse from './IndexPastGlimpse';
import IndexSponsors from './IndexSponsors';
import IndexGrid1 from './IndexGrid1';
import IndexContact from './IndexContact';

import navScript from '../../framer/shared/nav-script.js?raw';
import animatorScript from '../../framer/shared/animator-script.js?raw';
import appearAnimations from '../../framer/index/appear-animations.json?raw';
import breakpoints from '../../framer/index/breakpoints.json?raw';
import appearRunner from '../../framer/shared/appear-runner.js?raw';
import preloadLinks from '../../framer/index/preload-links.html?raw';
import htmlStyle from '../../framer/index/html-style.css?raw';

const HYDRATE_V2 =
  '{"routeId":"HCW6Aki3T","localeId":"default","breakpoints":[{"hash":"uosayu","mediaQuery":"(min-width: 1240px)"},{"hash":"1pmeis7","mediaQuery":"(min-width: 768px) and (max-width: 1239.98px)"},{"hash":"hn3c4o","mediaQuery":"(max-width: 767.98px)"}]}';
const ROOT_CLASS =
  'framer-LCUx4 framer-h4WkX framer-Av4mF framer-WkFoA framer-zKk1p framer-8pImC framer-N6DDL framer-qY7Gj framer-Dk0KU framer-uosayu';

const IndexBody: FC = () => (
  <>
    <div
      id="main"
      data-framer-hydrate-v2={HYDRATE_V2}
      data-framer-ssr-released-at="2026-05-12T14:28:04.547Z"
      data-framer-page-optimized-at="2026-05-16T15:11:55.383Z"
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
        <IndexHeader />
        <IndexHero />
        <div id="overlay" />
      </div>
    </div>
    <IndexIntroSection />
    <IndexContainer />
    <IndexAuProgramme />
    <IndexTemplates />
    <IndexTestimonials3 />
    <IndexTicketPricing />
    <IndexBanner />
    <IndexPastGlimpse />
    <IndexSponsors />
    <IndexGrid1 />
    <IndexContact />
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

export default IndexBody;
