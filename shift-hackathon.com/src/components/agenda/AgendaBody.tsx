import AgendaContact from './AgendaContact';
import AgendaFooter from './AgendaFooter';
import AgendaHeader from './AgendaHeader';
import AgendaHero from './AgendaHero';
import AgendaSchedule from './AgendaSchedule';

import navScript from '../../framer/shared/nav-script.js?raw';
import variantScript from '../../framer/shared/variant-script.js?raw';
import animatorScript from '../../framer/shared/animator-script.js?raw';
import appearAnimations from '../../framer/agenda/appear-animations.json?raw';
import breakpoints from '../../framer/agenda/breakpoints.json?raw';
import appearRunner from '../../framer/shared/appear-runner.js?raw';
import nodeenv from '../../framer/shared/nodeenv.js?raw';
import preloadLinks from '../../framer/agenda/preload-links.html?raw';
import htmlStyle from '../../framer/agenda/html-style.css?raw';

const HYDRATE_V2 =
  '{"routeId":"uli2c4jR6","localeId":"default","breakpoints":[{"hash":"1vlrlm4","mediaQuery":"(min-width: 1240px)"},{"hash":"1kc20pd","mediaQuery":"(min-width: 768px) and (max-width: 1239.98px)"},{"hash":"14erxob","mediaQuery":"(max-width: 767.98px)"}]}';
const ROOT_CLASS = 'framer-3sILa framer-h4WkX framer-Av4mF framer-1vlrlm4';

const AgendaBody = () => (
  <>
    <div
      id="main"
      data-framer-hydrate-v2={HYDRATE_V2}
      data-framer-ssr-released-at="2026-05-12T14:28:04.547Z"
      data-framer-page-optimized-at="2026-05-16T15:11:55.192Z"
      data-framer-generated-page=""
    >
      <style data-framer-html-style dangerouslySetInnerHTML={{ __html: htmlStyle }} />
      <div data-framer-root className={ROOT_CLASS} style={{ minHeight: '100vh', width: 'auto' }}>
        <AgendaHeader />
        <AgendaHero />
        <AgendaSchedule />
        <AgendaFooter />
        <AgendaContact />
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
    <script data-framer-appear-animation="reduce" dangerouslySetInnerHTML={{ __html: appearRunner }} />
    <script dangerouslySetInnerHTML={{ __html: nodeenv }} />
    <div dangerouslySetInnerHTML={{ __html: preloadLinks }} />
  </>
);

export default AgendaBody;
