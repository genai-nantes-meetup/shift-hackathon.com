import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://shift-hackathon.com/', { waitUntil: 'networkidle' });
await page.evaluate(async () => {
  const h = document.body.scrollHeight;
  for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); }
});
await page.waitForTimeout(500);

const videos = await page.evaluate(() => {
  const out = new Set();
  document.querySelectorAll('a[href*="youtube"], a[href*="youtu.be"], iframe[src*="youtube"]').forEach(el => {
    const href = el.href || el.src;
    out.add(href);
  });
  return [...out];
});

console.log(videos);
await browser.close();
