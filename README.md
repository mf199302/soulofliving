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
The contact form uses a `mailto:` fallback. It does not submit to a server or store visitor data. Interior design and The BnB Collective is the short-term rental and guest hospitality venture. Google Fonts are loaded remotely; system fallbacks remain available offline.

## Contracting & interior design venture
The portfolio card now describes the group’s combined contracting and interior design capability, including turnkey apartment transformations into hotel-grade stays. Its visual uses the image URL supplied by the site owner, so visitors need an internet connection to load that image. Replace the image URL in `index.html` with a locally hosted asset later if preferred.


## The BnB Collective
The short-term rental brand copy is informed by recurring positive themes in the referenced Airbnb host/listing feedback: warm, personal welcomes; responsive communication; thoughtful arrival touches; guests feeling at home; and practical local recommendations. The website uses original paraphrased marketing copy rather than reproducing guest reviews.


## Opening section and venture shortcuts
The homepage opens with the hero and the company story side by side on desktop. Clickable venture marks in the hero link directly to each portfolio card. The Latin Love and Caironiture marks use available image assets/brand sources; other ventures use matching typographic wordmarks until official logo files are supplied.

## Contact section
Direct phone and email details are intentionally not displayed in the Contact section. The contact form remains available and prepares an email through the visitor's local email application.
