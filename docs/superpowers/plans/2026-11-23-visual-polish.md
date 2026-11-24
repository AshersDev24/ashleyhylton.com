# Visual Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give every project real imagery, put tool icons on the stack chips, add a faint top-of-page glow, a header that hides on scroll down, and reveal-on-scroll, without losing Lighthouse 95+ or any axe check.

**Architecture:** Server components draw the CSS-only frames (phone, browser, radar) around statically imported WebP images. There are three small client pieces: one observer that reveals `[data-reveal]` elements, one hook that hides the header, and the client strip with its pause button. Motion lives only in CSS under `prefers-reduced-motion: no-preference`. The hidden starting states apply only once JS has added `js` to `<html>`.

**Tech Stack:** Next.js 16.1 App Router (static), React 19, plain CSS tokens in `src/app/globals.css`, `next/image`, `simple-icons@16.36.0` (build-time SVG paths), Vitest + RTL, Playwright + axe.

**Spec:** `docs/superpowers/specs/2026-11-23-visual-polish-design.md`

## Global Constraints

- **Branch and merge:** work on `feat/visual-polish`, open a PR, never merge. Merging to main deploys production on Appwrite Sites.
- **Colours and themes:** every new colour is a token in `:root` (light) and `:root[data-theme="dark"]`. Both themes must pass axe (WCAG 2.2 AA) at desktop and 360px.
- **Motion:** only inside `@media (prefers-reduced-motion: no-preference)`. Under reduce, all content is visible, nothing loops, and the strip is a hand-scrollable row.
- **No JavaScript:** content is fully visible. Hidden reveal states key off `html.js`.
- **No new runtime libraries:** no animation library, no CDN assets at runtime. `simple-icons` is only read in server components.
- **Copy:** existing card copy, headings, tags and chips stay word for word. The only new copy:
  - the case-study phone caption: "Communities, events and chat in one app.", with the link "See it on bublhub.com";
  - the strip heading: "The client work, live";
  - the strip's Pause/Play button labels: "Pause" and "Play";
  - accessible names on the strip links: "{client name} case study".
- **Images:** decorative frames get `aria-hidden="true"` and images get `alt=""`. Images below the fold are lazy and only the Home hero image is preloaded.
- **The sibling repo `~/projects/bublhubweb`:** read only.

## Review Focus

1. **The header is hidden and the user tabs into it:** the header must show while anything inside it has focus. Test in Task 4.
2. **Fixed header over the skip link target and in-page anchors:** `#main` and anchor targets must not land under the header. The fix is `scroll-margin-top`, plus top padding on `body` so the hero isn't covered. Test in Task 4 (e2e).
3. **Reduced motion or no JS:** every `[data-reveal]` is visible, and the strip isn't animating. Tests in Task 3 and Task 8 (e2e with `reducedMotion: "reduce"`, and with JavaScript disabled).
4. **360px wide:** the three-phone line-up, the fan and the strip cause no sideways page scroll. The existing e2e overflow test covers every route; it must still pass.
5. **Light theme:** the browser-bar domain text and strip captions sit on dark frames in both themes, so their colours must pass contrast in both. The existing axe light-theme tests cover this; it must still pass.

---

### Task 1: Image assets and work data

**Files:**
- Create: `src/assets/work/` (WebP files), `src/content/work.ts`, `src/content/work.test.ts`

**Interfaces:**
- Produces:
  - `bublhubScreens: { chat, community, spotlight, announcements }` (`StaticImageData`)
  - `bublhubLogo: StaticImageData`
  - `quizShot: StaticImageData`
  - `clientShots: Record<string, { image: StaticImageData; domain: string }>`, keyed by client `name` exactly as in `teaPoweredClients`
  - `fanClients: string[]` = `["Peak Dinghy Spares", "Reader Cement Products", "Focused Video Marketing"]`

- [ ] **Step 1:** Copy `{chat,community,spotlight,announcements}.webp` from `~/projects/bublhubweb/public/assets/home/phone/` into `src/assets/work/` with the prefix `bublhub-`. Convert `~/projects/bublhubweb/public/assets/icons/Glowlogo.png` to `src/assets/work/bublhub-logo.webp` at 240×240.
- [ ] **Step 2:** Convert the 12 PNGs in the scratchpad `shots/` folder (reader, peak, humanatees, navigate, langley, budgetdrains, adlock, autelix, lacemarket, beeangels, focusedvm, quiz) to `src/assets/work/site-<key>.webp` at 960×600, quality 72. Use a one-off script in the scratchpad that uses the repo's `sharp`. Expected: each file is under 90 KB.
- [ ] **Step 3:** Write `src/content/work.test.ts`. It asserts that:
  - every `teaPoweredClients[i].name` has a `clientShots` entry with a non-empty `domain` and no `https://`;
  - every `fanClients` name is in `clientShots`.
