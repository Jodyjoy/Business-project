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
- Full interactive menu with category tabs + live search, built from real menu categories (Signature Cocktails, Mocktails, Beer, Sips, Juices & Smoothies, Soft Drinks & Water, Food)
- Photo gallery with a keyboard-accessible lightbox (arrow keys / Esc)
- Auto-rotating, swipeable testimonial carousel with real guest quotes
- Star-rating widget and newsletter signup (front-end only)
- Fully working reservation form: validation, generated confirmation code, "upcoming reservation" banner persisted in `localStorage`
- Mobile-first responsive layout, reduced-motion support, no horizontal overflow at any breakpoint

## Before you launch — replace these placeholders

The following values are illustrative and should be swapped for the real business details:

- Phone number & WhatsApp link (`+254 700 000 000`)
- Email address (`hello@270rooftop.co.ke`)
- Street address / building name (`#visit` section)
- Social media links (Instagram/Facebook/TikTok/X in the footer and Visit section)
- Exact opening hours (currently assumes daily 11:00 AM, closing 10:30 PM Sun–Thu / 11:30 PM Fri–Sat, based on the one confirmed closing time available)
- Menu prices/items — cross-check against the current physical menu before publishing
- The reservation form currently stores bookings in the browser only (`localStorage`); wire `js/script.js`'s submit handler to your real booking backend/email service before going live.
