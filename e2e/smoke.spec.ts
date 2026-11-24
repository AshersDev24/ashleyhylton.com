import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { routes } from "../src/content/routes";
import { SITE_URL } from "../src/lib/seo";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const { path } of routes) {
  test.describe(`${path}`, () => {
    test("renders with its own title, canonical URL and description", async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `${SITE_URL}${path === "/" ? "" : path}`,
      );
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /^.{50,}$/);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /\/og\.png$/);
    });

    test("has no placeholder text and no sideways scroll", async ({ page }) => {
      await page.goto(path);
      const text = await page.locator("body").innerText();
      expect(text).not.toMatch(/\[[^\]]*\]/);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });

    for (const theme of ["dark", "light"] as const) {
      test(`passes axe in the ${theme} theme`, async ({ page }) => {
        await page.addInitScript((t) => localStorage.setItem("theme", t), theme);
        await page.goto(path);
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        // Open every accordion so hidden content is checked too.
        await page.evaluate(() =>
          document.querySelectorAll("details").forEach((d) => (d.open = true)),
        );
        const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();
        expect(results.violations).toEqual([]);
      });
    }
  });
}

test("every CV link on the site points to /cv", async ({ page }) => {
  // /cv itself is the one page that links to the PDF.
  for (const { path } of routes.filter((r) => r.path !== "/cv")) {
    await page.goto(path);
    const cvLinks = page.getByRole("link", { name: /\bCV\b/ });
    for (const link of await cvLinks.all()) {
      await expect(link).toHaveAttribute("href", "/cv");
    }
  }
});

test("the CV page serves the PDF", async ({ page, request }) => {
  await page.goto("/cv");
  const href = await page.getByRole("link", { name: "Download CV (PDF)" }).getAttribute("href");
  const response = await request.get(href!);
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
});

test("the header hides on scroll down, returns on scroll up and when focused", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle"); // listeners attach on hydration
  const header = page.locator("header.top");
  await page.evaluate(() => window.scrollTo(0, 600));
  await expect(header).toHaveAttribute("data-hidden", "true");
  await page.evaluate(() => window.scrollTo(0, 400));
  await expect(header).toHaveAttribute("data-hidden", "false");

  await page.evaluate(() => window.scrollTo(0, 900));
  await expect(header).toHaveAttribute("data-hidden", "true");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
});

test("the theme choice survives a reload", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(page.getByRole("button", { name: "Switch to dark theme" })).toBeVisible();
});

test("timeline filters and accordions work from the keyboard", async ({ page }) => {
  await page.goto("/");
  const clientWork = page.getByRole("button", { name: "Client work" });
  await clientWork.focus();
  await page.keyboard.press("Enter");
  await expect(clientWork).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".events li")).toHaveCount(1);

  const details = page.locator("details");
  await expect(details.first()).toHaveAttribute("open", "");
  const staging = page.locator("summary", { hasText: "Rehearse on staging" });
  await staging.focus();
  await page.keyboard.press("Enter");
  await expect(details.nth(1)).toHaveAttribute("open", "");
});

test("the old BublHub v2 URL redirects to the case study", async ({ page }) => {
  await page.goto("/projects/bublhub/v2");
  await expect(page).toHaveURL(/\/projects\/bublhub$/);
});

test("Home has Person structured data", async ({ page }) => {
  await page.goto("/");
  const json = await page.locator('script[type="application/ld+json"]').textContent();
  const person = JSON.parse(json!);
  expect(person).toMatchObject({
    "@type": "Person",
    name: "Ashley Hylton",
    jobTitle: "Full-Stack TypeScript Engineer",
    address: { addressLocality: "Nottingham", addressCountry: "GB" },
  });
  expect(person.sameAs).toHaveLength(2);
});

test("sitemap lists every route", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  for (const { path } of routes) {
    expect(xml).toContain(`<loc>${SITE_URL}${path === "/" ? "" : path}</loc>`);
  }
});

