# Upthrust

Marketing site built with Next.js 16 and Tailwind v4. The design comes from a
1440 × 1080 artboard.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # always run this before deploying
```

---

## How the page is put together

Everything is assembled top to bottom in `src/app/page.jsx`:

```
GridCanvas        <- the white grid background (hero only)
  Navbar
  HeroSection     <- big headline + chrome bust
  PartnersSection <- strip of client logos
ServicesSection   <- 4 services that slide sideways on scroll
Footer            <- big wordmark + links + newsletter
```

Each section lives in its own folder: `src/components/<section>/`.

---

## Where to change content

You don't need to dig through JSX to change text or links. Every file keeps its
content in **an array or object at the top** — edit that.

| What you want to change | File | Look for |
| --- | --- | --- |
| The 4 services (text + image) | `src/components/services/ServicesSection.jsx` | `SERVICES` |
| Footer links, emails, newsletter | `src/components/footer/Footer.jsx` | `CONTACTS`, `SOCIALS`, `NEWSLETTER`, `LEGAL` |
| The big footer wordmark | same file | `WORDMARK` |
| Client logos | `src/components/partners/PartnersSection.jsx` | `LOGOS` |
| Hero lines and their positions | `src/components/hero/HeroSection.jsx` | `HEADLINES`, `ANNOTATIONS` |
| Site title, description, SEO | `src/config/site.jsx` | — |

All images live in `public/` and are referenced as `/filename.svg`.

---

## The design frame (most important part for designers)

The hero layout is written in the exact pixel values from the **1440 px** Figma
artboard. The helper in `src/components/layout/frame.jsx` turns those pixels
into a share of the frame's current width:

```js
cq(215)   // exactly 215px at 1440, automatically 153px at 1024
```

In `HeroSection.jsx` two things always work as a pair:

```jsx
style={placeOnFrame(artwork)}   // Figma top/left/width/height -> CSS variables
className={ON_FRAME}            // reads those variables and does the positioning
```

So when a new element comes from Figma, just hand over its `top / left / width /
height` numbers — the helper does the rest. **Note:** every class in `ON_FRAME`
is prefixed with `lg:`, so this positioning only applies **above 1024px**. On
phones and tablets everything falls back to a normal stack.

---

## The services scroll animation

`ServicesSection.jsx` uses GSAP ScrollTrigger. The section pins to the screen
while the four panels slide sideways, and the orange curve drifts along more
slowly (parallax).

All the knobs sit together at the top of the file:

```js
const SCRUB = 0.6;         // 0 = instant, 0.5-1.5 = smooth, 3+ = floaty
const SPEED = 1.6;         // longer runway = less slide per wheel tick
const ORANGE_SHIFT = 0.35; // how far the orange moves (0 = still, 1 = same as panels)
const END_GAP = 0.1;       // breathing room after the last panel on mobile
const STAGE = "h-[100svh] md:h-[1200px] lg:h-[1920px]";
```

To debug, flip `markers: false` to `true` — GSAP will draw the start/end lines
on screen.

All four services share one component, `ServicePanel.jsx`. To add a service, add
one object to the `SERVICES` array; the scroll length adjusts itself.

---

## How responsive is handled

Mobile-first: the small-screen values come first, then `md:` (768+) and `lg:`
(1024+) carry the real Figma numbers.

```jsx
text-[30px] md:text-[52px] lg:text-[96px]
```

In other words, the `lg:` value is always the Figma one. The smaller values are
a proportionally scaled-down version of it.

---

## Four things worth knowing before you change anything

1. **The grid background belongs to the hero only** (`GridCanvas`), not to
   `<body>`. That's what keeps it from showing behind the other sections. Don't
   put it back on the body in `globals.css`.
2. **The orange focus outline is global**, set in `globals.css` for keyboard
   accessibility. If you need to drop it somewhere, use
   `focus-visible:outline-none` and always replace it with another visible focus
   cue.
3. **Files in `public/` are cached for a year** (`next.config.mjs`, `immutable`).
   If you replace an image you **must rename the file** (e.g. `orange-v2.svg`),
   otherwise returning visitors keep seeing the old one.
4. **Fonts:** Anton (`font-anton`) is for large display text only, Inter
   (`font-inter`) for everything else. The brand colour is `text-brand` /
   `bg-brand` (#FF4200).

---

## Stack

Next.js 16 (Turbopack) · React 19 · Tailwind v4 · GSAP + ScrollTrigger ·
lucide-react (icons) · Next `<Image>` (automatic AVIF/WebP)
