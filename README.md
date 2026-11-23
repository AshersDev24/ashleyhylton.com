# ashleyhylton.com

Portfolio site for Ashley Hylton, full-stack TypeScript engineer in Nottingham, UK.

**Live:** https://ashleyhylton.com

## Stack

- Next.js (App Router), React and TypeScript; every page is statically generated
- Plain CSS with design tokens per theme (`src/app/globals.css`), dark by default with a remembered light option
- Fonts self-hosted with `next/font`: Space Grotesk, Inter, JetBrains Mono
- Vitest and React Testing Library for components; Playwright with axe for every route
- GitHub Actions runs lint, types, unit tests, the build and the end-to-end tests on every pull request

## Structure

```
src/app/            routes: /, /projects, /projects/bublhub, /projects/tea-powered-projects,
                    /about, /contact, /cv, plus sitemap, robots and the OG image (/og.png)
src/components/     header, footer, theme toggle, copy email, timeline and small shared pieces
src/content/        facts used on more than one page, and the route list
src/lib/            page metadata (seo.ts) and theme helpers (theme.ts)
e2e/                Playwright smoke and accessibility tests
public/             the CV PDF (no phone number: keep it that way)
```

## Development

```bash
npm install
npm run dev            # http://localhost:3000
npm run lint
npm run typecheck
npm test               # Vitest
npm run build
npm run test:e2e       # Playwright against the production build on :3100
```

The first Playwright run needs a browser: `npx playwright install chromium`.
