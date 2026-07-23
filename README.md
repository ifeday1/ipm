# Immortal Praise Ministry — landing page (React)

Fully static — no backend, no Firebase. Registration is handled by linking
out to Tix Africa, so there's nothing to set up beyond hosting.

## What's built

1. **Nav** — logo + jump links + Register
2. **Hero** — full-bleed background, scripture eyebrow, CTAs
3. **About** — ministry story
4. **Mission & Vision**
5. **Featured Ministration** — your real ministration video embedded, with a link to your YouTube channel
6. **What We Do** — six service cards
7. **Events** — Upcoming / Past tabs
8. **Photo Gallery**
9. **Meet the Leader**
10. **Testimonials**
11. **Register** — links out to Tix Africa
12. **Support the Vision** — giving categories + account details
13. **FAQ**
14. **Contact**
15. **Footer**

## 1. Add your real content

Everything lives in **`src/data/content.js`**. Anything marked
`// PLACEHOLDER` is sample content waiting on the real thing — contact
details, bank details, your real Tix Africa event link, gallery photos,
event dates, and testimonials.

**Set your real Tix Africa link** in `REGISTER.url` — every "Register" button
on the site (nav, hero, footer, and the dedicated Register section) uses it.

**As you send over photos**, drop them into `public/assets/` and reference
them in `content.js`.

## 2. Add fonts

Add to your `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## 3. Install and run

Zero dependencies beyond React itself — no `firebase` or `xlsx` needed anymore.

```bash
npm run dev
```

Starting fresh:

```bash
npm create vite@latest ipm-site -- --template react
cd ipm-site
# copy src/ and public/assets/ from this project in
npm install
npm run dev
```

## 4. Deploy

Static build — `npm run build`, deploy anywhere (Vercel, Netlify, GitHub
Pages, Firebase Hosting if you ever want it back for something else). No
environment variables or backend setup required.

## Notes on what still needs real content

- **Featured video**: now embeds `xzVhEqe4plw` with a link to your channel —
  swap the video ID in `MINISTRY.heroVideoUrl` whenever you release something new.
- **Register**: `REGISTER.url` is a placeholder — replace with your real
  Tix Africa event page.
- **Hero image / Gallery**: currently using the photos from your first upload
  — send over the new hero and gallery images and I'll drop them in.
- **Gallery**: still light — send over concert/rehearsal/outreach photos and
  I'll add them to `content.js`.
- **Testimonials**: placeholders — replace with real names and quotes once
  you have them.
- **Support/bank details, phone, email, WhatsApp, socials**: all placeholders
  in `CONTACT` and `SUPPORT.bankDetails`.
