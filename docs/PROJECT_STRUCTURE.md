# Project Structure

The active app is a Vite React founder site for Dipangkar Hajong and KuthaKo in `client/`.

```text
Portfolio/
├── docs/
│   ├── MIGRATION_SUMMARY.md
│   └── ...
└── client/
    ├── public/
    │   ├── favic.svg
    │   └── assets/screenshots/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── index.css
    │   ├── assets/images/
    │   ├── components/
    │   │   └── ui/
    │   ├── constants/
    │   ├── data/
    │   ├── hooks/
    │   ├── layouts/
    │   ├── pages/
    │   ├── sections/
    │   └── styles/
    ├── package.json
    ├── vite.config.js
    ├── netlify.toml
    └── vercel.json
```

## Major Directories

- `components/`: Small reusable UI primitives such as `Button`, `Header`, `Footer`, and `Reveal`.
- `components/ui/`: Design-system primitives: `Button`, `Card`, `Container`, `Section`, `Badge`, `ThemeSwitcher`, and `Surface`.
- `constants/`: Site metadata and navigation constants.
- `data/`: Project, capability, timeline, technology, and principle content.
- `hooks/`: Shared interaction hooks such as reduced-motion detection and reveal animation props.
- `layouts/`: Application shell and shared route layout.
- `pages/`: Route-level page components.
- `sections/`: Large page sections used to compose the founder and product narrative.
- `styles/`: Design tokens and global CSS architecture.
- `assets/images/`: The three active project showcase images.
- `public/assets/screenshots/`: README/documentation screenshots retained from the previous project.

Removed legacy folders included duplicate navs, placeholder components, old detail-page modules, glow-heavy CSS, unused GLBs, and unused background images.
