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

const testimonials = await page.evaluate(() => {
  const h2 = [...document.querySelectorAll('h2')].find(h => h.textContent?.trim() === 'Témoignages');
  if (!h2) return [];
  const startY = h2.getBoundingClientRect().top + window.scrollY;
  const nextH2 = [...document.querySelectorAll('h2')].find(h => {
    const y = h.getBoundingClientRect().top + window.scrollY;
    return y > startY;
  });
  const endY = nextH2 ? nextH2.getBoundingClientRect().top + window.scrollY : Infinity;

  // Walk all P elements in zone, group them into testimonial cards.
  // A card = a leaf container with an img and 3+ p elements (name, role, quote, maybe more).
  // We climb from each img up to a container that has both an img and at least 2 p siblings.
  const cards = new Set();
  document.querySelectorAll('img').forEach(img => {
    const y = img.getBoundingClientRect().top + window.scrollY;
    if (y < startY || y >= endY) return;
    let el = img.parentElement;
    for (let i = 0; i < 8 && el; i++) {
      const ps = el.querySelectorAll('p');
      if (ps.length >= 3) {
        cards.add(el);
        break;
      }
      el = el.parentElement;
    }
  });

  const out = [];
  cards.forEach(card => {
    const img = card.querySelector('img');
    const src = img?.currentSrc || img?.src || '';
    const hash = src.match(/images\/([A-Za-z0-9]+\.[a-z]+)/)?.[1];
    const ps = [...card.querySelectorAll('p')].map(p => p.textContent?.trim()).filter(t => t);
    if (ps.length < 2) return;
    // ps[0] = name, ps[1] = role, ps[2..] = quote paragraphs
    out.push({
      name: ps[0],
      role: ps[1],
      quote: ps.slice(2).join(' ').replace(/^"|"$|^“|”$/g, '').trim(),
      hash,
    });
  });
  return out;
});

console.log(JSON.stringify(testimonials, null, 2));
console.log(`Total: ${testimonials.length}`);
await browser.close();
