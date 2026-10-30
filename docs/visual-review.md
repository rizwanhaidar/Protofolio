# Portfolio visual review — 30 October 2026

Baseline: main `16e7de991bc75c8bbefe036debc52c1e13d5a690`. This is a refinement of the existing two-profile site; all 11 case studies and their source/attribution/limitations remain.

The two supplied reviews contain 13 and 15 sections rather than a single numbered ten-item list. The checklist consolidates them into ten traceable findings, with content accuracy as a cross-cutting requirement.

| Priority / finding | Existing problem and affected area | Proposed refinement | Implementation / evidence |
|---|---|---|---|
| P1 · 1 Typography | Professional baseline browser: headline 72.24px, overview body 13px, labels 11px, tags 10px | 64px maximum hero; 16px body; 12–14px metadata | Implemented in `portfolio.css`: hero capped at 64px; overview body 16px; tags 12px; secondary text 14px. Body size +23%, tags +20% against baseline. [Desktop comparison](#screenshot-evidence). |
| P1 · 2 Identity and hero | Name subordinate to slogan; portrait caption absolute; oversized heading | Name-focused hero and balanced portrait in document flow | Implemented in `Profile.astro`: Rizwan Haidar is the primary heading, role is supporting text, portrait caption participates in layout. [Final desktop](screenshots/final-professional-desktop.jpg). |
| P1 · 3 Composition | Case studies appear only after all employment entries | Early selected-work feature, followed by background and detailed index | Implemented `FeaturedWork.astro`: Toyota and Volvo lead Professional; AML and XAIHate lead Academic. Full study index and background remain. [Refined full page](screenshots/refined-professional-1440.jpg). |
| P1 · 4 Organization branding | Uneven logo areas; Toyota/institution typography substitutes | Shared identity component, optical sizing, official-source provenance | Implemented `OrganizationMark.astro`, padded optical containers and persistent names; corrected FAST campus attribution and Volvo scaling. Permission-dependent marks remain unresolved; see [brand provenance](brand-provenance.md). |
| P1 · 5 Employment attribution | Client identity relies heavily on small relationship text | Visible names and explicit Teradata client labels throughout | Implemented explicit employer/client labels in featured and detailed work; Volvo and FCL remain Teradata engagements, not employers. Four separate employer entries remain. See profile screenshots and case headers. |
| P1 · 6 Academic depth | Institutions lack verified coursework; results mostly prose | Completed vs registered modules; project connections; accurate result graphics | Implemented `Coursework.astro` with completed/registered distinction and `ResultsFigure.astro` for NLI, polarization and AML. All six academic studies retain methods, results/status and limitations. [Mobile NLI](screenshots/after-work-nli-390.jpg). |
| P2 · 7 Grid and whitespace | Several widths/margins; four narrow expertise columns | Shared 1184px content grid, spacing tokens, flexible two-column cards | Implemented shared 1184px maximum grid, 32px desktop/20px mobile gutters and 8px spacing scale; expertise uses two flexible columns. [Desktop comparison](#screenshot-evidence) and [final checks](final-checks.json). |
| P2 · 8 Navigation | Tall header; small links; no case breadcrumbs or next study | Compact persistent switcher, breadcrumbs, related/next work | Header reduced from 100px to 80px at desktop; persistent mode switch, case breadcrumbs, next-case links and clinical cross-links implemented. Keyboard navigation and mode persistence verified in browser. |
| P2 · 9 Repeated components | Inconsistent tags/cards/metadata and tiny footnotes | Reusable tokens, components, clear interactions and reduced-motion behavior | Shared organization, featured-work, coursework, recommendation and result components; readable metadata, native disclosure controls and reduced-motion styling. All six supplied recommendations included with individual attribution; three initially visible. |
| P1 · 10 Responsive visual QA | No complete screenshot matrix; compiling does not prove quality | Review all profiles and 11 cases at 1440/1024/768/390/360 CSS px; fix then publish | Completed browser review at 1440/1024/768/390/360 CSS px: 13 pages × 5 widths = 65 final checks, zero horizontal overflow and zero broken images. Layout defects corrected before release. [Final matrix](final-checks.json); limitations below. |

## Source handling
Academic records supplied October 30, 2026 are used to verify course titles/status only. Transcripts, grades, identifiers and personal details are not copied into the public repository. Bonn BE means passed; ZU means admitted and AN registered. Registration is not completion. Research reports remain request-only pending sharing permission.

Teradata employment letter dated May 15, 2025 verifies the official title **Associate Data Engineer**, full-time status and September 5, 2022 start. It does not independently verify an end date or project outcomes. The existing May 2025 end date remains owner/CV-supplied. Compensation, identifiers and addresses are excluded from site content and repository.

GIZ reference (7 March 2026) supersedes the earlier ongoing-employment label: internship 8 September 2025–7 March 2026. It verifies GET.transform, Excel-to-Microsoft Lists migration, SharePoint/Teams structures, training, user manual and process mapping. Existing Airtable/Power BI/RBAC claims are retained only in a clearly labeled earlier-CV paragraph, not represented as independently reference-verified. Confidential scans and personal details are not published.


## Screenshot evidence

| Evidence | Before | After |
|---|---|---|
| Professional, 1440px full page | [Baseline](screenshots/before-professional-1440.jpg) | [Refinement](screenshots/refined-professional-1440.jpg) |
| NLI case, 390px | [Baseline](screenshots/before-work-nli-390.jpg) | [Refinement](screenshots/after-work-nli-390.jpg) |
| Final profile viewport captures | — | [Professional desktop](screenshots/final-professional-desktop.jpg), [Academic mobile](screenshots/final-academic-mobile.jpg) |

The before/after full-page comparison captures the first refinement pass. The final viewport captures and final matrix follow the logo/navigation corrections. The retained [capture matrix](capture-matrix.json) records the earlier before/after pass. Screenshot filenames ending in `top` in the final matrix identify viewport captures, not a guarantee that the page was scrolled to its top. Some browser screenshot exports did not synchronize to disk; this repository includes selected successfully exported evidence rather than claiming a complete downloadable image archive.

## Validation and preservation

- Production build and generated route/link validation: 14 HTML routes, 249 local asset/navigation links checked.
- Final rendered checks: both profile pages and all 11 case pages at five CSS widths; all 65 have document width equal to viewport width and no broken images.
- Browser interactions: Data Engineering filter returns four professional projects; All returns five. Graph ML returns one academic project; All returns six. Keyboard Enter activates filters/navigation. Recommendation and registered-course disclosures open. Mode choice persists on returning home. Clinical work links the two profiles.
- Visual inspection includes the complete AI Safety page and representative full-page captures of every other study. The final QA loop corrected optical logo scaling, incorrect campus identification and next-study underline stretching.
- Content comparison: 10 of 11 complete study data records are unchanged. GIZ alone was corrected/expanded from the newly supplied reference. No meaningful case-study sections were removed for visual minimalism.
- NLI and multilingual polarization figures preserve the reported model/dataset values. AML explicitly shows the individual FRAD-B result below baseline and distinguishes collaborative FraudGT results. AI Safety remains a proposal with no experimental results claimed.
- The supplied portrait remains in use. LinkedIn screenshots are transcribed into short, attributed excerpts; screenshots, third-party headshots and confidential reference scans are not published.

## Remaining limits

1. Full official-logo coverage is not complete: Toyota needs a suitable verified asset; Bonn and Teradata have permission requirements. These organizations have prominent text identities. GIZ/FCL legacy asset provenance is documented but not independently established as licensed. See the brand provenance file for exact status.
2. Supporting research reports remain request-only where public distribution permission is not established; no fabricated download links were added.
3. Responsive checks use real Chrome rendering in controlled-width browser frames, plus direct desktop-page inspection. They are not physical-device or Safari/Firefox tests. No Lighthouse score or measured usability-study improvement is claimed.
4. The screenshot export archive is selective, as described above. The complete 65-row final rendered-check matrix is retained.

The measurable improvements are typography sizes, header height, consistent grid/spacing rules, explicit organization/project hierarchy and passing route/overflow/image checks. They should not be interpreted as measured conversion or reader-comprehension gains.
