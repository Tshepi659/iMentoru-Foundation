# Part 2 Responsive Testing

## Test sizes

| Device category | Viewport | Expected layout |
| --- | --- | --- |
| Desktop | 1440 by 900 | Horizontal navigation, two-column hero and three-column cards |
| Tablet | 768 by 1024 | Menu button, stacked hero and two-column cards |
| Mobile | 390 by 844 | Vertical mobile menu, single-column content and full-width buttons |

The corresponding evidence images are stored in `evidence/responsive` and displayed in the repository README.

## Developer tools procedure

1. Open `index.html` in Chrome, Edge or Firefox.
2. Open developer tools with `F12` or `Ctrl+Shift+I`.
3. Activate the device toolbar.
4. Enter each viewport size listed above.
5. Refresh the page and confirm that navigation, columns, typography and images adapt.
6. Open the mobile menu at 390 pixels and confirm all five links are visible.
7. Inspect the hero image and confirm the browser chooses an appropriate `srcset` source.
8. Repeat the link and layout checks on all five pages.

## Functional checks

- All five pages load the same `css/style.css` file.
- Home, About Us, Programmes, Get Involved and Contact links resolve locally.
- The active page is identified using `aria-current="page"`.
- The mobile menu exposes its state with `aria-expanded`.
- Escape closes the mobile menu and returns focus to the menu button.
- Form labels are connected to their fields.
- Required and email fields use browser validation.
- Demonstration forms display confirmation without sending information.
- Keyboard focus is clearly visible.
- Responsive logo and hero image sources exist at the declared sizes.

## Iterations completed

- Changed the tablet hero from two columns to a stacked layout to prevent narrow text and image columns.
- Changed cards and statistics to two columns on tablets and one column on phones.
- Changed mobile action buttons to full width for easier touch interaction.
- Reduced the mobile logo and heading sizes to prevent horizontal overflow.
- Replaced inline colour styling with a reusable `.page-hero .eyebrow` rule.
- Added a reduced-motion rule for users who disable animation.
