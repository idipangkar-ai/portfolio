# Components

This document inventories the current React components. Props are listed where components receive external inputs. Most page and section components are self-contained and read static arrays from the same file.

## Pages

### `pages/Home.jsx`

- Purpose: Main portfolio landing page.
- Props: None.
- Dependencies: `MagicMouse`, `Header/Navbar`, `sections/Hero`, `components/Feature/Feature`, `sections/About`, `sections/Projects`, `SkillCard/SkillsCard`, `Common/Footer`.
- Usage: Rendered at `/`.
- Notes: Imports `ParallaxProvider` but does not render it.

### `pages/AboutDetail.jsx`

- Purpose: Detailed profile page.
- Props: None.
- Dependencies: `Header/Navbar`, `AboutHero`, `Education`, `WorkExperience`, `QuickStats`, `TechStack`, `Ufo`, `Common/Footer`.
- Usage: Rendered at `/aboutdetail`.

### `pages/ProjectDetails.jsx`

- Purpose: Detailed project gallery page.
- Props: None.
- Dependencies: `Header/Navbar`, `ProjectGallery`, `Common/Footer`.
- Usage: Rendered at `/projectdetail`.

### `pages/ContactDetails.jsx`

- Purpose: Contact page wrapper.
- Props: None.
- Dependencies: `Header/Navbar`, `ContactDetail`.
- Usage: Rendered at `/contactdetail`.
- Notes: Does not render the shared footer.

## Routing And Layout

### `App.jsx`

- Purpose: Defines the React Router browser route tree and renders `RouterProvider`.
- Props: None.
- Dependencies: `createBrowserRouter`, `RouterProvider`, `Layout`, route pages.
- Usage: Rendered by `main.jsx`.

### `ui/Layout.jsx`

- Purpose: Shared route shell.
- Props: None.
- Dependencies: `Outlet` from React Router.
- Usage: Parent element for all app routes.
- Notes: Only renders an outlet. Header/footer are page-level, not layout-level.

## Header

### `components/Header/Navbar.jsx`

- Purpose: Active navigation bar with desktop links, mobile left menu drawer, mobile right settings drawer, overlay, logo/avatar, social links, and CTA.
- Props: None.
- Dependencies: `useState`, `Link`, Feather icons from `react-icons/fi`.
- Usage: Rendered by all current pages.
- Important behavior: `isLeftOpen` and `isRightOpen` control mobile drawer visibility.
- Known issue: Some mobile and CTA links point to undefined routes (`/about`, `/projects`, `/contact`) while desktop links point to the defined detail routes.

### `components/Navbar.jsx`

- Purpose: Legacy duplicate navbar.
- Props: None.
- Dependencies: Same broad dependencies as `Header/Navbar.jsx`.
- Usage: No current import found in active pages.
- Notes: Contains route casing/path mismatches such as `/AboutDetail`, `/projects`, and `/contact`.

## Home Sections

### `sections/Hero.jsx`

- Purpose: Full-screen hero with animated Three.js starfield, text overlay, and CV/recent-work buttons.
- Props: None.
- Dependencies: React refs/effects, `three`, `@tweenjs/tween.js`, `react-icons/fi`.
- Usage: Rendered on `Home`.
- Asset usage: Links to `/Dipangkar_CV.pdf`; the file was not found in `public`.
- Notes: Creates and disposes a WebGL renderer manually.

### `components/Feature/Feature.jsx`

- Purpose: Active feature grid for "What I do?" with UI design, UX research, AI integration, and text gradient cards.
- Props: None.
- Dependencies: `framer-motion`, `react-icons`, `FeatureWithAnimation.css`.
- Usage: Rendered on `Home`.
- Data source: Local `cardData2`, `cardData3`, and `cardData4` arrays.

### `sections/About.jsx`

- Purpose: Home-page about preview with avatar, descriptive text, skill chips, tilt interaction, and links to about details.
- Props: None.
- Dependencies: `react-parallax-tilt`, `framer-motion`, `Link`.
- Usage: Rendered on `Home`.
- Data source: Local `skills` array.
- External assets: GitHub avatar, raw GitHub decorative background/logo/mail images.

### `sections/Projects.jsx`

- Purpose: Home-page live project showcase.
- Props: None.
- Dependencies: `React.lazy`, `Suspense`, `framer-motion`, `Link`, `LazyProjectCard`, local images.
- Usage: Rendered on `Home`.
- Data source: Local `projects` array with chatbot, dashboard, and SaaS entries.
- Notes: "ALL PROJECTS" and card buttons link to `/project`, which is not a defined route.