- [ ] **Step 4:** Run `npx vitest run src/content/work.test.ts`. Expected: FAIL, because the module is missing.
- [ ] **Step 5:** Implement `src/content/work.ts` with static imports. The domains are the ones in the spec, without `www.`.
- [ ] **Step 6:** Run it again. Expected: PASS.
- [ ] **Step 7:** Commit: `feat: add project screenshots and work data`.

### Task 2: Tool icons on chips

**Files:**
- Create: `src/content/tools.ts`, `src/components/Chips.test.tsx`
- Modify: `src/components/Chips.tsx`, `src/app/globals.css` (`.chip` rules), `package.json`

**Interfaces:**
- Produces: `toolIcon(label: string): { path: string } | undefined` in `src/content/tools.ts`.
  - It matches on the label with any trailing version number stripped, so "Next.js 16" maps to Next.js.
  - Labels to map, if simple-icons@16.36.0 has the icon: TypeScript, Next.js, React, React Native (React icon), Expo, Node.js, Appwrite, Stripe Connect (Stripe), SendGrid, Sentry, GitHub Actions, GitLab CI (GitLab), Jest, Vitest, Playwright, Tailwind, MySQL, PHP, Shopify.
  - Any label without an icon is left out of the map.

- [ ] **Step 1:** `npm install simple-icons@16.36.0` (a dependency, so the Appwrite build has it).
- [ ] **Step 2:** Write `Chips.test.tsx`:
  - rendering `<Chips items={["Next.js 16","BroadcastChannel"]} />` gives a first `li` holding an `svg[aria-hidden="true"]` and the text "Next.js 16", and a second `li` with no `svg`;
  - the list's accessible name is still "Stack".
- [ ] **Step 3:** Run `npx vitest run src/components/Chips.test.tsx`. Expected: FAIL (no svg).
- [ ] **Step 4:** Implement `tools.ts`, which imports named `si*` exports. `Chips` renders `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={path}/></svg>` before the label.
  - CSS: the icon is 14px with `fill: currentColor`, and turns `var(--accent)` when the chip or its `.card` is hovered.
- [ ] **Step 5:** Run it again. Expected: PASS.
- [ ] **Step 6:** Commit: `feat: tool icons on stack chips`.

### Task 3: JS flag and reveal on scroll

**Files:**
- Modify: `src/lib/theme.ts` (`themeInitScript`), `src/app/layout.tsx`, `src/app/globals.css`
- Create: `src/components/RevealObserver.tsx`, `src/components/RevealObserver.test.tsx`

**Interfaces:**
- Produces: the attribute `data-reveal` (optional value `"1"` or `"2"` for a 0.1s or 0.2s stagger), which any element can carry. `RevealObserver` adds the class `is-in` when the element is at least 15% visible, then stops observing it.

- [ ] **Step 1:** Write `RevealObserver.test.tsx`:
  - stub `IntersectionObserver` and render `<><div data-reveal data-testid="a"/><RevealObserver/></>`;
  - firing the callback with `isIntersecting: true` adds `is-in` to `a` and calls `unobserve(a)`;
  - with no `IntersectionObserver` on `window`, every `[data-reveal]` gets `is-in` immediately.
- [ ] **Step 2:** Run it. Expected: FAIL.
- [ ] **Step 3:** Implement `RevealObserver` ("use client", returns `null`, effect with `threshold: 0.15`).
  - Mount it once in `layout.tsx` after `<SiteFooter/>`.
  - Add `document.documentElement.classList.add("js");` to the start of `themeInitScript`, outside its try block.
- [ ] **Step 4:** CSS, inside `@media (prefers-reduced-motion: no-preference)`:
  - `.js [data-reveal]:not(.is-in)` has `opacity: 0` and `transform: translateY(28px)`;
  - `[data-reveal]` transitions opacity and transform over `.8s cubic-bezier(.2,.7,.2,1)`;
  - `[data-reveal="1"]` and `[data-reveal="2"]` add `transition-delay` of `.1s` and `.2s`.
- [ ] **Step 5:** Add `data-reveal` to each page's sections:
  - the `section`'s eyebrow, `h2` and main block on Home, Projects, About, Contact and CV;
  - the case studies' `.cs-grid` children;
  - not the hero `h1` or anything above the fold on load.
- [ ] **Step 6:** Run `npx vitest run`. Expected: all PASS, including the existing ThemeToggle tests.
- [ ] **Step 7:** Commit: `feat: reveal sections on scroll`.

### Task 4: Header that hides on scroll down

**Files:**
- Create: `src/components/useHideOnScroll.ts`, `src/components/HeaderShell.tsx`, `src/components/useHideOnScroll.test.tsx`
- Modify: `src/components/SiteHeader.tsx`, `src/app/globals.css` (`.top`, `body`, `#main`), `e2e/smoke.spec.ts`

