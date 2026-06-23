# Design System

This portfolio now uses a scalable design foundation inspired by Apple, Linear, Vercel, Arc Browser, Stripe, and modern SaaS products.

## Architecture

```text
client/src/
├── styles/
│   ├── tokens.css
│   ├── themes.css
│   ├── typography.css
│   ├── animations.css
│   └── globals.css
├── constants/
│   ├── themes.js
│   └── designTokens.js
└── components/ui/
    ├── Button.jsx
    ├── Card.jsx
    ├── Container.jsx
    ├── Section.jsx
    ├── Badge.jsx
    ├── ThemeSwitcher.jsx
    └── Surface.jsx
```

## Theme Architecture

Themes are CSS-variable driven. The active theme is applied on `document.documentElement` through `data-theme`.

Supported preferences:

- `system`: follows the operating system color scheme.
- `light`: Apple-inspired bright theme.
- `dark`: default premium graphite theme.
- `midnight`: deep navy Linear-inspired theme.
- `aurora`: subtle premium accent-gradient theme.

The selected preference is stored in `localStorage` under `portfolio-theme`. A small inline script in `client/index.html` applies the resolved theme before React loads, preventing a visible theme flash.

## Token System

Core tokens live in `client/src/styles/tokens.css`.

Token groups:

- Colors: background, surface, elevated surface, text primary, text secondary, accent, border, success, warning, error.
- Typography: display, heading, title, body, lead, caption.
- Radius: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`.
- Shadows: soft, medium, large, glass.
- Spacing: `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64`, `96`, `128`.
- Motion: fast, normal, slow durations plus standard, smooth, and premium easing curves.

JavaScript references live in `client/src/constants/designTokens.js` for components or future tooling that need token names.

## Component Primitives

- `Button`: shared link/button primitive with `primary`, `secondary`, and `ghost` variants.
- `Card`: content container built on top of `Surface`.
- `Container`: consistent page width and gutter primitive.
- `Section`: vertical rhythm and container composition primitive.
- `Badge`: compact metadata/status primitive.
- `Surface`: base primitive for surface levels.
- `ThemeSwitcher`: persisted global theme control with System mode.

All visible pages now compose through these primitives instead of custom one-off card or button implementations.

## Premium Surface System

Surface levels:

- `base`: default subtle panel.
- `elevated`: stronger panel with soft shadow.
- `floating`: navigation and prominent floating surfaces.
- `glass`: subtle glassmorphism with blur and inset highlight.

Use glass sparingly for hero, feature, and high-emphasis moments. Use base/elevated surfaces for repeated content.

## Color Palette

Each theme maps the same semantic tokens:

- `--color-background`
- `--color-surface`
- `--color-surface-elevated`
- `--color-surface-floating`
- `--color-surface-glass`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-tertiary`
- `--color-accent`
- `--color-accent-foreground`
- `--color-border`
- `--color-nav-active`
- `--color-nav-active-foreground`
- `--color-button-primary`
- `--color-button-primary-foreground`
- `--color-success`
- `--color-warning`
- `--color-error`

Pages should use semantic tokens, not raw color values.

## Typography Scale

Reusable classes:

- `.text-display`: hero-scale headline.
- `.text-heading`: section-level headline.
- `.text-title`: card and panel title.
- `.text-lead`: prominent supporting copy.
- `.text-body`: standard content copy.
- `.text-caption`: compact metadata.
- `.text-eyebrow`: uppercase label when a `Badge` is not appropriate.

Avoid arbitrary font sizes in page code unless a new reusable type role is being introduced.

## Motion Principles

Motion should feel premium, not demonstrative.

- Use scroll reveals for hierarchy and pacing.
- Use page transitions for continuity.
- Use hover motion only when it clarifies interactivity.
- Keep durations tokenized.
- Prefer `--ease-premium` for expressive transitions and `--ease-smooth` for theme/UI changes.
- Respect `prefers-reduced-motion`.

The Three.js hero is dynamically imported and pauses rendering when the tab is hidden.

## Accessibility Considerations

- Theme switcher buttons include accessible labels and titles.
- Focus states use accent-colored visible rings.
- System theme follows OS preference.
- Reduced motion is respected across CSS and shared reveal hooks.
- Color roles are semantic, making contrast review easier across themes.
- Icon-only controls include `aria-label`.
- Active navigation, button, badge, input, and theme-switcher states were checked across Light, Dark, Midnight, Aurora, and System themes.

Before production, run contrast checks for every theme and verify keyboard navigation for mobile navigation plus the theme switcher.

## Visual QA Notes

The theme QA pass found two issues:

- Active/button foreground and background tokens were coupled to generic text/background tokens, which made the design fragile across light and dark themes.
- `.text-caption` applied a muted color directly, overriding semantic badge foreground colors.

Fixes applied:

- Added dedicated semantic tokens for active nav and primary buttons.
- Added contrast-safe foreground tokens.
- Moved active nav and button visuals into semantic CSS classes.
- Removed color from `.text-caption`; components now opt into their intended semantic color.
- Added a shared `.focus-ring` utility for keyboard-visible focus states.
