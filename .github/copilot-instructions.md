# Copilot Instructions for AI Agents

## Project Overview
This is an Astro-based static portfolio site, initialized from the "minimal" Astro starter template with Tailwind CSS v4 integration. The main structure and routing are managed by Astro conventions. Site content is hardcoded in `src/pages/index.astro` with sections for case studies, skills, and experience.

## Key Architecture & Patterns
- **Pages:** All routes are defined by `.astro` or `.md` files in `src/pages/`. Example: `src/pages/index.astro` is the root route containing the full portfolio content.
- **Components:** Place reusable UI components in `src/components/` (create this folder if missing). Components can be Astro, React, Vue, Svelte, or Preact.
- **Static Assets:** Store images and other static files in `public/` (e.g., `public/logos/` for logo assets used in parallax sections).
- **Global Styles:** Use `src/styles/global.css` for site-wide CSS, including Tailwind imports and custom CSS variables (e.g., `--bg`, `--ink`, `--accent`).
- **Client Scripts:** Place interactive JavaScript in `src/scripts/` (e.g., `parallax.js` for scroll-based logo animations).

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev` (default port: 4321)
- **Build for production:** `npm run build` (output: `./dist/`)
- **Preview build:** `npm run preview`
- **Astro CLI:** Use `npm run astro ...` for commands like `astro add`, `astro check`, etc.
- **Deploy to GitHub Pages:** Run `deploy-gh-pages.bat` to build and push to `gh-pages` branch (custom domain via `CNAME`).

## Project-Specific Conventions
- **Styling:** Uses Tailwind CSS v4 with `@tailwindcss/vite` plugin in `astro.config.mjs`. Custom components like `.card`, `.pill`, `.eyebrow` defined in `global.css`.
- **Fonts:** Imports Space Grotesk from Google Fonts in `global.css`.
- **No custom build/test scripts** beyond Astro defaults (see `package.json`).
- **No backend/server code**—this is a static site.
- **No custom data flows or service boundaries**—all logic is page/component-based with hardcoded content arrays.
- **No test framework configured** by default.

## Integration Points & External Dependencies
- **Astro** is the primary framework with Tailwind CSS v4 (see `package.json` for dependencies).
- **Deployments:** Use `deploy-gh-pages.bat` for GitHub Pages deployment to `https://rizwanhaidar.github.io/Protofolio2.0` with custom domain `protofolio.vercel.app` (managed via `CNAME`).
- **Site Configuration:** Base URL and site set in `astro.config.mjs` for build-time URL generation.

## Examples
- To add a new page: create `src/pages/about.astro`.
- To add a logo: place it in `public/logos/` and reference it in your `.astro` files with parallax data attributes (see `parallax.js`).
- To add global styles: edit `src/styles/global.css` or use Tailwind classes in components.
- To add interactive features: create scripts in `src/scripts/` and import them in `.astro` files.

## References
- See `README.md` for starter info and command summary.
- See `astro.config.mjs` for Astro and Tailwind configuration.
- See `tsconfig.json` for TypeScript settings (if using TypeScript).
- See `src/pages/index.astro` for portfolio content structure and data patterns.

---
**For AI agents:**
- Follow Astro conventions for routing and file placement.
- Use Tailwind CSS classes and custom CSS variables from `global.css` for consistent styling.
- Use concise, idiomatic Astro/JS/TS code with Tailwind for styling.
- Reference this file and `README.md` for workflow and structure.