**Interfaces:**
- Produces:
  - `useHideOnScroll(threshold = 120): { hidden: boolean; scrolled: boolean }`;
  - `HeaderShell({ children }): JSX`, which renders `<header className="top" data-hidden={hidden} data-scrolled={scrolled}>`.

- [ ] **Step 1:** Write the hook tests (set `window.scrollY` and dispatch `scroll`; rAF runs synchronously in the test):
  - 0 → 200 gives `hidden` true and `scrolled` true;
  - 200 → 150 gives `hidden` false;
  - 0 → 80 gives `hidden` false and `scrolled` true.
- [ ] **Step 2:** Run it. Expected: FAIL.
- [ ] **Step 3:** Implement the hook (passive listener, rAF-throttled) and `HeaderShell`. `SiteHeader` stays a server component and wraps its contents in `HeaderShell`.
- [ ] **Step 4:** CSS:
  - `.top` is `position: fixed; inset: 0 0 auto; z-index: 50`;
  - background `color-mix(in srgb, var(--bg) 78%, transparent)` with `backdrop-filter: blur(10px)`;
  - `border-bottom-color: transparent` until `[data-scrolled="true"]`;
  - `[data-hidden="true"]:not(:focus-within)` has `transform: translateY(-100%)`;
  - the transform transitions over `.35s`, only under no-preference;
  - `body` has `padding-top` equal to the header height (72px; check that it wraps at 360px and use the measured height);
  - `#main` and `[id]` have `scroll-margin-top: 88px`.
- [ ] **Step 5:** Add the e2e test "the header hides on scroll down, returns on scroll up and when focused" on `/`:
  - scroll to 600 and expect `.top` to have `data-hidden="true"`;
  - scroll to 400 and expect `"false"`;
  - scroll to 600, press Tab from the top of the page and expect the skip link to be visible and in view.
- [ ] **Step 6:** Run `npx vitest run && npm run build && npx playwright test`. Expected: all PASS.
- [ ] **Step 7:** Commit: `feat: header hides on scroll down`.

### Task 5: Top-of-page glow and dot grid

**Files:**
- Modify: `src/app/globals.css`, and the case-study pages if `.cs-page` needs a wrapper for the glow

- [ ] **Step 1:** Add tokens:
  - `--glow`: dark `color-mix(in srgb, #f59e0b 20%, transparent)`, light `color-mix(in srgb, #f59e0b 14%, transparent)`;
  - `--dots`: dark `color-mix(in srgb, #ecedef 7%, transparent)`, light `color-mix(in srgb, #15171c 8%, transparent)`.
- [ ] **Step 2:** Give `.hero` and `.cs-page` `position: relative; isolation: isolate` and two pseudo-elements with `z-index: -1` and `pointer-events: none`:
  - `::before` is the bottom glow ellipse;
  - `::after` is the dot grid (24px spacing), masked to fade out by 80%;
  - clip it so it causes no overflow.
- [ ] **Step 3:** Run `npm run build && npx playwright test`. Expected: PASS, with no overflow and no contrast failures.
- [ ] **Step 4:** Commit: `feat: faint glow and dot grid on page tops`.

### Task 6: Frames and project visuals

**Files:**
- Create: `src/components/frames.tsx`, `src/components/ProjectVisuals.tsx`, `src/components/frames.test.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: Task 1 exports.
- Produces:
  - `PhoneFrame({ image, className?, sizes })`
  - `BrowserFrame({ image, domain, className?, sizes })`
  - `Radar({ logo })`
  - `BublHubVisual()`, `TeaPoweredFan()`, `QuizWindow()`, `PhoneLineup()`
  - The four visuals are wrapped in a `div` with `aria-hidden="true"` and class `visual visual-<name>`.

- [ ] **Step 1:** Write `frames.test.tsx`:
  - `BrowserFrame` shows the domain text and its `img` has `alt=""`;
  - `TeaPoweredFan` renders three browser frames, whose domains come from `fanClients`;
  - every visual's root has `aria-hidden="true"`.
- [ ] **Step 2:** Run it. Expected: FAIL.
- [ ] **Step 3:** Implement with `next/image` (`placeholder="blur"`, lazy). Use the mockup values from the spec's Decided section for frame and radar CSS.
  - Frame colours are fixed dark tokens `--frame`, `--frame-bar`, `--frame-text` and get the same value in both themes. Set `--frame-text: #a3a9b5` on `#262a32`, which is above 4.5:1.
  - Cyan (`#22d3ee`) is used only inside `.visual-bublhub` and `.lineup`.
  - Radar rings and breathing glow run only under no-preference, and the rings are hidden under reduce.
- [ ] **Step 4:** Run `npx vitest run`. Expected: PASS.
- [ ] **Step 5:** Commit: `feat: phone, browser and radar frames`.

