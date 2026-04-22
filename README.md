# AdmanCorp.com

Static-first website for Adman Inc., built with Astro and intended for deployment on Cloudflare Pages.

## Stack

- Astro
- Custom CSS
- GitHub Actions for build checks
- Cloudflare Pages for hosting

## Scripts

- `npm run dev` starts the local development server
- `npm run check` runs Astro type and content checks
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the built site locally

## Project structure

- `src/pages` contains route files
- `src/components` contains shared UI pieces
- `src/layouts` contains shared page layout wrappers
- `src/styles` contains global styling and design tokens
- `src/content` is reserved for future project and writing content
- `public` contains static assets

## Deployment

Cloudflare Pages should be configured with:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20`

Production deploys should track `main`, with preview deployments enabled for pull requests.
