import {
  siAppwrite,
  siExpo,
  siGithubactions,
  siGitlab,
  siJest,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siReact,
  siSentry,
  siShopify,
  siStripe,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVitest,
} from "simple-icons";

// Brand marks for the stack chips. Labels with no mark in simple-icons
// (SendGrid, Playwright, Maestro, BroadcastChannel) stay text only.
const icons: Record<string, { path: string }> = {
  TypeScript: siTypescript,
  "Next.js": siNextdotjs,
  React: siReact,
  "React Native": siReact,
  Expo: siExpo,
  "Node.js": siNodedotjs,
  Appwrite: siAppwrite,
  "Stripe Connect": siStripe,
  Sentry: siSentry,
  "GitHub Actions": siGithubactions,
  "GitLab CI": siGitlab,
  Jest: siJest,
  Vitest: siVitest,
  Tailwind: siTailwindcss,
  MySQL: siMysql,
  PHP: siPhp,
  Shopify: siShopify,
  Vercel: siVercel,
};

/** The icon for a chip label, ignoring a trailing version ("Next.js 16"). */
export function toolIcon(label: string): { path: string } | undefined {
  return icons[label.replace(/\s+\d+(\.\d+)*$/, "")];
}
