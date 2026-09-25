# Changelog

This file records the development of the iMentorU Foundation website. Entries explain how Part 1 feedback was addressed and what was implemented for Part 2.

## Version 2.0.0 - 25 September 2026

### Part 1 feedback corrections carried into Part 2

- Kept iMentorU Foundation as the organisation for both proposals and expanded the Word proposal so each option contains its own features, functionality, design explanation and desktop/mobile wireframes.
- Replaced the original general budget note with an itemised first-year estimate covering research, design, development, content, testing, domain registration, hosting and maintenance.
- Added meaningful comments to all five HTML pages, the shared stylesheet and the JavaScript file so the structure and behaviour can be understood by another developer.
- Corrected the README filename, expanded the project instructions and created this changelog to provide a traceable development record.
- Added six descriptive Part 1 commits and retained that history before beginning Part 2.

### Added for Part 2

- Rebuilt `css/style.css` as the single external stylesheet linked by every page.
- Added a CSS reset for predictable sizing, margins, images and form controls across browsers.
- Added reusable custom properties for the colour palette, shadows, radii and maximum content width.
- Added a relative typography scale using `rem`, `em`, percentages and `clamp()`.
- Added desktop Grid and Flexbox layouts, including named grid areas for the home-page hero.
- Added hover, keyboard-focus and active states for navigation, buttons, cards and form controls.
- Added tablet and mobile media queries at 850 px and 560 px.
- Added an accessible skip link and improved mobile navigation keyboard behaviour.
- Added responsive logo sources at 211 px and 422 px.
- Added PNG and WebP hero images at 480 px and 960 px, connected through `picture`, `srcset` and `sizes`.
- Added responsive evidence for desktop 1440 by 900, tablet 768 by 1024 and mobile 390 by 844 layouts.
- Added Part 2 testing instructions, results and an updated final-submission checklist.
- Updated the README with Part 2 implementation details, evidence images and references.

### Changed for Part 2

- Replaced repeated inline eyebrow colours with a reusable stylesheet rule.
- Changed the desktop hero to an explicit two-area Grid and stacked it at the tablet breakpoint.
- Changed mobile actions and page grids to a single-column layout below 560 px.
- Improved colour contrast, spacing, input focus feedback and menu visibility.
- Expanded the JavaScript menu controls so navigation closes after selection or when Escape is pressed.

## Version 1.1.0 - 25 September 2026

### Added

- Comprehensive project README with setup, testing and folder information.
- GitHub submission and evidence instructions.
- Detailed sitemap showing the hierarchy and purpose of every page.
- Code comments explaining the HTML, CSS and JavaScript structure.
- Accessible mobile-menu state and clearer form labels.
- Two complete design proposals with desktop and mobile wireframes.
- Detailed project timeline and itemised production budget.

### Changed

- Renamed the incorrectly named `README.md_.md` file to `README.md`.
- Improved the organisation of project documentation.
- Strengthened navigation, accessibility and content descriptions.

## Version 1.0.0 - 21 August 2026

### Added

- Five-page iMentorU Foundation website.
- Home, About Us, Programmes, Get Involved and Contact pages.
- Local logo and hero illustration.
- Research notes, sitemap and initial proposal document.
