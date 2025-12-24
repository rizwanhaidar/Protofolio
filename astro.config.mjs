// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://rizwanhaidar.github.io/Protofolio2.0",
  base: "/Protofolio2.0",
  vite: {
    plugins: [tailwindcss()]
  }
});
