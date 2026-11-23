// Every public page. The sitemap and the end-to-end smoke tests both use it.
export const routes = [
  { path: "/", priority: 1 },
  { path: "/projects", priority: 0.8 },
  { path: "/projects/bublhub", priority: 0.9 },
  { path: "/projects/tea-powered-projects", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.5 },
  { path: "/cv", priority: 0.7 },
] as const;
