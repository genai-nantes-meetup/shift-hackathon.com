import { chromium } from 'playwright';
import { writeFile, mkdir } from 'node:fs/promises';

const PAGES = [
  { name: 'index',        url: 'https://shift-hackathon.com/' },
  { name: 'concept',      url: 'https://shift-hackathon.com/concept-2026' },
  { name: 'intervenants', url: 'https://shift-hackathon.com/intervenants-2026' },
  { name: 'agenda',       url: 'https://shift-hackathon.com/agenda-2026' },
];

const OUT = '/tmp/shift-prod';
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

for (const p of PAGES) {
  const page = await ctx.newPage();
  await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });
  // Scroll all the way to trigger lazy content
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 800) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);

  // Extract structured content
  const data = await page.evaluate(() => {
    const out = { sections: [], images: [], texts: [] };

    // All image hashes
    document.querySelectorAll('img').forEach(img => {
      const src = img.currentSrc || img.src;
      if (src && src.includes('framerusercontent')) {
        const m = src.match(/images\/([A-Za-z0-9]+\.[a-z]+)/);
        if (m) out.images.push({ hash: m[1], alt: img.alt || '', w: img.naturalWidth, h: img.naturalHeight });
      }
    });

    // Major text headings + paragraphs (in order)
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button').forEach(el => {
      const txt = el.textContent?.trim();
      if (txt && txt.length > 1 && txt.length < 400) {
        out.texts.push({ tag: el.tagName.toLowerCase(), text: txt });
      }
    });

    // Identifiable sections (Framer puts data-framer-name on them)
    document.querySelectorAll('[data-framer-name]').forEach(el => {
      const name = el.getAttribute('data-framer-name');
      const rect = el.getBoundingClientRect();
      if (rect.height > 50) out.sections.push({ name, y: Math.round(rect.top + window.scrollY), h: Math.round(rect.height) });
    });

    return out;
  });

  await writeFile(`${OUT}/${p.name}.json`, JSON.stringify(data, null, 2));
  console.log(`✓ ${p.name}: ${data.sections.length} sections, ${data.images.length} images, ${data.texts.length} texts`);
  await page.close();
}

await browser.close();
console.log('done');
