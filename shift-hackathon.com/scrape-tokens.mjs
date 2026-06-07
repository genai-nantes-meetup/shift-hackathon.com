import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://shift-hackathon.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});

// Inspect a target section. Default to Hero, override via $SECTION env (data-framer-name).
const targetName = process.env.SECTION || 'Hero';
const hero = await page.evaluate((sectionName) => {
  const out = { fonts: new Set(), colors: new Set(), elements: [] };
  const props = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'color', 'textTransform', 'fontStyle', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'gap', 'backgroundColor', 'borderRadius', 'boxShadow'];

  const heroSection = document.querySelector(`[data-framer-name="${sectionName}"]`);
  if (!heroSection) return { error: `Section "${sectionName}" not found` };
  heroSection.scrollIntoView({ block: 'start' });

  // Walk all relevant elements including span and br for inline styles
  heroSection.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, img, span, div').forEach((el) => {
    const cs = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    const data = {
      tag: el.tagName.toLowerCase(),
      name: el.getAttribute('data-framer-name') || null,
      text: el.children.length === 0 ? el.textContent?.trim().slice(0, 80) : null,
      w: Math.round(rect.width),
      h: Math.round(rect.height),
    };
    for (const p of props) {
      const v = cs[p];
      if (v && v !== 'normal' && v !== '0px' && v !== 'none' && v !== 'rgba(0, 0, 0, 0)') {
        data[p] = v;
      }
    }
    if (data.fontFamily) out.fonts.add(data.fontFamily);
    if (data.color) out.colors.add(data.color);
    if (data.backgroundColor) out.colors.add(data.backgroundColor);
    out.elements.push(data);
  });

  return {
    fonts: [...out.fonts],
    colors: [...out.colors],
    elements: out.elements.slice(0, 300),
  };
}, targetName);

console.log(JSON.stringify(hero, null, 2));
await browser.close();
