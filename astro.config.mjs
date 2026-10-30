// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://rizwanhaidar.github.io",
  base: process.env.PORTFOLIO_BASE || "/Protofolio",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()]
  }
});
