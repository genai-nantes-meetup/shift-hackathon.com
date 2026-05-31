import type { FC } from 'react';
import htmlStyle from '../../framer/intervenants/html-style.css?raw';

import headerHtml from '../../framer/intervenants/header.html?raw';
import heroHtml from '../../framer/intervenants/hero.html?raw';
import teamHtml from '../../framer/intervenants/team.html?raw';
import footerHtml from '../../framer/intervenants/footer.html?raw';
import contactHtml from '../../framer/intervenants/contact.html?raw';

const ROOT_CLASS = 'framer-l8i7n framer-h4WkX framer-Av4mF framer-i1521';

const rootHtml =
  headerHtml + heroHtml + teamHtml + footerHtml + contactHtml + '<div id="overlay"></div>';

const IntervenantsBody: FC = () => (
  <div id="main">
    <style data-framer-html-style dangerouslySetInnerHTML={{ __html: htmlStyle }} />
    <div
      data-framer-root
      className={ROOT_CLASS}
      style={{ minHeight: '100vh', width: 'auto' }}
      dangerouslySetInnerHTML={{ __html: rootHtml }}
    />
  </div>
);

export default IntervenantsBody;
