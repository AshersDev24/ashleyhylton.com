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
