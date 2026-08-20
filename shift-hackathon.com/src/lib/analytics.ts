type EventProperties = Record<string, unknown>;

declare global {
  // Window augmentation requires `interface` — a `type` alias cannot merge into an existing global.
  interface Window {
    posthog?: { capture: (event: string, properties?: EventProperties) => void };
  }
}

/**
 * Send a custom event to PostHog.
 *
 * Silent no-op when PostHog isn't available: during the static build (no `window`), in dev where
 * the snippet is never injected (see Layout.astro), before the async loader has resolved, or when
 * an ad-blocker killed it. Analytics must never break the UI, hence the catch-all.
 *
 * Event names follow the `object_verb` snake_case convention (e.g. `cta_clicked`, `faq_opened`).
 * Always call this instead of `window.posthog` directly.
 */
export function capture(event: string, properties?: EventProperties): void {
  try {
    window.posthog?.capture(event, properties);
  } catch {
    // ignored on purpose — see doc comment above
  }
}
