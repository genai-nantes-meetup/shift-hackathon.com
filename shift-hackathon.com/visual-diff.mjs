import { chromium } from 'playwright';
import { mkdir, rm } from 'node:fs/promises';

const PAGES = [
  { name: 'index',        path: '/' },
  { name: 'concept',      path: '/concept-2026' },
  { name: 'intervenants', path: '/intervenants-2026' },
  { name: 'agenda',       path: '/agenda-2026' },
];

const PROD  = 'https://shift-hackathon.com';
const LOCAL = 'http://localhost:4324';

const OUT = '/tmp/shift-diff';
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const VIEWPORT = { width: 1440, height: 1200 };
const ctx = await browser.newContext({ viewport: VIEWPORT });

async function shotSlices(url, label) {
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(700);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const sliceCount = Math.ceil(totalHeight / VIEWPORT.height);

  for (let i = 0; i < sliceCount; i++) {
    const y = i * VIEWPORT.height;
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(250);
    const file = `${OUT}/${label}-s${String(i).padStart(2, '0')}.png`;
    await page.screenshot({ path: file });
  }
  await page.close();
  console.log(`✓ ${label} → ${sliceCount} slices (total ${totalHeight}px)`);
}

for (const p of PAGES) {
  await shotSlices(`${PROD}${p.path}`,  `prod-${p.name}`);
  await shotSlices(`${LOCAL}${p.path}`, `local-${p.name}`);
}

await browser.close();
console.log('done');
