// Facts used on more than one page. Keep them in one place so they can't drift.

export const EMAIL = "ashleyhylton91@gmail.com";
export const GITHUB_URL = "https://github.com/AshersDev24";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ashley-hylton-8b1271142/";
export const REPO_URL = "https://github.com/AshersDev24/ashleyhylton.com";
export const CV_PAGE = "/cv";
export const CV_PDF = "/Ashley_Hylton_CV.pdf";
export const QUIZ_URL = "https://onlynotts-quiz.vercel.app/";

export const STATUS = "Open to permanent roles · hybrid";
export const LOCATION = "Nottingham, UK";

export const TEA_POWERED_PERIOD = "Sep 2024 – Dec 2025";

export type Stat = {
  /** True when the figure is approximate; shown as "~" and read as "about". */
  approx: boolean;
  value: string;
  label: string;
  ctx: string;
};

export const stats: Stat[] = [
  {
    approx: false,
    value: "8",
    label: "years building one product",
    ctx: "BublHub since 2018: learned on it, launched it, rebuilt it.",
  },
  {
    approx: true,
    value: "475",
    label: "test files",
    ctx: "Jest and Vitest, across web, app and backend.",
  },
  {
    approx: true,
    value: "50",
    label: "device journeys",
    ctx: "Maestro flows run on a real phone, not just a simulator.",
  },
  {
    approx: false,
    value: "3",
    label: "surfaces in Sentry",
    ctx: "Web, mobile app and backend, all reporting errors.",
  },
];

export type Lane = "learn" | "own" | "client" | "side";

export type TimelineEvent = {
  year: string;
  lane: Lane;
  title: string;
  text: string;
};

export const laneLabels: Record<Lane, string> = {
  learn: "Self-taught",
  client: "Client work",
  own: "BublHub",
  side: "Side project",
};

export const timelineFilters: { id: Lane | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "learn", label: "Self-taught" },
  { id: "client", label: "Client work" },
  { id: "own", label: "BublHub" },
  { id: "side", label: "Side projects" },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2018",
    lane: "learn",
    title: "Taught myself to code",
    text: "Lots of small projects, written by hand from the basics up, before AI coding tools.",
  },
  {
    year: "2018",
    lane: "own",
    title: "Started BublHub",
    text: "The project I learned on, which grew into a platform for organisers and their communities.",
  },
  {
    year: "2023",
    lane: "own",
    title: "First launch",
    text: "BublHub v1 went live as a working ticketing platform.",
  },
  {
    year: "2024",
    lane: "own",
    title: "BublHub Ltd",
    text: "Set up the company behind the product.",
  },
  {
    year: "2024",
    lane: "client",
    title: "Joined Tea Powered Projects",
    text: "Full-stack developer, Sep 2024 to Dec 2025: 12 projects for 11 clients, from local trades to Langley Holdings.",
  },
  {
    year: "2024",
    lane: "own",
    title: "Taken offline to rebuild",
    text: "Brought it down to rework the infrastructure, including moving the backend off Firebase, and to add new features.",
  },
  {
    year: "2026",
    lane: "side",
    title: "Charity quiz app",
    text: "A two-screen quiz-night app for OnlyNotts, a Nottingham charity. It ran live on the night.",
  },
  {
    year: "2026",
    lane: "own",
    title: "The rebuild",
    text: "Permissions lockdown, payments audit, staging rehearsal, automated tests and error monitoring, plus a redesign of web and app together.",
  },
  {
    year: "2027",
    lane: "own",
    title: "Relaunch",
    text: "Back live, starting in Nottingham.",
  },
];

const teaPoweredCaseStudy = (slug: string) =>
  `https://www.teapowered.pro/work/case-studies/${slug}`;

export const teaPoweredClients = [
  { type: "Shopify store", name: "Reader Cement Products", what: "Trade shop for a cement and concrete maker", url: teaPoweredCaseStudy("reader-cement-products") },
  { type: "Enterprise web", name: "Langley Holdings", what: "Web development and support for the group", url: teaPoweredCaseStudy("langley-holdings") },
  { type: "Web app", name: "Humanatees Home Tutoring", what: "On-demand tutoring platform", url: teaPoweredCaseStudy("humanatees-home-tutoring") },
  { type: "Web app", name: "Navigate Neurodiversity OT", what: "On-demand therapy platform", url: teaPoweredCaseStudy("navigate-neurodiversity-ot") },
  { type: "E-commerce", name: "Peak Dinghy Spares", what: "Online shop for dinghy parts", url: teaPoweredCaseStudy("peak-dinghy-spares") },
  // The three "Project result" figures are the agency's published results.
  { type: "Website + SEO", name: "Budget Drains Nottingham", what: "Project result: +357% keywords ranked", url: teaPoweredCaseStudy("budget-drains-nottingham") },
  { type: "Website + SEO", name: "AD Locksmithing", what: "Project result: +183% jobs completed", url: teaPoweredCaseStudy("ad-locksmithing") },
  { type: "Website + SEO", name: "Autelix", what: "Project result: 11 jobs in the best month", url: teaPoweredCaseStudy("autelix") },
  { type: "Website", name: "Lace Market Aesthetics", what: "Clinic website", url: teaPoweredCaseStudy("lace-market-aesthetics") },
  { type: "Website", name: "Bee Angels", what: "Charity website", url: teaPoweredCaseStudy("bee-angels") },
  { type: "Website", name: "Focused Video Marketing", what: "Portfolio website", url: teaPoweredCaseStudy("focused-video-marketing") },
];

/** Twelve projects by type, with the bar opacity for each segment. */
export const teaPoweredMix = [
  { label: "Business websites", n: 6, opacity: 1 },
  { label: "Web apps", n: 2, opacity: 0.75 },
  { label: "Online shops", n: 2, opacity: 0.55 },
  { label: "Enterprise", n: 1, opacity: 0.38 },
  { label: "Mobile app", n: 1, opacity: 0.24 },
];
