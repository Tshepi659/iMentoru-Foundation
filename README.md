# iMentoru-Foundation
iMentorU Foundation Website — WEDE5020W 
Reitumetse Tleane  
Student number: ST10526207  
Project overview
This five-page front-end website presents the work of iMentorU Foundation. Part 2 develops the Part 1 HTML solution into a styled, responsive desktop, tablet and mobile website. The site uses one external stylesheet so that shared visual rules cascade consistently across every page.
Pages and folders
`index.html` — Home page
`about.html` — Organisation background, mission, vision and values
`programmes.html` — Programme areas and short-course information
`volunteer.html` — Volunteer information and demonstration application form
`contact.html` — Contact details and demonstration contact form
`css/style.css` — CSS reset, typography, layout, visual and responsive rules
`js/main.js` — Responsive navigation and demonstration-form behaviour
`images/` — Logo variants and hero illustration
`evidence/` — Add final browser screenshots here before submission
`research/` — Research notes and source list
`docs/` — Original proposal and site map
How to run
Download or clone the repository.
Open `index.html` in Chrome, Edge or Firefox.
Use the navigation menu to move between pages.
No database, web server or installation is required.
Part 2 CSS and responsive features
One external stylesheet is linked to all five HTML pages.
A CSS reset applies consistent sizing, margins, responsive images and form fonts.
CSS custom properties provide a reusable colour palette, shadows and corner radius.
Relative `rem`, `%`, `min()` and `clamp()` values support scalable spacing and typography.
CSS Grid and Flexbox create the navigation, hero, cards, statistics, forms and footer layouts.
Desktop uses multi-column layouts; the 850px tablet breakpoint rearranges major sections; the 560px mobile breakpoint switches content to a single column.
Responsive logo files use `srcset` and `sizes` so the browser can choose an appropriate resolution.
Buttons, links, cards and form fields include hover, focus and active states.
The mobile menu exposes its open/closed state through `aria-expanded`.
A reduced-motion media query respects the user's operating-system preference.
Browser developer-tools testing
Test the home page with your browser's device toolbar at the sizes below and save the final screenshots in the listed locations. This last visual check should be completed on the computer used for submission.
View	Test size	Evidence
Desktop	1440 × 900	`evidence/desktop-1440x900.png`
Tablet	768 × 1024	`evidence/tablet-768x1024.png`
Mobile	390 × 844	`evidence/mobile-390x844.png`
Checks completed: navigation, readable text, column changes, image scaling, horizontal overflow, buttons, form controls and footer layout.
Changelog
 Part 2 responsive styling
Retained all five Part 1 pages and linked every page to the shared `css/style.css` file.
Expanded the base CSS reset to standardise sizing, margins, images and form typography across browsers.
Refined the site-wide colour palette, typography scale, spacing, shadows and rounded card style with reusable CSS custom properties.
Improved desktop layouts with CSS Grid and Flexbox for the hero, content columns, programme cards, statistics, forms and footer.
Added tablet and mobile breakpoints at 850px and 560px, including collapsible navigation and single-column mobile layouts.
Replaced fixed typography choices with responsive `clamp()` and relative `rem` sizing where appropriate.
Created 160px and 240px logo variants and added `srcset` and `sizes` to every page for responsive image selection.
Added hover, keyboard-focus and active states, plus a reduced-motion preference rule.
Improved the mobile navigation script so the button updates `aria-expanded` and its accessible label.
Added `aria-current="page"` and an accessible label to the primary navigation on every page.
Documented the required desktop, tablet and mobile screenshot sizes and evidence filenames.
Part 1 baseline retained
Five-page semantic HTML structure, consistent navigation and footer.
Local logo and hero assets for offline use.
Organisation content, programme cards, calls to action and demonstration forms.
Original proposal, site map and research notes.
References
iMentorU Foundation (n.d.) Home. Available at: https://www.imentorufoundation.org.za/ (Accessed: 16 September 2026).
iMentorU Foundation (n.d.) Contact us. Available at: https://www.imentorufoundation.org.za/contact-us (Accessed: 16 September 2026).
iMentorU Foundation (n.d.) Our history. Available at: https://www.imentorufoundation.org.za/our-history (Accessed: 16 September 2026).
iMentorU Foundation (n.d.) Our profile. Available at: https://www.imentorufoundation.org.za/our-profile (Accessed: 16 September 2026).
iMentorU Foundation (n.d.) Support. Available at: https://www.imentorufoundation.org.za/support (Accessed: 16 September 2026).
iMentorU Foundation (n.d.) Volunteer. Available at: https://www.imentorufoundation.org.za/volunteer (Accessed: 16 September 2026).
MDN Web Docs (2025) Responsive images. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images (Accessed: 16 September 2026).
MDN Web Docs (2025) Using media queries. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using (Accessed: 16 September 2026).
Academic-project notice
The content is based on publicly available information and is presented for an academic web-development project. The contact and volunteer forms are demonstrations and do not submit information to iMentorU Foundation.
