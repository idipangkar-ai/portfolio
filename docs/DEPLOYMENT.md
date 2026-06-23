# Deployment

The project is a static Vite React app. It can be deployed to any host that can serve static files and rewrite unknown routes to the SPA entry point.

## Local Requirements

- Node.js compatible with Vite 7.
- npm.

Install dependencies from the client directory:

```bash
cd client
npm install
```

## Vite Build Process

The build command is defined in `client/package.json`:

```bash
npm run build
```

This runs:

```bash
vite build
```

Vite will:

- Use `client/index.html` as the HTML entry.
- Load `src/main.jsx`.
- Compile React through `@vitejs/plugin-react`.
- Process Tailwind CSS through `@tailwindcss/vite`.
- Bundle imported source assets.
- Copy/use public assets from `client/public`.
- Emit production output to `client/dist`.

## Preview Production Build

```bash
cd client
npm run build
npm run preview
```

## Netlify

Configuration file: [`client/netlify.toml`](../client/netlify.toml)

```toml
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

Recommended Netlify settings:

- Base directory: `client`
- Build command: `npm run build`
- Publish directory: `client/dist` if configured from repository root, or `dist` if the Netlify base directory is `client`

Deployment command:

```bash
cd client
npm run build
```

The redirect rule is required because React Router uses browser history routes such as `/aboutdetail`.

## Vercel

Configuration file: [`client/vercel.json`](../client/vercel.json)

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Recommended Vercel settings:

- Root directory: `client`
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

Deployment command:

```bash
cd client
npm run build
```

The rewrite rule ensures deep links load the SPA shell and are resolved by React Router.

## Generic Static Host

```bash
cd client
npm run build
```

Upload the contents of `client/dist` to the host. Configure the host to serve `index.html` for all unknown paths.

Example fallback rule:

```text
/* -> /index.html
```

## Environment Variables

No environment variables were found in the current codebase. There are no API URLs, tokens, or service keys referenced in source files.

## Deployment Checklist

- Run `npm install` in `client`.
- Run `npm run lint`.
- Run `npm run build`.
- Verify `/`, `/aboutdetail`, `/projectdetail`, and `/contactdetail` after deployment.
- Verify 3D model loading from `/assets/3d/ufo.glb`.
- Verify favicon loads from `/favic.svg`.
- Add `client/public/Dipangkar_CV.pdf` or update the CV links before publishing if downloads are required.

