# Performance

## Implemented Improvements

- Route-level code splitting with `React.lazy`.
- Removed the 25 MB UFO GLB and all unused GLB assets.
- Removed React Three Fiber and Drei from the active dependency graph.
- Replaced the hero with a dynamically imported raw Three.js particle field.
- Pauses the Three.js render loop when the document is hidden.
- Caps renderer pixel ratio at `1.5`.
- Removed unused heavy dependencies including GSAP, typed text, parallax tilt, scroll parallax, and intersection observer.
- Removed large unused JPG assets.
- Added `prefers-reduced-motion` handling for UI motion and the hero background.

## Build Check

`npm run build` passes.

The remaining large chunk is `three.module`, emitted as an async chunk for the hero background. It is separated from the main app shell and no longer includes the removed GLB/UFO system.

## Lint Check

`npm run lint` passes.

## Remaining Opportunities

- Replace Three.js with a custom WebGL shader only if the visual can remain premium.
- Add image format conversion to AVIF/WebP.
- Add Lighthouse and visual regression checks.
- Add a production contact endpoint so the form does more than local validation.
- Review npm audit findings before production release.

