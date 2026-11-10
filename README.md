# Qiang Xu · Personal Work & Research

## 2026-10-28 Local visual redesign

The working directory is `web-design/my-site` on the desktop. A clean layout in off-white, black text and a touch of blue, featuring a project-desktop illustration on the home page, scroll fade-ins, and a self-switching-off useless machine at the bottom. The original printer experiment is still reachable from the home page.

The site keeps the plain HTML/CSS/JavaScript foundation from the course slides, with no framework. A point-by-point mapping between the course material and this implementation lives in [COURSE-NOTES.md](COURSE-NOTES.md). This version is prepared for the Learning HTML submission.

Added `motion.js` (progressive scroll animations) and `nothing.js` (the footer machine interaction). When the system "reduce motion" preference is on, animations simplify automatically. All page interactions support mouse, touch and keyboard.

A computer science undergrad's personal website, presenting AI application projects, embodied spatial memory retrieval research, Citi Bike spatio-temporal prediction, and education.

## Run locally

Open this directory in VS Code, right-click `index.html` → **Open with Live Server**. The site must be served over HTTP, not `file://`, because the navigation and footer are loaded with fetch.

## Pages

- `index.html`: personal intro and selected work.
- `project.html`: three real projects, with an AI applications / web design filter.
- `research.html`: an accepted paper and ongoing research.
- `about.html`: education, courses, skills, competitions and contact.
- `quotes.html`: the archived course quote exercises.

Plain HTML, CSS and JavaScript with no build step. `nav.html` and `footer.html` are shared through `nav.js`, continuing the course DRY structure. `projects.js` implements the filter; with JavaScript disabled, all project content remains fully readable. Images, styles and scripts are all local resources.

## Content & design

October 2026 update: education, projects, research and competitions reorganized from my latest CV; the original CV and phone number are not included in the repository. The accepted paper and ongoing research are presented separately, and the public URL of the ForThatDay brand site is still pending.

The site combines my own experience with AI-assisted implementation. The two project illustrations on the home page are drawn in HTML/CSS to explain the workflows — they are not product screenshots. The portrait comes from my own CV. The share cover is a 1200×630 JPG, and the icons include 32×32 and 180×180 PNGs.

## GitHub & next steps

Repository: https://github.com/niko-97XQ/my-site

The Git history of the original course version is preserved. The site is deployed with GitHub Pages from the `main` branch.

## Course sources

- [Recap 2–4: initial starter code](https://webtech.landrock.io/slides/recap-2-4.html)
- [Your Project: course requirements](https://webtech.landrock.io/slides/project.html)

The final website requirements include at least four pages, semantic structure, mobile adaptation, interaction, a steady Git history and a real live URL. The quote exercises reuse the course examples with source attribution.
