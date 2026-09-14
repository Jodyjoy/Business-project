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

css/style.css   Design system: brass-gold + emerald + terracotta palette,
                mesh-gradient backgrounds, animation system, responsive layout
js/main.js      Shared behavior on every page: nav, theme toggle, reveal
                animations, live-hours widget, stat counters, newsletter,
                upcoming-reservation banner
js/menu.js      Menu data + category filter/search (menu.html only)
js/gallery.js   Gallery data + filter + lightbox (gallery.html only)
js/reviews.js   Testimonial carousel + rating widget (reviews.html only)
js/reserve.js   Reservation form logic (reserve.html only)
```

Every page shares the same header/nav/footer, so navigation, the live open/closed
ribbon, and the day/night theme toggle work identically everywhere.

## Design

- **Palette**: deep charcoal base with a brass-gold + burnt-terracotta accent
  gradient and a deep-emerald secondary accent — a distinctive alternative to
  the generic "sunset coral" look, still evoking dusk over the skyline. A
  Day/Night toggle (persisted) swaps to a warm ivory daytime palette.
- **Typography**: Fraunces (display serif) + Manrope (body sans).
- **Motion**: animated gradient-mesh blobs + subtle grain texture behind every
  hero, a skyline silhouette on the homepage, floating particle field, staggered
  scroll-reveal animations, count-up stats, hover-lift cards, and an animated
  marquee.

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

## Before you launch — a few things to double-check

- Exact opening hours (currently assumes daily 11:00 AM, closing 10:30 PM Sun–Thu / 11:30 PM Fri–Sat, based on the one confirmed closing time available — confirm the full week with the venue)
- Menu prices/items — transcribed from photographed menu boards; cross-check against the current physical menu before publishing, especially for items that may have seasonal or updated pricing
- No public email address was available, so the site currently directs guests to phone/WhatsApp only — add one in `visit.html` if you have it
- Facebook/TikTok/X links were left out (only the confirmed Instagram was available) — add them in the footer and `visit.html` social row if you have real handles
- The reservation form currently stores bookings in the browser only (`localStorage`); wire `js/reserve.js`'s submit handler to your real booking backend/email service before going live.
