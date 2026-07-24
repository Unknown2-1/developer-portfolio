# Danish — Hyperglass Developer Portfolio

Personal portfolio for **Danish**, a full-stack product builder based in Indonesia. The experience is built around a dark iOS-inspired hyperglass system: layered translucent surfaces, refraction-like gradients, ambient motion, responsive depth, and a deliberately quiet editorial rhythm.

## What changed in this edition

- Hyperglass navigation pill with responsive mobile drawer
- Hero scene with a floating glass orb, refraction rings, status cards, and pointer glow
- Scroll-triggered reveal motion with reduced-motion support
- Project cards with interactive visual windows, hover parallax, and case-study links
- Project lineup matched to Danish's public GitHub profile
- Bilingual English / Indonesian copy
- Dark, light, and system theme modes
- Responsive layout designed for phone, tablet, and desktop
- Accessible focus states, semantic sections, skip link, and labelled controls

## Featured work

### VaultShare

Privacy-focused secure file sharing with encrypted storage, expiring links, access controls, malware scanning, audit logs, and workspace collaboration.

- Stack: Next.js, ASP.NET Core, PostgreSQL, ClamAV, Docker
- Security: AES-256-GCM envelope encryption, hashed share tokens, fail-closed scanning
- Source: [github.com/Unknown2-1/secure-file-sharing-platform](https://github.com/Unknown2-1/secure-file-sharing-platform)

### UMKM POS & Inventory

Production-style point of sale and inventory management for Indonesian MSMEs, including tax-aware calculations, stock ledgers, purchase orders, RBAC, and audit trails.

- Stack: Laravel, Livewire, Alpine.js, SQLite, Chart.js
- Source: [github.com/Unknown2-1/umkm-pos-inventory](https://github.com/Unknown2-1/umkm-pos-inventory)

### Arus Finance

An editorial personal-finance workspace for understanding cash flow, budgets, transactions, and targets with less spreadsheet fatigue.

- Stack: Next.js, React, TypeScript, browser storage
- Live demo: [arus-finance.spork-uplift-9b175am.chatgpt.site](https://arus-finance.spork-uplift-9b175am.chatgpt.site)
- Source: [github.com/Unknown2-1/arus-finance](https://github.com/Unknown2-1/arus-finance)

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Run TypeScript checks |
| `npm run test` | Run the Vitest suite |
| `npm run test:e2e` | Run Playwright browser tests |

## Project structure

```text
src/
├── app/                         # App Router pages and global metadata
├── components/layout/           # Hyperglass header and footer
├── components/sections/         # Portfolio experience and supporting sections
├── components/ui/               # Theme and language controls
├── config/                      # Site and project data
└── messages/                    # English and Indonesian translations
public/projects/                 # Project screenshots and visual assets
```

## Design system

- Canvas: graphite / midnight with soft ambient color fields
- Surfaces: translucent glass with blur, saturation, inset highlights, and deep shadows
- Accents: periwinkle, cyan, peach, and mint status green
- Motion: CSS spring easing, pointer-following light, orbital shapes, marquee, reveal-on-scroll
- Type: Inter for product copy, Fira Code for labels and system metadata

Motion automatically falls back to a reduced-motion experience when the visitor's operating system requests it.

## Deployment

The project is ready for Vercel or any Next.js-compatible host:

```bash
npm run build
npm run start
```

## License

MIT © Danish
