import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const PAGES = [
  { path: '/', name: 'index' },
  { path: '/concept', name: 'concept' },
  { path: '/agenda', name: 'agenda' },
  { path: '/intervenants', name: 'intervenants' },
];

const LIVE_BASE = 'https://shift-hackathon.com';

// Bring a page to a stable, fully-visible state for a full-page screenshot.
// Animation-library-agnostic: disable transitions/animations, force any JS-driven
// entrance animation to its final state (opacity → 1, transforms reset), then scroll
// through to trigger viewport-based reveals and lazy-loaded images.
// `[style*="opacity:0"]` also matches inline `opacity:0.001` values (substring).
async function settle(page: import('@playwright/test').Page) {
  await page.addStyleTag({
    content: `
      * { transition: none !important; animation-duration: 0s !important; }
      [style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; }
      [style*="translate"], [style*="transform"] { transform: none !important; }
    `,
  });

  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      const step = 400;
      const delay = 80;
      let y = 0;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        y += step;
        if (y >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, delay);
    });
  });
  await page.waitForTimeout(800);
}

async function waitForPage(page: import('@playwright/test').Page) {
  await page.waitForSelector('nav', { timeout: 15000 });
  await settle(page);
}

async function waitForLive(page: import('@playwright/test').Page) {
  await page.waitForLoadState('networkidle', { timeout: 20000 });
  await settle(page);
}

// Snapshot baseline for the Astro version (run once, then used for regression)
for (const { path, name } of PAGES) {
  test(`snapshot: ${name}`, async ({ page }) => {
    await page.goto(path);
    await waitForPage(page);
    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });
}

// Side-by-side comparison: Astro vs live shift-hackathon.com
test.describe('compare: Astro vs live', () => {
  for (const { path, name } of PAGES) {
    test(name, async ({ page, browser }) => {
      fs.mkdirSync('tests/screenshots', { recursive: true });

      // Astro screenshot
      await page.goto(path);
      await waitForPage(page);
      await page.screenshot({
        path: `tests/screenshots/${name}-astro.png`,
        fullPage: true,
        animations: 'disabled',
      });

      // Live site screenshot
      const livePage = await browser.newPage();
      await livePage.goto(`${LIVE_BASE}${path}`);
      await waitForLive(livePage);
      await livePage.screenshot({
        path: `tests/screenshots/${name}-live.png`,
        fullPage: true,
        animations: 'disabled',
      });
      await livePage.close();
    });
  }
});
