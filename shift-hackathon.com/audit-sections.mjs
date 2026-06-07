import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://shift-hackathon.com/', { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  const h = document.body.scrollHeight;
  for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(800);

// Walk the DOM top-down and find major blocks (h2, big sections)
const sections = await page.evaluate(() => {
  const results = [];
  const candidates = document.querySelectorAll('h1, h2, h3');
  candidates.forEach(el => {
    const rect = el.getBoundingClientRect();
    results.push({
      tag: el.tagName.toLowerCase(),
      text: el.textContent?.trim().slice(0, 120),
      y: Math.round(rect.top + window.scrollY),
    });
  });
  return results.sort((a, b) => a.y - b.y);
});

console.log('=== HEADINGS in order ===');
for (const s of sections) console.log(`y=${String(s.y).padStart(6)}  [${s.tag}] ${s.text}`);

await browser.close();
