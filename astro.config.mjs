// @ts-check
import { defineConfig } from "astro/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// @rendorix/client v0.0.1 points exports "import" at dist/index.mjs but tsup emits dist/index.js.
// Until the package is republished, resolve the ESM build explicitly.
// https://github.com/djmartin2019/Rendorix

// https://astro.build/config
export default defineConfig({
  site: "https://www.djm-tech.dev",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@rendorix/client": path.join(
          __dirname,
          "node_modules/@rendorix/client/dist/index.js"
        ),
      },
    },
  },
  integrations: [mdx(), sitemap()],
});