test.describe("with reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  for (const path of ["/", "/projects/tea-powered-projects"]) {
    test(`${path} shows everything and nothing loops`, async ({ page }) => {
      await page.goto(path);
      for (const el of await page.locator("[data-reveal]").all()) {
        await expect(el).toHaveCSS("opacity", "1");
      }
      const track = page.locator(".strip-track");
      if (await track.count()) {
        await expect(track).toHaveCSS("animation-name", "none");
        await expect(page.getByRole("button", { name: "Pause" })).toBeHidden();
      }
    });
  }
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("every section is visible", async ({ page }) => {
    await page.goto("/");
    for (const el of await page.locator("[data-reveal]").all()) {
      await expect(el).toHaveCSS("opacity", "1");
    }
  });
});

test("the client strip moves, and the button pauses it", async ({ page }) => {
  await page.goto("/projects/tea-powered-projects");
  const track = page.locator(".strip-track");
  await expect(track).toHaveCSS("animation-play-state", "running");
  await page.getByRole("button", { name: "Pause" }).click();
  await page.mouse.move(0, 0); // off the strip, so hover isn't what paused it
  await page.locator("h1").focus();
  await expect(page.getByRole("button", { name: "Play" })).toBeVisible();
  await expect(track).toHaveAttribute("data-paused", "true");
  await expect(track).toHaveCSS("animation-play-state", "paused");
});

test.describe("review fixes", () => {
  test("the header still hides after clicking a link in it", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Projects" }).click();
    await expect(page).toHaveURL(/\/projects$/);
    await page.evaluate(() => window.scrollTo(0, 300));
    await page.evaluate(() => window.scrollTo(0, 700));
    const header = page.locator("header.top");
    await expect(header).toHaveAttribute("data-hidden", "true");
    await expect.poll(() => header.evaluate((h) => h.getBoundingClientRect().bottom)).toBeLessThanOrEqual(1);
  });

  test("an in-page jump upwards lands below the header", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.evaluate(() => window.scrollBy(0, -40)); // scrolling up brings the header back
    await page.evaluate(() => (location.hash = "#numbers-h"));
    const header = page.locator("header.top");
    await expect(header).toHaveAttribute("data-hidden", "false");
    const headerBottom = await header.evaluate((h) => h.getBoundingClientRect().bottom);
    // The jump scrolls smoothly and the section rises in, so wait for both.
    await expect
      .poll(() => page.locator("#numbers-h").evaluate((h) => h.getBoundingClientRect().top), { timeout: 4000 })
      .toBeGreaterThanOrEqual(headerBottom);
  });

  test("sections still appear if the JavaScript bundle fails to load", async ({ page }) => {
    await page.route(/\/_next\/static\/chunks\/.*\.js(\?|$)/, (route) => route.abort());
    await page.goto("/projects");
    await expect(page.locator(".work-grid")).toHaveCSS("opacity", "1", { timeout: 6000 });
  });

  test("printing shows every section", async ({ page }) => {
    await page.goto("/projects/bublhub");
    await page.emulateMedia({ media: "print" });
    for (const el of await page.locator("[data-reveal]").all()) {
      await expect(el).toHaveCSS("opacity", "1");
    }
  });

  test("the Home BublHub phone rises from the bottom without its top cut off", async ({ page }) => {
    await page.goto("/");
    const visual = await page.locator(".feature .visual-bublhub").boundingBox();
    const phone = await page.locator(".feature .visual-bublhub .phone").boundingBox();
    expect(phone!.y).toBeGreaterThanOrEqual(visual!.y);
  });

  test("the case-study phones fit at tablet width", async ({ page }) => {
    await page.setViewportSize({ width: 700, height: 900 });
    await page.goto("/projects/bublhub");
    const lineup = (await page.locator(".lineup").boundingBox())!;
    for (const phone of await page.locator(".lineup .phone").all()) {
      const box = (await phone.boundingBox())!;
      expect(box.x).toBeGreaterThanOrEqual(lineup.x - 1);
      expect(box.x + box.width).toBeLessThanOrEqual(lineup.x + lineup.width + 1);
    }
  });
});
