import type { FC } from 'react';
import htmlStyle from '../../framer/concept/html-style.css?raw';

import headerHtml from '../../framer/concept/header.html?raw';
import heroHtml from '../../framer/concept/hero.html?raw';
import featuresLargeHtml from '../../framer/concept/features-large.html?raw';
import featuresHtml from '../../framer/concept/features.html?raw';
import galleryHtml from '../../framer/concept/gallery.html?raw';
import footerHtml from '../../framer/concept/footer.html?raw';
import containerHtml from '../../framer/concept/container.html?raw';
import contactHtml from '../../framer/concept/contact.html?raw';

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

export default ConceptBody;
