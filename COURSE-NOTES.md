# Course Slides vs. This Project

The base code follows [Recap 2–4: Your site, by hand](https://webtech.landrock.io/slides/recap-2-4.html), verified on 2026-10-28.

| Course example | In this project |
| --- | --- |
| `<!DOCTYPE html>`, `lang`, `meta charset`, `meta viewport` | Every complete HTML page |
| `header`, `main`, `section`, `article`, `footer` | Semantic structure for pages and project entries |
| `style.css` linked from every page | Shared typography, Flexbox, Grid and media queries across the site |
| `nav.html` / `footer.html` fragments | Navigation and footer written once, no repeated page scaffolding |
| `function load(file, target)` → `fetch` → `.text()` → `innerHTML` | `nav.js`, extended with request-failure handling and `aria-current` |
| `load('nav.html', 'site-header')`, `load('footer.html', 'site-footer')` | Both calls kept as-is |
| Served through Live Server | HTTP is required; double-clicking the HTML cannot load the shared fragments |

The design extensions introduce no React, no build tooling and no animation libraries:

- `style.css`: off-white background, system fonts, capsule buttons, translucent navigation; project illustrations drawn in CSS.
- `motion.js`: IntersectionObserver + Web Animations API. Content is visible by default, animates once when entering the viewport, and never hijacks scrolling.
- `nothing.js`: button click → data-phase state → CSS transition. The cycle is idle → thinking → opening → reaching → returning → closing → idle.
- The original `machine.html/css/js` is kept, reachable from "Another useless invention" on the home page.
- All animations respect `prefers-reduced-motion`; the switches work with Tab, Space and Enter.
