# Architecture

The project is a client-rendered React single-page application built with Vite. It has no visible backend, server routes, database layer, API client, state-management library, or SSR framework in the repository.

## Runtime Architecture

```mermaid
flowchart TD
  Browser[Browser] --> HTML[client/index.html]
  HTML --> Main[src/main.jsx]
  Main --> App[src/App.jsx]
  App --> Router[RouterProvider + createBrowserRouter]
  Router --> Layout[src/layouts/AppLayout.jsx]
  Layout --> Outlet[React Router Outlet]
  Outlet --> Home[Home Page]
  Outlet --> About[About Page]
  Outlet --> Projects[Projects Page]
  Outlet --> Contact[Contact Page]
```

## Application Layers

- Entry layer: `client/index.html` and `src/main.jsx`.
- Routing layer: `src/App.jsx` and `src/layouts/AppLayout.jsx`.
- Page layer: `src/pages/*`.
- Section layer: `src/sections/*` and feature-specific page sections in `src/components/*`.
- Presentation layer: React components, Tailwind utility classes, CSS modules/files, icon components, motion wrappers, canvas, and WebGL scenes.
- Static asset layer: `src/assets` for bundled assets and `public` for root-served assets.

## Page And Component Hierarchy

```mermaid
flowchart TD
  App --> Layout
  Layout --> Home
  Layout --> About
  Layout --> Projects
  Layout --> Contact

  Home --> HeroSection
  Home --> AboutPreview[Beliefs]
  Home --> ProductQuestionsSection[Questions That Shaped KuthaKo]
  Home --> ProjectShowcase
  Home --> CapabilitiesSection
  Home --> ContactCTA

  About --> FounderStory
  About --> BeliefTimeline
  About --> OperatingSystem
  About --> Principles
  About --> ContactCTA2[ContactCTA]

  Projects --> ProjectIntro
  Projects --> ProjectShowcase2[ProjectShowcase]
  Projects --> ProjectCards
  Projects --> ContactCTA3[ContactCTA]

  Contact --> ContactIntro
  Contact --> ContactForm
```

## Rendering Flow

```mermaid
sequenceDiagram
  participant Browser
  participant ViteHTML as index.html
  participant Main as main.jsx
  participant App as App.jsx
  participant Router as React Router
  participant Page as Route Page
  participant Components as Components

  Browser->>ViteHTML: Request application
  ViteHTML->>Main: Load /src/main.jsx
  Main->>App: Render <App />
  App->>Router: Provide route config
  Router->>Page: Match current URL
  Page->>Components: Compose sections/components
  Components-->>Browser: Render DOM, canvas, and WebGL scenes
```

## Data Flow

The app currently uses local component state and local structured content arrays.

- Routing state is managed by `react-router-dom`.
- Theme preference state lives in the shared header/theme switcher flow.
- Contact form state lives in `pages/Contact.jsx` through `useState`.
- Founder, product, belief, capability, and decision-journal content lives in `data/portfolio.js`.
- Project data arrays live in `sections/Projects.jsx`, `ProjectDetail/ToursSection.jsx`, `ProjectDetail/GamingSection.jsx`, and `ProjectDetail/PortfolioSection.jsx`.
- Skills and tech-icon arrays live in `SkillCard/SkillsCard.jsx`, `sections/About.jsx`, `AboutDetail/AboutHero.jsx`, and `AboutDetail/TechStack.jsx`.
- Three.js scene state is held in refs and effect-local variables in `sections/Hero.jsx`.
- React Three Fiber scene state is handled by the Canvas render loop and refs in `AboutDetail/Ufo.jsx`.

```mermaid
flowchart LR
  LocalArrays[Local arrays in components] --> Render[React render]
  UserEvents[User events] --> LocalState[useState / refs]
  LocalState --> Render
  Render --> DOM[DOM UI]
  Render --> Canvas[Canvas / WebGL]
  PublicAssets[public assets] --> Canvas
  SrcAssets[src/assets imports] --> Render
```

## Styling Architecture

The app mixes Tailwind utility classes with global CSS and component CSS files:

- `src/index.css` defines the global font import, color variables, body styles, gradient text, glass cards, glow borders, and shared utility classes.
- `src/components/Feature/FeatureWithAnimation.css` defines glow-box and gradient helper classes for the active feature grid.
- `src/sections/Projects.css` defines project card glow borders.
- `src/sections/Feature.css` supports the older lazy feature-card implementation.
- `src/components/AboutDetail/AboutHero.css` defines a `gradientBG` keyframe, but the CSS file is not directly imported as CSS by `AboutHero.jsx`; the current import is `import "./AboutHero";`, which resolves the component file rather than the `.css` file.

## Build Architecture

Vite bundles `src` imports, processes React through `@vitejs/plugin-react`, and integrates Tailwind through `@tailwindcss/vite`. Assets in `public` are copied/served as root-level static files.
