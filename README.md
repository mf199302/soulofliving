# Soul of Living — Static Website

A responsive, single-page corporate website built with HTML5, CSS3 and vanilla JavaScript.

## Run locally
Open `index.html` directly in a modern browser, or run a local server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure
- `index.html` — semantic page structure and content
- `css/style.css` — responsive design system, layout and animations
- `js/main.js` — navigation, reveal effects and static contact-form mailto behavior
- `assets/logos/favicon.svg` — custom SVG favicon
- `assets/logos/soul-of-living-horizontal.png` — supplied Soul of Living logo
- `assets/logos/caironiture.png` — supplied Caironiture logo
- `assets/logos/soul-of-living-horizontal.png` — supplied Soul of Living logo lockup
- `assets/images/` — place locally hosted brand photography here

## Editing
- Update brand copy and contact information in `index.html`.
- Update centralized company details and placeholder brand names in `js/main.js` (`siteContent`).
- Replace abstract CSS brand visuals with approved local photography when available. Caironiture uses its supplied logo in the portfolio visual.
- Replace `hello@soulofliving.com` in `js/main.js` with the real general inquiry email before publishing.
- The Latin Love profile image is loaded from its Facebook profile; a local text fallback appears if Facebook blocks the image.
- Caironiture is linked to `https://www.caironiture.com/`.

## Notes
The contact form uses a `mailto:` fallback. It does not submit to a server or store visitor data. Interior design and property management names are intentionally placeholders. Google Fonts are loaded remotely; system fallbacks remain available offline.