### `sections/LazyProjectCard.jsx`

- Purpose: Project card that fades based on intersection state and delays image rendering until in view.
- Props:
  - `project`: Object with `image`, `title`, `subtitle`, `description`, and `link`.
  - `index`: Number used to select glow class.
- Dependencies: `useInView`, `Link`, `FiArrowRight`.
- Usage: Lazy-loaded by `sections/Projects.jsx`.

### `components/SkillCard/SkillsCard.jsx`

- Purpose: Animated skills icon grid with tilt effects and final CTA card.
- Props: None.
- Dependencies: `useMemo`, `react-parallax-tilt`, `framer-motion`, `useInView`, `react-icons`.
- Usage: Rendered on `Home`.
- Data source: Local `baseSkills` array.
- Notes: Calls `useInView` inside a `.map()` callback. This works only while the array length/order is stable; extracting each card to a child component would be safer.

### `components/Common/Footer.jsx`

- Purpose: Shared footer with about text, quick links, contact details, social icons, and copyright.
- Props: None.
- Dependencies: `Link`, social icons.
- Usage: Rendered on home, about detail, and project detail pages.

## About Detail

### `components/AboutDetail/AboutHero.jsx`

- Purpose: About-detail hero with floating tech icons, typed text, animated text/image columns, and CTA button.
- Props: None.
- Dependencies: `framer-motion`, `react-typed`, `react-icons`.
- Usage: Rendered on `AboutDetail`.
- External asset: Unsplash image URL.
- Notes: Imports `./AboutHero` instead of `./AboutHero.css`.

### `components/AboutDetail/Education.jsx`

- Purpose: Education timeline/cards with separate mobile and desktop layouts.
- Props: None.
- Dependencies: `framer-motion`.
- Usage: Rendered on `AboutDetail`.
- Data source: Static JSX card content.

### `components/AboutDetail/WorkExperience.jsx`

- Purpose: Work experience cards with separate mobile and desktop layouts.
- Props: None.
- Dependencies: `framer-motion`.
- Usage: Rendered on `AboutDetail`.
- Data source: Static JSX card content.
- Export name: Component is named `WorkingExperience` but imported as `WorkExperience`, which is valid because it is a default export.

### `components/Common/QuickStats.jsx`

- Purpose: Renders summary stat cards.
- Props: None.
- Dependencies: `StatCard`.
- Usage: Rendered on `AboutDetail`.

### `components/Common/StatCard.jsx`

- Purpose: Reusable stat display.
- Props:
  - `number`: Displayed metric value.
  - `label`: Metric label.
  - `accent`: Optional Tailwind class for the number color.
- Dependencies: None beyond React.
- Usage: Used by `QuickStats`.

### `components/AboutDetail/TechStack.jsx`

- Purpose: Animated floating technology icons with background glow effects.
- Props: None.
- Dependencies: `framer-motion`, `react-icons`.
- Usage: Rendered on `AboutDetail`.
- Data source: Local `techIcons` array.

### `components/AboutDetail/Ufo.jsx`

- Purpose: React Three Fiber section with stars, sparkles, UFO GLB model, comet animation, lights, and orbit controls.
- Props: None.
- Dependencies: `@react-three/fiber`, `@react-three/drei`, `three`.
- Usage: Rendered on `AboutDetail`.
- Asset usage: Loads `/assets/3d/ufo.glb` from `public`.
- Notes: Imports `Vector3` but does not use it.

## Project Detail

### `components/ProjectDetail/ProjectGallery.jsx`

- Purpose: Composes all project-gallery sections.
- Props: None.
- Dependencies: `ToursSection`, `GamingSection`, `PortfolioSection`.
- Usage: Rendered on `ProjectDetails`.

### `components/ProjectDetail/ProjectSection.jsx`

- Purpose: Generic section renderer for a title, optional subtitle, and a card grid.
- Props:
  - `title`: Section heading.
  - `subtitle`: Optional section description.
  - `cards`: Array of card data.
- Dependencies: `ProjectCard`.
- Usage: Used by tours, gaming, and portfolio sections.

### `components/ProjectDetail/ProjectCard.jsx`

- Purpose: Animated project card with image, title, description, and two action buttons.
- Props:
  - `image`
  - `title`
  - `description`
  - `btn1Text`
  - `btn2Text`
  - `onBtn1Click`
  - `onBtn2Click`
