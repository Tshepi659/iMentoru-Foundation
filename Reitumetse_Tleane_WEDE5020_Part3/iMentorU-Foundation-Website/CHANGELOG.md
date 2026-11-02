# Changelog

## Version 3.0.0 - 30 October 2026 (Part 3 development)

### Part 2 feedback and continuity
- Retained the iMentorU Foundation organisation, existing five-page information architecture, visual identity, external stylesheet and responsive layout from Part 2.
- Extended the shared navigation to include the required dedicated `enquiry.html` page.
- Kept the Part 2 responsive screenshots and testing records as historical evidence; new interactive features should be browser-tested before final submission.

### JavaScript functionality
- Expanded `js/main.js` with page-aware DOM manipulation and event handling for programme search, accessible accordions, an image lightbox, form validation and an interactive Leaflet map.
- Added live programme filtering and a visible result count without reloading the page.
- Added expandable FAQ and organisation-information panels with `aria-expanded` state and keyboard dismissal support.
- Added a lightbox gallery that enlarges images and closes through its close control, backdrop or Escape key.
- Added CSS transitions, a short panel animation and a `prefers-reduced-motion` rule.
- Added a Leaflet map to the Contact page. The marker represents the general Madiba Street / Sammy Marks Square area and is explicitly labelled approximate; the exact entrance location must be confirmed with the organisation.

### Forms and validation
- Replaced the Contact page's simulated form with a general contact form requesting name, email, optional phone, message category, subject and full message.
- Added a separate Enquiries page for programme/course, volunteering, sponsorship and partnership enquiries, including area of interest and optional preferred date.
- Added HTML5 required, email, phone pattern, date, minimum-length and maximum-length constraints, with JavaScript `reportValidity()` checks before processing.
- Validated form values are compiled into a structured `mailto:` email addressed to `info@imentorufoundation.org.za`. The visitor must review and send the email in their own email application.
- Limitation: this static GitHub Pages-compatible project has no server or database. The mailto process is not AJAX and cannot guarantee delivery; a real AJAX submission requires an approved form endpoint or backend service.
- The existing volunteer-interest form remains a clearly labelled classroom demonstration and does not transmit personal data.

### SEO and performance
- Replaced the repeated generic page description with page-specific title tags, meta descriptions and keyword metadata.
- Retained semantic page headings, descriptive image alternative text, responsive images and internal navigation; added internal links to the enquiry page.
- Added `robots.txt` and `sitemap.xml`. Their GitHub Pages base URL is a placeholder and must be replaced with the final published repository URL before deployment.
- Used lazy loading for gallery images and retained WebP/responsive image sources for the home-page hero.
- Added an OpenStreetMap link as a fallback if the external Leaflet map library or map tiles are unavailable.

### References added for Part 3
- Leaflet (2024) *Leaflet: an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 30 October 2026).
- OpenStreetMap contributors (n.d.) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 30 October 2026).
- Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 30 October 2026).
- MDN Web Docs (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: 30 October 2026).
- MDN Web Docs (n.d.) *HTML forms*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms (Accessed: 30 October 2026).

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
