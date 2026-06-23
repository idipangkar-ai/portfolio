# Features

This document covers user-facing behavior present in the current codebase after the founder-first positioning rewrite.

## Home Page

The home page is composed in `client/src/pages/Home.jsx` and built from shared sections.

### Hero

- Introduces Dipangkar Hajong as a founder and product builder.
- Leads with his belief that access should be earned, not assumed.
- Establishes privacy, consent, and intentional access before introducing the product.
- Includes CTA paths to the founder story and contact page.
- Uses a refined Three.js background with pointer-responsive motion and reduced-motion support.

### Beliefs

- Explains why communication systems matter.
- Frames privacy and consent as founder beliefs rather than feature claims.
- Presents principles such as visibility is not permission, trust as architecture, intentional access, and privacy by default.
- Links to the full founder story on `/about`.

### Questions That Shaped KuthaKo

- Presents founder thinking as a decision journal rather than an FAQ.
- Uses Problem, Decision, and Principle framing for each item.
- Explains how product principles shaped rules such as single-use QR codes, expiring requests, one pending request, separation of visibility from messaging, and new QR requirements for reconnection.
- Connects product reasoning to systems thinking without exposing implementation details as interview-style engineering answers.

### Product Showcase

- Presents product work as proof of the founder thesis.
- Keeps KuthaKo as the flagship case study without turning the page into a product landing page.
- Explains the problem, insight, and system design behind consent-based communication.
- Uses project data from `client/src/data/portfolio.js`.

### Capabilities

- Replaces generic skill-wall language with founder capability language.
- Highlights product thinking, systems thinking, founder-led execution, and human-centric design.
- Uses shared design-system cards and reveal motion.

### Contact CTA

- Invites discussion around privacy-first technology, product ideas, and better communication systems.
- Avoids hire-me language and generic project solicitation.

## About Page

The about page is composed in `client/src/pages/About.jsx`.

- Presents Dipangkar as a founder with a belief-led product thesis.
- Explains why communication systems, privacy, and consent matter.
- Uses a timeline to describe the founder journey, beliefs, consent model, and long-term vision.
- Presents technologies and product concepts as part of a privacy-first operating system.
- Lists guiding principles such as visibility is not permission, trust as architecture, intentional access, and privacy by default.

## Projects Page

The projects page is composed in `client/src/pages/Projects.jsx`.

- Treats KuthaKo as the flagship case study.
- Documents why it exists, what insight led to it, and what systems were designed.
- Presents related product systems such as the consent-based access model and human-centric communication direction.
- Uses shared `ProjectShowcase`, `Card`, `Badge`, and `Button` primitives.

## Contact Page

The contact page is composed in `client/src/pages/Contact.jsx`.

- Invites conversations about product ideas, privacy-first technology, collaboration, and consent-based access.
- Provides direct email, phone label, and location information from `client/src/constants/site.js`.
- Includes a local validation form for name, email, and message.
- Displays a success message after local validation.

Current limitation: the form validates locally only. A secure form service or API endpoint is still required for production message delivery.

## Navigation

- Header navigation links to home, about, projects, and contact.
- Active navigation state is theme-aware.
- Mobile navigation is handled through the shared responsive header.
- Legacy routes redirect to canonical routes through `client/src/App.jsx`.

## Theme And Accessibility Features

- Supports light, dark, midnight, aurora, and system themes.
- Persists theme selection in local storage.
- Prevents theme flash with an inline pre-hydration script.
- Uses semantic color tokens for text, surfaces, buttons, navigation states, and inputs.
- Includes visible focus states and reduced-motion support.

## Interactive Elements

- Theme switcher controls.
- Route page transitions.
- Scroll-triggered reveals.
- Three.js hero background.
- Contact form validation feedback.
- Shared hover and focus states from the design system.
