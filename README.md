# 270° Rooftop — Website

A fully responsive, interactive multi-page marketing site for **270° Rooftop**, a rooftop bar & kitchen in Nairobi, built with plain HTML/CSS/JS (no build step required).

## Run locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or just open `index.html` directly in a browser.

## Structure

```
index.html      Home — hero, teasers, stats, signature drinks preview, dual CTA
about.html      Experience — our story, know-before-you-go, values, stats
menu.html       Full interactive menu (11 categories, tabs + live search)
gallery.html    Filterable photo gallery with lightbox
reviews.html    Testimonial carousel, review grid, Instagram strip, rate widget
reserve.html    Reservation form with validation + confirmation code
visit.html      Hours, live open/closed status, map, contact, payments
404.html        Custom not-found page (also used as GitHub Pages' 404)
privacy.html    Plain-language privacy policy (localStorage usage disclosed)

css/style.css   Design system: brass-gold + emerald + terracotta palette,
                mesh-gradient backgrounds, motion system, responsive layout
css/fonts.css   Self-hosted @font-face rules (see Fonts below)
css/fonts/      Fraunces + Manrope variable woff2 files
js/main.js      Shared behavior on every page: nav, theme toggle, reveal
                animations, hero parallax, live-hours widget, stat counters,
                newsletter, upcoming-reservation banner
js/menu.js      Menu data + category filter/search (menu.html only)
js/gallery.js   Gallery data + filter + lightbox (gallery.html only)
js/reviews.js   Testimonial carousel + rating widget (reviews.html only)
js/reserve.js   Reservation form logic (reserve.html only)

images/hero/    Drop real hero photos here — see its README.md for filenames
images/gallery/ Drop real gallery photos here — see its README.md for filenames
images/og-cover.png  Branded 1200×630 social share image (used by all pages)

manifest.json, favicon-*.png, apple-touch-icon.png, icon-*.png
                Web app manifest + full favicon set
robots.txt, sitemap.xml
                Search-engine crawl files
.github/workflows/deploy-pages.yml
                Auto-deploys to GitHub Pages on every push to `main`
```

Every page shares the same header/nav/footer, so navigation, the live open/closed
ribbon, and the day/night theme toggle work identically everywhere.

## Design

- **Palette**: deep charcoal base with a brass-gold + burnt-terracotta accent
  gradient and a deep-emerald secondary accent — a distinctive alternative to
  the generic "sunset coral" look, still evoking dusk over the skyline. A
  Day/Night toggle (persisted) swaps to a warm ivory daytime palette.
- **Typography**: Fraunces (display serif) + Manrope (body sans), self-hosted
  (no Google Fonts CDN dependency — see Fonts below).
- **Motion**: a differentiated reveal system (clip-path wipes for headlines
  and visual panels, scale-in for cards, fade+rise for text/lists), subtle
  GPU-only hero parallax, a short pure-CSS load sequence, staggered mobile-nav
  entrance, and tactile button/card hover states. Respects
  `prefers-reduced-motion` throughout.

## Features

- Sticky/adaptive header with scroll-aware hide/show, shared across all pages
- Live "Open / Closed" badge and closing countdown computed from real time, plus a heuristic "how busy right now" meter (visit.html + header ribbon on every page)
- Day / Night color palette toggle (persisted)
- Full interactive menu with 11 category tabs + live search, transcribed from the real physical menu boards, including allergen/diet tags (g, n, d, e, sf, s, vegan)
- Filterable photo gallery with a keyboard-accessible lightbox (arrow keys / Esc)
- Auto-rotating, swipeable testimonial carousel with real guest quotes, a review grid, and an "As seen on Instagram" strip linking to the real @270rooftop handle
- Star-rating widget and newsletter signup (front-end only)
- Fully working reservation form: validation, generated confirmation code, "upcoming reservation" banner persisted in `localStorage` and shown site-wide
- Real contact details wired in: phone/WhatsApp `0702 455 665`, address (18th Floor, Escada Apartments, plus code PQMX+7X3), and the cashless (Card/M-Pesa only) payment notice
- Mobile-first responsive layout, reduced-motion support, no horizontal overflow at any breakpoint

## Fonts

Fraunces and Manrope are self-hosted as variable fonts (`css/fonts/*.woff2`,
declared in `css/fonts.css`) — subset to the "latin" unicode range, which
covers every character actually used on the site (°, é, ç, ä, —, • …). No
external font CDN is loaded by any page.

## SEO & sharing

Every page has a canonical URL, Open Graph + Twitter Card tags, and points at
`images/og-cover.png` for link previews. The homepage also carries
`Restaurant` JSON-LD structured data (address, hours, rating, price range) so
Google can show rich results. `robots.txt` and `sitemap.xml` assume the site
is deployed at `https://jodyjoy.github.io/Business-project/` — **update both
files, plus the `canonical`/`og:url`/JSON-LD `url` values in every page's
`<head>`, if you deploy to a custom domain instead.**

## Deployment (GitHub Pages)

`.github/workflows/deploy-pages.yml` auto-deploys this repo to GitHub Pages
on every push to `main`. One-time manual step required (GitHub doesn't allow
enabling Pages via a plain push): go to **Settings → Pages → Build and
deployment → Source**, and select **GitHub Actions**. After that, every push
to `main` deploys automatically — no further action needed.

## Before you launch — a few things to double-check

- Exact opening hours (currently assumes daily 11:00 AM, closing 10:30 PM Sun–Thu / 11:30 PM Fri–Sat, based on the one confirmed closing time available — confirm the full week with the venue)
- Menu prices/items — transcribed from photographed menu boards; cross-check against the current physical menu before publishing, especially for items that may have seasonal or updated pricing
- No public email address was available, so the site currently directs guests to phone/WhatsApp only — add one in `visit.html` if you have it
- Facebook/TikTok/X links were left out (only the confirmed Instagram was available) — add them in the footer and `visit.html` social row if you have real handles
- The reservation form currently stores bookings in the browser only (`localStorage`); wire `js/reserve.js`'s submit handler to your real booking backend/email service before going live
- Real photography: drop files into `images/hero/` and `images/gallery/` (see each folder's `README.md` for exact filenames) to replace the abstract gradient/emoji placeholders — no code changes needed
- If you deploy to a custom domain instead of the default `github.io` URL, update `robots.txt`, `sitemap.xml`, and the canonical/OG/JSON-LD URLs in every page's `<head>`
- `privacy.html` is a plain-language draft, not lawyer-reviewed — have someone review it before relying on it, especially once a real backend, analytics, or payments are added
