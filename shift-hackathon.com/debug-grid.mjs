import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:4324/', { waitUntil: 'networkidle' });

// Scroll until "Ils seront présents en 2026" is visible
await page.evaluate(() => {
  const h2 = [...document.querySelectorAll('h2')].find(h => h.textContent?.includes('Ils seront présents'));
  if (h2) h2.scrollIntoView({ block: 'center' });
});
await page.waitForTimeout(1500);

// Inspect the grid
const info = await page.evaluate(() => {
  const h2 = [...document.querySelectorAll('h2')].find(h => h.textContent?.includes('Ils seront présents'));
  if (!h2) return { error: 'h2 not found' };
  const section = h2.closest('section');
  const grid = section?.querySelector('[style*="grid-template-columns"]');
  if (!grid) return { error: 'grid not found' };
  const items = [...grid.children];
  return {
    gridRect: grid.getBoundingClientRect(),
    gridStyle: grid.getAttribute('style'),
    itemsCount: items.length,
    items: items.map((el, i) => {
      const rect = el.getBoundingClientRect();
      const img = el.querySelector('img');
      const imgRect = img?.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        i,
        text: el.textContent?.trim().slice(0, 50),
        rect: { x: Math.round(rect.x), y: Math.round(rect.y), w: Math.round(rect.width), h: Math.round(rect.height) },
        opacity: cs.opacity,
        transform: cs.transform,
        imgSrc: img?.getAttribute('src')?.slice(0, 80),
        imgLoaded: img ? img.naturalWidth > 0 : false,
        imgRect: imgRect ? { w: Math.round(imgRect.width), h: Math.round(imgRect.height) } : null,
      };
    }),
  };
});

console.log(JSON.stringify(info, null, 2));
await browser.close();
