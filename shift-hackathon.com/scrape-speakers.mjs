import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://shift-hackathon.com/intervenants-2026', { waitUntil: 'networkidle' });

await page.evaluate(async () => {
  const h = document.body.scrollHeight;
  for (let y = 0; y < h; y += 600) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 80));
  }
});
await page.waitForTimeout(500);

const speakers = await page.evaluate(() => {
  // Find images that are immediately followed by h6 (the speaker name pattern)
  const results = [];
  document.querySelectorAll('h6').forEach(h6 => {
    const card = h6.closest('[data-framer-name]')?.closest('[data-framer-name]') || h6.parentElement?.parentElement;
    let parent = h6.parentElement;
    while (parent && !parent.querySelector('img')) parent = parent.parentElement;
    if (!parent) return;
    const img = parent.querySelector('img');
    const src = img?.currentSrc || img?.src;
    if (!src) return;
    const m = src.match(/images\/([A-Za-z0-9]+\.[a-z]+)/);
    const hash = m ? m[1] : null;
    // Capture all roles (p elements after the h6)
    const roles = [];
    let next = h6.nextElementSibling;
    while (next && next.tagName === 'P') {
      roles.push(next.textContent?.trim());
      next = next.nextElementSibling;
    }
    results.push({ name: h6.textContent?.trim(), hash, roles });
  });
  return results;
});

console.log(JSON.stringify(speakers, null, 2));
await browser.close();
