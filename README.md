# Myzek Technologies — Website Scaffold

A basic React project structure with all main pages wired up and empty,
ready for content. Built with React + React Router (Vite).

## Pages & URLs (also the nav bar)

| Page            | URL               | File                          |
|-----------------|--------------------|-------------------------------|
| Home            | `/`                | `src/pages/Home.jsx`          |
| About Us        | `/about`           | `src/pages/About.jsx`         |
| Products        | `/products`        | `src/pages/Products.jsx`      |
| Applications    | `/applications`    | `src/pages/Applications.jsx`  |
| Contact Us      | `/contact`         | `src/pages/Contact.jsx`       |
| Request Sample  | `/request-sample`  | `src/pages/RequestSample.jsx` |
| 404 fallback    | any unmatched URL  | `src/pages/NotFound.jsx`      |

"Request Sample" is not in the main nav — it's the amber button on the
right of the navbar, since it's an optional/CTA action rather than a
core section.

## Structure

```
myzek-technologies/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx          # app entry
│   ├── App.jsx            # routes live here
│   ├── index.css          # design system: colors, type, spacing
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Products.jsx
│       ├── Applications.jsx
│       ├── Contact.jsx
│       ├── RequestSample.jsx
│       └── NotFound.jsx
```

Every page is intentionally empty — each has its header/hero shell and
HTML comments marking where each piece of content goes (e.g.
`{/* Company overview goes here */}`), matching the sections in your
brief (banner, company overview, honors/certificates, product
categories, contact locations, etc).

## Design choices made for you

- **Colors:** steel-plate navy (`#123a5c` / `#0a2338`) as the primary,
  signal amber (`#e8871e`) as the accent — an industrial/engineering
  feel that suits a manufacturing/technology brand. All colors are
  CSS variables at the top of `src/index.css`, so swapping them later
  (once your real brand colors are decided) means editing one place.
- **Type:** Oswald (condensed, technical) for headings, Inter for body
  copy, IBM Plex Mono for small labels/eyebrows — loaded via Google
  Fonts in `index.html`.
- **Spacing:** a consistent 4px-based scale (`--space-1` … `--space-8`)
  used everywhere so margins/padding stay uniform as pages fill in.
- **Signature detail:** the homepage hero has a diagonal "cut plate"
  edge with a thin amber seam — a nod to sheet-metal fabrication.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Next steps

Send over the content from your brief (logo, tagline, product list,
images, contact details, etc.) and it can be dropped straight into the
matching comment blocks in each page file.
