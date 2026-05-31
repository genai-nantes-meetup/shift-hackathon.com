export function extractFontCss(raw: string): string {
  return raw.replace(/^\s*<style[^>]*>/, '').replace(/<\/style>\s*$/, '');
}

export function extractCanonical(headStyles: string): string {
  return headStyles.match(/rel="canonical" href="([^"]+)"/)?.[1] ?? '';
}

export function extractBreakpointCss(headStyles: string): string {
  return headStyles.match(/<style data-framer-breakpoint-css>([\s\S]*?)<\/style>/)?.[1] ?? '';
}

export function extractSsrCss(headStyles: string): { css: string; components: string } {
  const match = headStyles.match(
    /<style data-framer-css-ssr-minified data-framer-components="([^"]*)"[^>]*>([\s\S]*?)<\/style>/
  );
  return { css: match?.[2] ?? '', components: match?.[1] ?? '' };
}
