# Rizwan Haidar — dual-profile portfolio

Astro static site for https://rizwanhaidar.github.io/Protofolio/.

## Develop and validate

Use Node 20+ and `npm ci`. Run `npm run dev` for development, `npm run build` for production, then `node scripts/check-build.mjs` to validate all 14 pages, metadata, local links and required profile content. `npm run preview` serves a production build where supported.

## Content and design

- `src/data/portfolio.ts`: typed employer records and all 11 case studies. Preserve source notes and distinguish individual work from team results.
- `src/components/Profile.astro`: distinct professional/academic landing content.
- `src/components/StudyList.astro`: project lists and accessible domain filters.
- `src/layouts/PortfolioLayout.astro`: shared header, mode persistence, SEO and contact.
- `src/pages/work/[slug].astro`: statically generated detailed case studies.
- `src/styles/portfolio.css`: responsive layout, focus treatment and reduced motion.
- `public/portrait.png`: owner-supplied portrait. Existing assets and original headshot retained.

Direct routes `/professional/`, `/academic/` and `/work/<slug>/` work on GitHub Pages. Local storage remembers the profile; direct URLs take precedence. The root restores Academic when selected. Section hashes are retained when switching modes where corresponding sections exist. Content and navigation work without JavaScript; filtering and persistence enhance the static pages.

## Claims and report permissions

Toyota details are owner-confirmed. Other employer claims are supported by the existing public CV. Academic summaries derive from five reports supplied by the owner. NLI, polarization and XAIHate results are team outcomes. AML explicitly identifies Rizwan's Multi-GIN+EU / FRAD-B contribution. AI Safety is a proposal, with no empirical findings claimed.

The PDF reports are not committed: public redistribution permission was not established. Case-study report requests use email. Before adding downloads, confirm co-author/institution permissions and remove any identifiers that should not be public. The existing CV remains unchanged and predates the Toyota update. GIZ/clinical dates are retained as listed in the CV; verify end dates when updating.

Existing employer/client logos are retained only to identify the stated relationship. Toyota, Bonn and FAST use typographic identity blocks rather than invented official logo artwork. No endorsement is implied.

## Deployment and rollback

Source belongs on `main`; published output belongs on `gh-pages`. The existing Actions deployment workflow builds from main. For an isolated preview, build with `PORTFOLIO_BASE=/Protofolio/preview/dual-profile npm run build`, then validate with the same variable and copy the output into that directory on `gh-pages`. Never replace production with a preview-base build.

Production build uses `/Protofolio` by default. Keep `.nojekyll` on the published branch. Do not copy the legacy root CNAME: it refers to an unrelated historical target. Original production commit before this redesign: `abafeb8846d03f8e247b665289d54147f7cd4b70`. Restore with a new revert/recovery commit rather than rewriting history.

## Verification boundaries

`check-build.mjs` checks generated internal links, assets and key content. Browser review covers rendered layouts, mode navigation, reload, filtering and representative case studies. External credential pages are issuer-controlled; their inclusion is not a claim of current certification validity. The public CV documents the credentials.
