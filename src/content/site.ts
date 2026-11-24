// Facts used on more than one page. Keep them in one place so they can't drift.

export const EMAIL = "ashleyhylton91@gmail.com";
export const GITHUB_URL = "https://github.com/AshersDev24";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ashley-hylton-8b1271142/";
export const REPO_URL = "https://github.com/AshersDev24/ashleyhylton.com";
export const CV_PAGE = "/cv";
export const CV_PDF = "/Ashley_Hylton_CV.pdf";
export const QUIZ_URL = "https://onlynotts-quiz.vercel.app/";

export const STATUS = "Open to permanent roles · remote or hybrid";
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

export type TimelineEvent = {
  year: string;
  title: string;
  text: string;
};

// Deliberately simple: how I've grown as a developer, with BublHub as the
// thread through it. Other projects and client work sat in between.
export const timeline: TimelineEvent[] = [
  {
    year: "2018",
    title: "Taught myself to code",
    text: "Lots of small projects, written by hand from the basics up, before AI coding tools.",
  },
  {
    year: "2018",
    title: "Started BublHub",
    text: "The project I learned on, which grew into a platform for organisers and their communities.",
  },
  {
    year: "2019",
    title: "Finished the first build",
    text: "A working version of BublHub, ready just before COVID shut events down.",
  },
  {
    year: "2023",
    title: "First launch",
    text: "BublHub went live once events were back. It worked, but it didn't have enough features to make a real impact.",
  },
  {
    year: "2024",
    title: "Taken offline to rebuild",
    text: "Brought it down to move to new infrastructure and build the features it was missing.",
  },
  {
    year: "2027",
    title: "Relaunch",
    text: "Back live with the new infrastructure and features, starting in Nottingham.",
  },
];

/** Each client links to its live site, not the agency case study. */
export const teaPoweredClients = [
  { type: "Shopify store", name: "Reader Cement Products", what: "Trade shop for a cement and concrete maker", url: "https://shop.reader.co.uk/" },
  { type: "Enterprise web", name: "Langley Holdings", what: "Web development and support for the group", url: "https://www.langleyholdings.com/" },
  { type: "Web app", name: "Humanatees Home Tutoring", what: "On-demand tutoring platform", url: "https://www.humanateestutor.com/" },
  { type: "Web app", name: "Navigate Neurodiversity OT", what: "On-demand therapy platform", url: "https://www.navigateneurodiversityot.com/" },
  { type: "E-commerce", name: "Peak Dinghy Spares", what: "Online shop for dinghy parts", url: "https://www.peakdinghy.com/" },
  // The three "Project result" figures are the agency's published results.
  { type: "Website + SEO", name: "Budget Drains Nottingham", what: "Project result: +357% keywords ranked", url: "https://www.budgetdrainsnottingham.co.uk/" },
  { type: "Website + SEO", name: "AD Locksmithing", what: "Project result: +183% jobs completed", url: "https://www.adlocksmithing.co.uk/" },
  { type: "Website + SEO", name: "Autelix", what: "Project result: 11 jobs in the best month", url: "https://www.autelix.co.uk/" },
  { type: "Website", name: "Lace Market Aesthetics", what: "Clinic website", url: "https://www.lacemarketaesthetics.co.uk/" },
  { type: "Website", name: "Bee Angels", what: "Charity website", url: "https://www.beeangels.co.uk/" },
  { type: "Website", name: "Focused Video Marketing", what: "Portfolio website", url: "https://www.focusedvm.co.uk/" },
];

/** Twelve projects by type, with the bar opacity for each segment. */
export const teaPoweredMix = [
  { label: "Business websites", n: 6, opacity: 1 },
  { label: "Web apps", n: 2, opacity: 0.75 },
  { label: "Online shops", n: 2, opacity: 0.55 },
  { label: "Enterprise", n: 1, opacity: 0.38 },
  { label: "Mobile app", n: 1, opacity: 0.24 },
];