- Dependencies: `framer-motion`.
- Usage: Rendered by `ProjectSection`.

### `components/ProjectDetail/ToursSection.jsx`

- Purpose: Project section themed around travel/tours.
- Props: None.
- Dependencies: `ProjectSection`, local images.
- Usage: Rendered by `ProjectGallery`.
- Data source: Local `toursData` array.

### `components/ProjectDetail/GamingSection.jsx`

- Purpose: Project section themed around games.
- Props: None.
- Dependencies: `ProjectSection`, local images.
- Usage: Rendered by `ProjectGallery`.
- Data source: Local `gamingData` array.

### `components/ProjectDetail/PortfolioSection.jsx`

- Purpose: Project section themed around crafted portfolio/full-stack projects.
- Props: None.
- Dependencies: `ProjectSection`, local images.
- Usage: Rendered by `ProjectGallery`.
- Data source: Local `portfolioData` array.

### `components/ProjectDetail/ProjectTags.jsx`

- Purpose: Displays a list of tag pills or a fallback message.
- Props:
  - `tags`: Array of string tags.
- Usage: No active import found.

### `components/ProjectDetail/ProjectTechStack.jsx`

- Purpose: Displays tech stack icons and names or a fallback message.
- Props:
  - `techs`: Array of objects with `icon` and `name`.
- Usage: No active import found.

### `components/ProjectDetail/ProjectDescription.jsx`

- Purpose: Commented-out placeholder for a project overview block.
- Usage: No active implementation.

### `components/ProjectDetail/CardAnimeVeriant.js`

- Purpose: Shared Framer Motion card variant object.
- Usage: No active import found.

### `components/ProjectDetail/index.js`

- Purpose: Barrel exports for project detail components.
- Notes: Exports several modules that do not exist in the current tree (`ProjectList`, `ProjectHeader`, `ProjectNav`). Importing those exports would fail.

## Contact Detail

### `components/ContactDetail/ContactDetail.jsx`

- Purpose: Contact form with name, email, message, validation, character count, submit handler, and desktop debug panel.
- Props: None.
- Dependencies: `useState`.
- Usage: Rendered on `ContactDetails`.
- Behavior: Email is validated with a simple regex. Submit prevents default and logs form data to the console.
- Notes: No network submission, email service, or persistence is implemented.

## Animation And Visual Utilities

### `components/MagicMouse.jsx`

- Purpose: Full-window canvas cursor trail.
- Props: None.
- Dependencies: Canvas 2D API, `requestAnimationFrame`.
- Usage: Rendered on `Home`.
- Notes: The animation frame is not cancelled on cleanup.

### `components/ParallaxWrapper.jsx`

- Purpose: Framer Motion scroll transform wrapper.
- Props:
  - `children`
  - `offset`
  - `down`
- Dependencies: `useViewportScroll`, `useTransform`.
- Usage: Used by `MotionParallax`; no active page import found.

### `components/MotionParallax.jsx`

- Purpose: Combines `ParallaxWrapper` with a `motion.div`.
- Props:
  - `children`
  - `className`
  - `offset`
  - `down`
  - remaining motion props
- Usage: No active page import found.

### `components/PlanetsThree.jsx`

- Purpose: Standalone Three.js sun/earth orbit scene.
- Props: None.
- Usage: No active page import found.
- Notes: Cleanup removes only the resize listener, not the renderer DOM node or animation frame.

### `components/Galaxy.jsx` and `components/GalaxyCanvas.jsx`

- Purpose: Placeholder components returning text.
- Usage: No active import found.

### `components/ModalBot.jsx`

- Purpose: Placeholder component returning `ModalBot`.
- Usage: No active import found.

### `components/Sections.jsx`

- Purpose: Generic marketing-style placeholder section.
- Usage: No active import found.

## Legacy Sections

### `sections/Feature.jsx` and `sections/LazyFeatureCard.jsx`

- Purpose: Older feature-card implementation with lazy-loaded icons and lazy-loaded card component.
- Props:
  - `LazyFeatureCard` receives `card` with `gradientClass`, `icons`, `titles`, and `descriptions`.
- Usage: No active page import found; `Home.jsx` imports `components/Feature/Feature.jsx`.

### `sections/Contact.jsx`, `sections/Clock.jsx`, `sections/Footer.jsx`

- Purpose: Placeholder or minimal legacy sections.
- Usage: No active page import found.

