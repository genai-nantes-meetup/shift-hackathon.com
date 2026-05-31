import type { FC } from 'react';
import fontCssRaw from '../framer/font-css.html?raw';
import { extractFontCss } from '../lib/framer';

const fontCss = extractFontCss(fontCssRaw);

const GTM_ID = 'GTM-NQ2DKKPD';
const GTAG_ID = 'G-377KFTGYHV';

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

const gtagScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GTAG_ID}');`;

const hotjarScript = `(function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:4943377,hjsv:6};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;

const TITLE = 'Shift - Le Hackathon Gen AI';
const DESCRIPTION = "Créé des produits Gen AI game-changer en 48 heures, du 27/03 au 29/03. Édition «Time to Custom» → Hack ton outil préféré.";
const OG_IMAGE = '/assets/images/HINjkEIVuvTLAMTIcSPr6jing.png';

interface Props {
  canonical: string;
  breakpointCss: string;
  ssrCss: string;
  ssrCssComponents: string;
  rawBody: string;
}

const Layout: FC<Props> = ({
  canonical, breakpointCss, ssrCss, ssrCssComponents, rawBody,
}) => (
  <html lang="fr">
    <head>
      <meta charSet="utf-8" />
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
      {/* Google tag (gtag.js) */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} />
      <script dangerouslySetInnerHTML={{ __html: gtagScript }} />
      <meta name="viewport" content="width=device-width" />
      <meta name="generator" content="Framer 27b79d7" />
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link href="/assets/images/QvcpkfP4FixE8eJpQUTgNk0rIs.png" rel="icon" media="(prefers-color-scheme: light)" />
      <link href="/assets/images/QvcpkfP4FixE8eJpQUTgNk0rIs.png" rel="icon" media="(prefers-color-scheme: dark)" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <style data-framer-font-css dangerouslySetInnerHTML={{ __html: fontCss }} />
      <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      <style data-framer-breakpoint-css dangerouslySetInnerHTML={{ __html: breakpointCss }} />
      <style data-framer-css-ssr-minified data-framer-components={ssrCssComponents} dangerouslySetInnerHTML={{ __html: ssrCss }} />
      {/* Hotjar */}
      <script dangerouslySetInnerHTML={{ __html: hotjarScript }} />
    </head>
    <body>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <div dangerouslySetInnerHTML={{ __html: rawBody }} />
    </body>
  </html>
);

export default Layout;
