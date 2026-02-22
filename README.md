# nwdjs — Noteworthy DJs Website (Next.js)

Rebuilt from `noteworthydj-website/` using Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
nwdjs/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── page.tsx                  # Homepage (/)
│   │   ├── layout.tsx                # Root layout (nav, footer, GTM)
│   │   ├── globals.css
│   │   ├── faqs/page.tsx
│   │   ├── vendors/page.tsx          # Awesome Vendors
│   │   ├── contact/thank-you/page.tsx
│   │   ├── team/[slug]/page.tsx      # Dynamic DJ bio pages
│   │   ├── photo-booth/
│   │   │   ├── add-ons/page.tsx
│   │   │   ├── backdrops/page.tsx
│   │   │   ├── prints/
│   │   │   │   ├── 2x6/page.tsx
│   │   │   │   └── 4x6/page.tsx
│   │   │   └── monograms/
│   │   │       ├── animated/page.tsx
│   │   │       ├── static/page.tsx        # TODO
│   │   │       └── special-occasion/      # TODO
│   │   └── services/
│   │       ├── dj-mc/page.tsx             # TODO
│   │       ├── atmospheric/page.tsx       # TODO
│   │       └── decor-lighting/page.tsx    # TODO
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── BookWithConfidence.tsx     # Trust badges
│   │   │   └── ContactSection.tsx        # Contact form + address
│   │   └── checkcherry/
│   │       └── CheckCherryWidgets.tsx    # All CC embeds in one place
│   │
│   ├── data/                          # Edit content here
│   │   ├── team.ts                    # DJ bios
│   │   ├── vendors.ts                 # Preferred vendors
│   │   └── faqs.ts                    # FAQ content
│   │
│   ├── lib/
│   │   └── constants.ts               # Site info, CC config, nav, badges
│   │
│   └── types/
│       └── index.ts                   # TypeScript interfaces
│
├── public/
│   └── images/                        # Copy assets from noteworthydj-website/img/
│       ├── logo/
│       ├── badges/
│       ├── team/
│       └── homepage/
│
└── README.md
```

---

## Content Updates

All content lives in `src/data/` and `src/lib/constants.ts` — no code changes needed
for most updates:

| What to update | Where |
|---|---|
| DJ bios | `src/data/team.ts` |
| Vendors | `src/data/vendors.ts` |
| FAQs | `src/data/faqs.ts` |
| Nav links | `src/lib/constants.ts` → `NAV_ITEMS` |
| Phone / email / address | `src/lib/constants.ts` → `SITE` |
| Trust badges | `src/lib/constants.ts` → `BADGES` |
| Check Cherry API key / form ID | `src/lib/constants.ts` → `CC_CONFIG` |

---

## Song Lists (DJ Intelligence Charts)

The Song Ideas page (`/song-ideas`) displays charts pulled from DJ Intelligence. Because
the DJ Intelligence server blocks requests from build servers, the chart data is
**pre-fetched and committed as JSON cache files** in `src/data/charts/`. The build
reads those files directly — no network call needed.

### Refreshing the song lists

Run this locally whenever you want to pull updated charts:

```bash
node scripts/fetchCharts.mjs
```

This fetches the four PDFs from DJ Intelligence, parses them, and writes:
- `src/data/charts/party.json`
- `src/data/charts/wedding.json`
- `src/data/charts/combined.json`
- `src/data/charts/donotplay.json`

Then commit and push the updated files:

```bash
git add src/data/charts/*.json
git commit -m "Refresh song charts"
git push origin updates
```

DeployHQ will pick up the new data on the next build automatically.

---

## Check Cherry Widgets

All widget types are in `CheckCherryWidgets.tsx`. The script is loaded once via
`useEffect` and won't duplicate on the page.

**Contact form** — used on bio pages, contact page:
```tsx
<CheckCherryContactForm />
```

**Gallery widgets** — used on backdrops, prints, add-ons pages:
```tsx
<CheckCherryGallery widgetType="add-on-gallery" showPrice />
<CheckCherryGallery widgetType="design-template-gallery" categoryId={1275} />
<CheckCherryGallery widgetType="photobooth-background-gallery" showPrice />
```

---

## Migrating Assets

Copy your image folder from the old site:
```bash
cp -r noteworthydj-website/img/* nwdjs/public/images/
```

Then update image paths in components from `./img/...` to `/images/...`.

---

## TODO (pages still to build out)

- `services/dj-mc` — DJ & MC service detail page
- `services/atmospheric` — Atmospheric effects page  
- `services/decor-lighting` — Décor & lighting page
- `photo-booth/monograms/static` — Static monograms
- `photo-booth/monograms/special-occasion` — Special occasion monograms
- `awards` — Awards page
- `terms-and-conditions` — Legal page
- `privacy-policy` — Legal page
- Homepage sections: hero carousel, services grid, how-it-works, team grid, gallery
- Blog (if adding)

## Deployment

Recommended: **Vercel** (zero config for Next.js)  
Alternative: DeployHQ works too — set build command to `npm run build`, output to `.next`.
