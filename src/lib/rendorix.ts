/**
 * SERVER-ONLY — This module must never be imported in client-side code or
 * exposed via a public API endpoint. RENDORIX_SECRET is an HMAC signing key;
 * leaking it allows anyone to forge signed CDN URLs.
 *
 * Astro guarantees that files imported only in the frontmatter of .astro pages
 * (or in server-only endpoints) are never bundled into the client JS.
 */

import { createRendorix } from "@rendorix/client";

export const rx = createRendorix({
  baseUrl: import.meta.env.RENDORIX_BASE_URL,
  secret: import.meta.env.RENDORIX_SECRET,
  presets: {
    hero: { w: 1200, q: 85, f: "webp" },
    card: { w: 600, q: 80, f: "webp" },
    /** Blog card thumbnails (square artwork at bucket root). */
    cardSquare: { w: 600, h: 600, q: 80, f: "webp" },
    /** Home hero headshot: .hero-portrait is 360px; 720px covers 2x DPR. */
    headshot: { w: 720, h: 720, q: 86, f: "webp" },
    /** About page portrait: larger square, up to ~480px display. */
    headshotAbout: { w: 960, h: 960, q: 86, f: "webp" },
    /** Open Graph / social link previews (1.91:1). */
    og: { w: 1200, h: 630, q: 85, f: "jpeg" },
  },
});
