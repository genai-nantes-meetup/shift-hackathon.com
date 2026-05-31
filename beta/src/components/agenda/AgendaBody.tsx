import htmlStyle from '../../framer/agenda/html-style.css?raw';

import headerHtml from '../../framer/agenda/header.html?raw';
import heroHtml from '../../framer/agenda/hero.html?raw';
import scheduleHtml from '../../framer/agenda/schedule.html?raw';
import footerHtml from '../../framer/agenda/footer.html?raw';
import contactHtml from '../../framer/agenda/contact.html?raw';

const ROOT_CLASS = 'framer-3sILa framer-h4WkX framer-Av4mF framer-1vlrlm4';

const rootHtml =
  headerHtml + heroHtml + scheduleHtml + footerHtml + contactHtml + '<div id="overlay"></div>';

const AgendaBody = () => (
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

export default AgendaBody;
