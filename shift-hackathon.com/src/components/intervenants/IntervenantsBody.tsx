import type { FC } from 'react';
import IntervenantsHeader from './IntervenantsHeader';
import IntervenantsHero from './IntervenantsHero';
import IntervenantsTeam from './IntervenantsTeam';
import IntervenantsFooter from './IntervenantsFooter';
import IntervenantsContact from './IntervenantsContact';

import navScript from '../../framer/shared/nav-script.js?raw';
import animatorScript from '../../framer/shared/animator-script.js?raw';
import appearAnimations from '../../framer/intervenants/appear-animations.json?raw';
import breakpoints from '../../framer/intervenants/breakpoints.json?raw';
import appearRunner from '../../framer/shared/appear-runner.js?raw';
import preloadLinks from '../../framer/intervenants/preload-links.html?raw';
import htmlStyle from '../../framer/intervenants/html-style.css?raw';

const HYDRATE_V2 =
  '{"routeId":"KmjIc40Lu","localeId":"default","breakpoints":[{"hash":"i1521","mediaQuery":"(min-width: 1240px)"},{"hash":"tbx75b","mediaQuery":"(min-width: 768px) and (max-width: 1239.98px)"},{"hash":"1yhlmg7","mediaQuery":"(max-width: 767.98px)"}]}';
const ROOT_CLASS = 'framer-l8i7n framer-h4WkX framer-Av4mF framer-i1521';

const IntervenantsBody: FC = () => (
  <>
    <div
      id="main"
      data-framer-hydrate-v2={HYDRATE_V2}
      data-framer-ssr-released-at="2026-05-12T14:28:04.547Z"
      data-framer-page-optimized-at="2026-05-16T15:11:55.269Z"
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
        <IntervenantsHeader />
        <IntervenantsHero />
        <IntervenantsTeam />
        <IntervenantsFooter />
        <IntervenantsContact />
        <div id="overlay" />
      </div>
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

export default IntervenantsBody;
