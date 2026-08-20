/// <reference types="astro/client" />

// PostHog project API key (public, client-exposed via the `PUBLIC_` prefix — see CLAUDE.md
// "Tracking" section for where it's set in Vercel). Optional: PostHog only loads when it's set.
type ImportMetaEnv = {
  readonly PUBLIC_POSTHOG_KEY?: string;
};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
