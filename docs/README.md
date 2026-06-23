# Founder Site Documentation

This documentation tracks the premium founder-site experience for Dipangkar Hajong, including the beliefs, product thesis, and flagship KuthaKo case study.

## Current App

- Frontend-only React 19 application.
- Vite 7 build system.
- Tailwind CSS 4 styling.
- Framer Motion page and scroll reveals.
- Dynamically imported raw Three.js hero background.
- Canonical routes: `/`, `/about`, `/projects`, `/contact`.
- Founder, product, and case-study content in `client/src/data/portfolio.js`.

## Key Docs

- `CONTENT_STRATEGY.md`: Founder positioning, belief hierarchy, brand voice, product narrative, and CTA language.
- `MIGRATION_SUMMARY.md`: What changed in the premium refactor.
- `DESIGN_SYSTEM.md`: Theme, token, primitive, motion, and accessibility architecture.
- `PROJECT_STRUCTURE.md`: Current folder structure.
- `ROUTING.md`: Current route model and redirects.
- `PERFORMANCE.md`: Current optimization status.
- `IMPROVEMENTS.md`: Remaining backlog.

## Verification

From `client/`:

```bash
npm run lint
npm run build
```

Both checks pass after the refactor.
