# Visual polish: imagery, icons, gradients and motion

Date: 2026-11-23. Status: written up from the approved conversation; waiting on Ash's review.

## Why

The redesigned site (PR #2, live) reads as text-heavy and "AI built": every project is a block of copy beside a letter tile ("B", "TP", "Q"), stacks are plain text chips, and the background is flat. Ash wants it to feel designed: real product imagery, tool icons, subtle gradients and small, deliberate motion. The imagery is a preview to make people want to look, not documentation: anyone who wants more detail follows the link to the live site.

Success: a recruiter skimming Home or Projects sees BublHub, the client work and the quiz before reading a word, and the site still scores Lighthouse Performance 95+ on mobile, Accessibility 100, and passes the existing axe checks in both themes.

## Goals

1. **Imagery on every project**, replacing the letter tiles:
   - **BublHub card** (Projects page, and the featured card in Home's "Selected work"): BublHub's glow logo with its animated radar rings, and one app screen in an iPhone frame rising from the bottom of the card, slightly rotated. On hover the phone lifts a little.
   - **BublHub case study**: three iPhones in a row near the top (under the lede, above the "Year by year" grid). Centre phone faces forward and is slightly bigger; the outer two are angled in 3D towards it. One line beneath with a link to bublhub.com.
   - **Tea Powered card** (Projects and Home): three client sites in browser-window frames, fanned (rotated a few degrees each, overlapping). On hover the outer two spread apart.
   - **OnlyNotts quiz card** (Projects and Home): one browser-window frame of the quiz app on an orange glow. On hover it straightens and lifts.
   - **Tea Powered case study**: a slowly scrolling strip of all 11 client sites in browser frames, each captioned with client name and type of work and linking to that client's teapowered.pro case study. Pauses on hover and on keyboard focus, and has a visible Pause/Play button (it moves for more than 5 seconds, so WCAG 2.2.2 needs one; touch devices have no hover). Sits above the existing client list, which stays.
   - **Layouts** (Ash approved the `project-cards.html` mockup):
     - **Projects page:** moves to the mockup grid. BublHub is a full-width card, text on the left and the picture on the right. Tea Powered and the quiz sit side by side below it, picture on top. On narrow screens it becomes one column. The existing card copy, headings, tags and chips stay word for word; the mockup's shortened copy was only a placeholder.
     - **Home "Selected work":** keeps its structure (one featured card, then two rows). The featured BublHub card gains the radar-and-phone picture beside its text, or above it on narrow screens. In the Tea Powered and quiz rows, the letter tile becomes a wider picture slot holding a compact fan or browser frame. Copy and the `.kinds` list stay. (Claude's call.)
2. **Tool icons**: every stack chip (`Chips` component) gets a small brand icon before the label, drawn in the chip's muted text colour, turning amber when the chip or its card is hovered. Applies everywhere `Chips` is used (Home, Projects, both case studies' Key facts). Chips with no recognisable brand mark (e.g. "BroadcastChannel", "No backend", "Maestro" if no icon exists) keep text only.
3. **Background**: a faint amber glow rising from the bottom of each page's top section (the `.hero` sections and the case-study heading area), plus a light dot grid that fades out downwards. Below the top section the background stays flat so long text stays easy to read.
4. **Header**: currently scrolls away with the page. New behaviour: fixed to the top; slides up out of view when scrolling down (after the first ~120px), slides back when scrolling up; gains a translucent blurred background and its bottom border once the page has scrolled. Always visible when any element inside it has keyboard focus.
5. **Reveal on scroll**: sections and cards fade in and rise ~24px as they enter the viewport, once (no re-hiding). Small stagger within a group (eyebrow, heading, body).

## Non-goals

- No copy changes beyond what the new layouts force (e.g. card alt text, the one line under the case-study phones, strip captions).
- No new pages. About, Contact and CV only get the global changes (header, top glow, reveal); no imagery is added to them.
- No changes to the theme system, routes, SEO or the CV.
- Nothing in the sibling `bublhubweb` repo changes; it is only read from.

## Anti-goals (would be a failure even if it works)

- Heavy 3D/WebGL or a big animation library. Mobbin references with WebGL heroes (Unseen, Sui, Clay, Fuser) were rejected for this reason.
- Lighthouse mobile Performance below 95, or any new axe violation, in either theme.
- Content that is hidden when JavaScript fails or when the visitor has reduced motion turned on.
- Full-colour brand logos fighting the amber accent.
- BublHub's cyan leaking outside BublHub's own imagery (the radar glow and the phones' backdrop). The site accent stays amber.

## Constraints

- Next.js 16 App Router, all routes static, plain CSS in `src/app/globals.css` with tokens on `:root` (light) and `:root[data-theme="dark"]` (default). Both themes must look right; every new colour goes through tokens with values for both.
- Hosting is Appwrite Sites; a merge to `main` deploys to production. Work on branch `feat/visual-polish`, open a PR, never merge.
- Existing tests (Vitest + RTL, Playwright + axe at desktop and 360px in both themes) must pass; CI runs them on the PR.
- Motion only under `@media (prefers-reduced-motion: no-preference)`, matching the existing pattern. Under `reduce`: no radar rings or breathing glow, no strip animation (the strip becomes a horizontally scrollable row), no reveal (content visible immediately), header still hides/shows but without the slide transition.
- Content must be visible without JavaScript: the reveal's hidden starting state is only applied once JS has marked the page (e.g. a class on `<html>` set by the existing inline head script or a small client component), so no-JS visitors see everything.
- 360px wide phones: no horizontal page scroll. The three-phone line-up shrinks and tightens; the fanned stack stays inside its card; the strip scrolls inside its own container.

## Decided

- **Imagery sources**
  - BublHub screens: copy `community.webp`, `chat.webp`, `spotlight.webp`, `announcements.webp` (560×1140) from `~/projects/bublhubweb/public/assets/home/phone/`, and `Glowlogo.png` (535×535) from `bublhubweb/public/assets/icons/`, into this repo. Line-up: chat, community (centre), spotlight. Card phone: community.
  - Client sites and quiz: one-off Playwright screenshots of the live sites at 1440×900, converted to WebP and committed. The capture script is not part of the repo. Live URLs:
    - shop.reader.co.uk, www.peakdinghy.com, www.humanateestutor.com, www.navigateneurodiversityot.com, www.langleyholdings.com, www.budgetdrainsnottingham.co.uk, www.adlocksmithing.co.uk, www.autelix.co.uk, www.lacemarketaesthetics.co.uk, www.beeangels.co.uk, www.focusedvm.co.uk
    - onlynotts-quiz.vercel.app
  - Tea Powered fan uses sites without a person's face in the hero: Peak Dinghy, Reader Cement, Focused Video Marketing. (Claude's call; the strip includes all 11.)
- **Radar animation**: port of bublhubweb's `.radar` (four rings scaling 0.9→2.3 and fading over 3.6s, staggered 0.9s; a breathing radial glow behind the logo). Reimplemented in this repo's CSS, not imported.
- **Light theme**: the phone and browser frames, the BublHub cyan backdrop and the quiz's orange glow stay dark in both themes. They depict physical devices and product art, and the dark frames still read well on a light card. Text in the browser bars and the strip captions must pass the contrast checks in both themes. Only the page glow and dot grid get light-theme versions. (Claude's call.)
- **Device frames**: CSS only (rounded dark gradient body, inner radius, a small island). Browser frames: CSS only (thin bar with three dots and the domain in mono). No mockup image assets.
- **No animation library.** CSS transitions/keyframes plus one `IntersectionObserver` and one scroll listener (passive, rAF-throttled).
- **Icons**: from the `simple-icons` package, inlined as SVG paths at build time (no runtime CDN). The mockup loaded them from jsDelivr; production must not.
- **Images**: `next/image` with explicit sizes; everything below the fold lazy-loads. Images are decorative previews: `alt=""` with `aria-hidden` on the frame, since the card text already names the project. Exception: strip items are links, so each link gets an accessible name ("Reader Cement Products case study").
- **Mockups** of the agreed look: `bublhub-imagery.html` (header, glow, reveal, line-up, radar card) and `project-cards.html` (Projects cards, Tea Powered strip). Copies are kept outside the repo, in this session's scratchpad. Starting values from them:
  - **Phones:** frame 210–240px wide, aspect 560/1140, radius 34px, padding 8px, body `linear-gradient(145deg,#3a3f48,#16181c)`. Line-up: outer phones `translateX(±230px) rotateY(∓22deg) scale(.88)`, easing to `±250px / 14deg` on hover. Card phone: `rotate(-6deg)`, `bottom:-18%`, lifting 12px on hover.
  - **Browser frame:** 22px bar `#262a32`, dots `#4a4f59`, domain in 9px mono. Fan: rotations -7°, -2° and 4°, with the outer two spreading about 18px on hover.
  - **Glow:** `radial-gradient(ellipse at 50% 100%, accent-fill 18–22%, transparent 60%)`, with a dot grid at 24px spacing, 7% text colour, masked to fade out downwards.
  - **Reveal:** 28px rise over .8s, `cubic-bezier(.2,.7,.2,1)`, threshold .15, stagger .1s.
  - **Header:** hides when scrolling down past 120px; transition .35s.
  - **Strip:** 360px items, 24px gap, one 60s loop.
  - **Screenshots:** already captured at 1440×900 PNG in the same scratchpad (`shots/`). Convert them rather than recapturing, unless a site has changed.

## Left to the builder

- Exact component split (e.g. `PhoneFrame`, `BrowserFrame`, `Radar`, `ClientStrip`, `RevealRoot`, a `useHideOnScroll` hook) and file layout under `src/components/`.
- Exact sizes, rotations, glow strengths and timings, within "subtle". Mockup values are a starting point.
- How the glow and dot grid adapt to the light theme (they must still be visible but faint).
- Image dimensions and WebP quality, as long as Lighthouse holds.
- Whether the strip duplicates its items for a seamless loop, and how the duplicate is hidden from assistive tech.
- Unit tests for the new client behaviour (header hide/show, reveal, strip pause) and any e2e additions. At minimum, existing e2e and axe pass, and a test proves content is visible with reduced motion.
