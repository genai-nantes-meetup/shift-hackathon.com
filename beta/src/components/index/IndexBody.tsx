import type { FC } from 'react';
import htmlStyle from '../../framer/index/html-style.css?raw';

import headerHtml from '../../framer/index/header.html?raw';
import heroHtml from '../../framer/index/hero.html?raw';
import introSectionHtml from '../../framer/index/intro-section.html?raw';
import containerHtml from '../../framer/index/container.html?raw';
import auProgrammeHtml from '../../framer/index/au-programme.html?raw';
import templatesHtml from '../../framer/index/templates.html?raw';
import testimonials3Html from '../../framer/index/testimonials-3.html?raw';
import ticketPricingHtml from '../../framer/index/ticket-pricing.html?raw';
import bannerHtml from '../../framer/index/banner.html?raw';
import pastGlimpseHtml from '../../framer/index/past-glimpse.html?raw';
import sponsorsHtml from '../../framer/index/sponsors.html?raw';
import grid1Html from '../../framer/index/grid-1.html?raw';
import contactHtml from '../../framer/index/contact.html?raw';

const ROOT_CLASS =
  'framer-LCUx4 framer-h4WkX framer-Av4mF framer-WkFoA framer-zKk1p framer-8pImC framer-N6DDL framer-qY7Gj framer-Dk0KU framer-uosayu';

const rootHtml = headerHtml + heroHtml + '<div id="overlay"></div>';

const outerHtml =
  introSectionHtml +
  containerHtml +
  auProgrammeHtml +
  templatesHtml +
  testimonials3Html +
  ticketPricingHtml +
  bannerHtml +
  pastGlimpseHtml +
  sponsorsHtml +
  grid1Html +
  contactHtml;

const IndexBody: FC = () => (
  <>
    <div id="main">
      <style data-framer-html-style dangerouslySetInnerHTML={{ __html: htmlStyle }} />
      <div
        data-framer-root
        className={ROOT_CLASS}
        style={{ minHeight: '100vh', width: 'auto' }}
        dangerouslySetInnerHTML={{ __html: rootHtml }}
      />
    </div>
    <div dangerouslySetInnerHTML={{ __html: outerHtml }} />
  </>
);

export default IndexBody;
