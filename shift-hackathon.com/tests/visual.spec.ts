import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const PAGES = [
  { path: '/', name: 'index' },
  { path: '/concept-2026', name: 'concept' },
  { path: '/agenda-2026', name: 'agenda' },
  { path: '/intervenants-2026', name: 'intervenants' },
];

const LIVE_BASE = 'https://shift-hackathon.com';

async function waitForPage(page: import('@playwright/test').Page) {
  await page.waitForSelector('nav', { timeout: 15000 });

  // Force Motion's JS-driven animations to final visible state.
  // useInView starts elements at opacity:0; we override before scrolling so
  // the full-page screenshot captures all content regardless of viewport history.
  await page.addStyleTag({
    content: `
      * { transition: none !important; animation-duration: 0s !important; }
      [style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; }
      [style*="translateY"] { transform: none !important; }
    `,
  });

  // Scroll slowly to trigger useInView hooks and load lazy images
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

async function waitForLive(page: import('@playwright/test').Page) {
  await page.waitForLoadState('networkidle', { timeout: 20000 });
  // Force Framer appear-animations (opacity:0.001 initial) to final visible state
  await page.addStyleTag({
    content: `
      * { transition: none !important; animation-duration: 0s !important; }
      [data-framer-appear-id], [data-framer-appear-id] > * {
        opacity: 1 !important; transform: none !important;
      }
      [style*="opacity:0.001"] { opacity: 1 !important; }
      [style*="opacity: 0.001"] { opacity: 1 !important; }
    `,
  });
  // Scroll to trigger any remaining lazy-loaded content
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let y = 0;
      const timer = setInterval(() => {
        window.scrollBy(0, 500);
        y += 500;
        if (y >= document.body.scrollHeight) { clearInterval(timer); window.scrollTo(0, 0); resolve(); }
      }, 60);
    });
  });
  await page.waitForTimeout(800);
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