### Task 7: Put the visuals on Home, Projects and the BublHub case study

**Files:**
- Modify: `src/app/projects/page.tsx`, `src/app/page.tsx`, `src/app/projects/bublhub/page.tsx`, `src/app/globals.css`

**Interfaces:**
- Consumes: Task 6 components.

- [ ] **Step 1: Projects page.** Replace `.rows` with `.work-grid`:
  - the BublHub `article` gets `card work-wide`, with its body on the left and `<BublHubVisual/>` on the right;
  - Tea Powered and the quiz get `card work-half`, with the visual on top;
  - remove the `.tile` elements and keep all the existing text nodes;
  - at 960px and below, everything becomes one column, with the visual above the text.
- [ ] **Step 2: Home.** The `.feature` card gets `<BublHubVisual/>` beside the body, or above it at 960px and below.
  - In the two `.row` cards, the `.tile` becomes `.tile-visual`, about 220px wide, holding a compact `<TeaPoweredFan/>` or `<QuizWindow/>`.
  - At 560px and below, `.tile-visual` sits above the text at full width.
- [ ] **Step 3: BublHub case study.** Insert `<PhoneLineup/>` between the lede and `.cs-grid`. Under it, add a `p.caption` with the exact copy from Global Constraints, linking to `https://www.bublhub.com`.
  - Line-up sizes: centre 240px and sides 220px; below 560px, centre 150px and sides 140px with `translateX(±95px)`.
- [ ] **Step 4:** Run `npm run build && npx playwright test`. Expected: PASS, with no overflow at 360px and axe clean in both themes.
- [ ] **Step 5:** Commit: `feat: project imagery on Home, Projects and BublHub`.

### Task 8: Tea Powered client strip with pause

**Files:**
- Create: `src/components/ClientStrip.tsx`, `src/components/ClientStrip.test.tsx`
- Modify: `src/app/projects/tea-powered-projects/page.tsx`, `src/app/globals.css`, `e2e/smoke.spec.ts`

**Interfaces:**
- Consumes: `teaPoweredClients` and `clientShots`.
- Produces: `ClientStrip()`, a client component.

- [ ] **Step 1:** Write `ClientStrip.test.tsx`:
  - there are 11 links with accessible names matching `/^.+ case study$/`, each with `href` equal to the client's `url`;
  - the duplicate copy used for the seamless loop sits inside an `aria-hidden="true"` element, and its links have `tabIndex={-1}`;
  - the button starts with the text "Pause" and `aria-pressed="false"`;
  - clicking it changes the text to "Play", sets `aria-pressed="true"` and puts `data-paused="true"` on the track.
- [ ] **Step 2:** Run it. Expected: FAIL.
- [ ] **Step 3:** Implement it.
  - Each item is a `BrowserFrame` plus a `figcaption` with the client name and type.
  - CSS animates `.strip-track` with `translateX(-50%)` over 60s, linear and infinite, only under no-preference.
  - The animation pauses on `:hover`, on `:focus-within` and on `[data-paused="true"]`.
  - Under reduce: no animation, the container gets `overflow-x: auto` and the button is hidden.
- [ ] **Step 4:** On the Tea Powered page, add a section with the eyebrow "Tea Powered Projects", `h2` "The client work, live" and `<ClientStrip/>`, placed directly before the existing `ul.clients` block.
- [ ] **Step 5:** Add e2e tests:
  - with `test.use({ reducedMotion: "reduce" })`, on `/projects/tea-powered-projects` and `/`, every `[data-reveal]` has opacity `"1"` and `.strip-track`'s `animation-name` is `"none"`;
  - with `javaScriptEnabled: false` on `/`, every `[data-reveal]` has opacity `"1"`.
- [ ] **Step 6:** Run `npx vitest run && npm run build && npx playwright test`. Expected: all PASS.
- [ ] **Step 7:** Commit: `feat: scrolling client strip on the Tea Powered case study`.

### Task 9: Verify, measure, open the PR

- [ ] **Step 1:** Run `npm run lint && npm run typecheck && npm test && npm run build && npm run test:e2e`. Expected: all green.
- [ ] **Step 2:** Run Lighthouse (mobile and desktop) on `/`, `/projects`, `/projects/bublhub` and `/projects/tea-powered-projects` against `npm run start -p 3100`. Use `CHROME_PATH=~/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome` and `--chrome-flags="--headless=new"`.
  - Expected: Performance 95 or more on mobile, and 100 for Accessibility, Best Practices and SEO.
- [ ] **Step 3:** Take before and after screenshots for the PR. Upload them as PR comments, not into the repo.
- [ ] **Step 4:** Push `feat/visual-polish` with `-u`, then open the PR against `main` with a summary, the Lighthouse table and the note "merging deploys to production". Do not merge.
