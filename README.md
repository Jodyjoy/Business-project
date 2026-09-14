# 270° Rooftop — Website

A fully responsive, interactive marketing site for **270° Rooftop**, a rooftop bar & kitchen, built with plain HTML/CSS/JS (no build step required).

## Run locally

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or just open `index.html` directly in a browser.

## Structure

```
index.html      All page markup/sections
css/style.css   Design system, theme (sunset/night toggle), responsive layout
js/script.js    All interactivity (menu data, gallery, reservations, live hours, etc.)
```

## Features

- Sticky/adaptive header with scroll-aware hide/show and active-section highlighting
- Live "Open / Closed" badge and closing countdown computed from real time, plus a heuristic "how busy right now" meter
- Sunset / Night color palette toggle (persisted)
- Full interactive menu with 11 category tabs + live search, transcribed from the real physical menu boards (Signature Cocktails, Sips, Mocktails, Beer & Cider, Coffee & Tea, Juices & Smoothies, Soft Drinks & Water, Shell & Fin, Grill & Thrill, Leafy & Lovely), including allergen/diet tags (g, n, d, e, sf, s, vegan)
- Photo gallery with a keyboard-accessible lightbox (arrow keys / Esc)
- Auto-rotating, swipeable testimonial carousel with real guest quotes, plus an "As seen on Instagram" strip linking to the real @270rooftop handle
- Star-rating widget and newsletter signup (front-end only)
- Fully working reservation form: validation, generated confirmation code, "upcoming reservation" banner persisted in `localStorage`
- Real contact details wired in: phone/WhatsApp `0702 455 665`, address (18th Floor, Escada Apartments, plus code PQMX+7X3), and the cashless (Card/M-Pesa only) payment notice
- Mobile-first responsive layout, reduced-motion support, no horizontal overflow at any breakpoint

## Before you launch — a few things to double-check

- Exact opening hours (currently assumes daily 11:00 AM, closing 10:30 PM Sun–Thu / 11:30 PM Fri–Sat, based on the one confirmed closing time available — confirm the full week with the venue)
- Menu prices/items — transcribed from photographed menu boards; cross-check against the current physical menu before publishing, especially for items that may have seasonal or updated pricing
- No public email address was available, so the site currently directs guests to phone/WhatsApp only — add one under `#visit` if you have it
- Facebook/TikTok/X links were left out (only the confirmed Instagram was available) — add them in the footer and `#visit` social row if you have real handles
- The reservation form currently stores bookings in the browser only (`localStorage`); wire `js/script.js`'s submit handler to your real booking backend/email service before going live.
