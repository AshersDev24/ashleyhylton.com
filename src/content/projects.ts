export type ProjectTimelineItem = {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  stack?: string[];
};

export type ProjectSection = {
  title: string;
  body: string;
  bullets?: string[];
  stack?: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  tags: string[];
  stack: string[];
  highlights: string[];
  links?: { label: string; href: string }[];
  body: {
    overview: string;
    problem: string;
    approach: string[];
    outcome: string[];
  };
  timeline?: ProjectTimelineItem[];
  sections?: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "bublhub",
    title: "BublHub",
    subtitle: "Event ticketing + community ecosystem (web + mobile + backend)",
    period: "2018 — Present",
    role: "Founder / Full-Stack Developer",
    tags: ["Product", "Web & Mobile", "Payments", "Platform"],
    stack: [
      "Next.js",
      "React Native (Expo)",
      "TypeScript",
      "Node.js",
      "Appwrite",
      "Stripe",
      "GitHub Actions",
      "Figma",
      "Firebase (early)",
      "GCP (early)",
    ],
    highlights: [
      "Built the platform end-to-end across mobile, web, and backend workflows",
      "v1 launched in 2023 as a working ticketing baseline",
      "v2 started in Sept 2024: redesign, rebrand, and database migration to support richer features",
      "Migration designed for future portability beyond Appwrite",
    ],
    links: [
      { label: "Live site", href: "https://www.bublhub.com" },
      {
        label: "Demo purchase flow",
        href: "https://www.bublhub.com/eventListing/demo",
      },
      { label: "BublHub v2", href: "/projects/bublhub/v2" },
    ],
    body: {
      overview:
        "BublHub is a platform for organisers to publish events, sell tickets, and build communities that drive repeat attendance. It combines ticketing with a retention layer that helps event brands grow over time.",
      problem:
        "Organisers often stitch together multiple tools for promotion, ticketing, attendee management, and community engagement. That creates friction, inconsistent UX, and weak retention loops.",
      approach: [
        "Designed user journeys first, then built reusable UI patterns to keep web and mobile consistent",
        "Rebuilding the UI around a new brand direction so the product feels cohesive and scalable",
        "Redesigning the data model and migrating from Firebase to Appwrite to reduce lock-in and support a more complex platform",
        "Keeping portability in mind: vendor-specific code stays contained, product logic stays stable",
      ],
      outcome: [],
    },
    timeline: [
      {
        title: "Early builds and learning loop",
        period: "2018 — 2022",
        summary:
          "Built and tested the core journeys early: event creation, browsing, and ticket purchase. The focus was learning what mattered and proving the flow end-to-end.",
        bullets: [
          "Iterated on event structure, profiles, and navigation patterns",
          "Validated the basic ticketing journey with real usage",
          "Learned where the data model needed to evolve for the long-term vision",
        ],
        stack: ["React Native (early)", "Firebase (early)", "GCP (early)"],
      },
      {
        title: "v1 launch",
        period: "2023",
        summary:
          "Launched v1 as a working baseline. The aim was a stable ticketing foundation that could be built on, with clear UX and reliable core flows.",
        bullets: [
          "Shipped a usable ticketing baseline and core user journeys",
          "Improved UX consistency and release readiness",
          "Established the product direction beyond basic ticketing",
        ],
        stack: ["Expo", "TypeScript", "Firebase (v1)"],
      },
      {
        title: "v2 starts: redesign + migration planning",
        period: "Sept 2024 — Dec 2024",
        summary:
          "Started v2 work to modernise the UI, rebrand the product, and plan the database redesign required to support a more capable platform.",
        bullets: [
          "New UI direction and rebrand work in Figma + Adobe",
          "Planned the database redesign for richer features and relationships",
          "Set the portability goal: reduce lock-in and keep migration options open",
        ],
        stack: ["Figma", "Adobe", "TypeScript"],
      },
      {
        title: "v2 build: migration + feature layer",
        period: "2025 — Current",
        summary:
          "Ongoing v2 build: migrating from Firebase to Appwrite, redesigning the data model, and building new capability on top of the improved foundations.",
        bullets: [
          "Database migration and redesign: Firebase → Appwrite",
          "Expanded data model to support features beyond the original ticketing system",
          "Added clearer workflow boundaries and service structure to keep the system maintainable",
          "Portability mindset: vendor code stays contained, product logic stays stable",
          "Payments work: Stripe onboarding and purchase flow hardening",
        ],
        stack: [
          "Appwrite",
          "Stripe",
          "TypeScript",
          "Node.js",
          "Next.js",
          "Expo",
        ],
      },
    ],
    sections: [
      {
        title: "v2 objective",
        body: "v2 is a redesign + migration + build-out phase: modernise the UI, rebuild backend foundations, and add richer platform features on top of a more expressive data model — while keeping future portability realistic.",
        bullets: [
          "New UI and rebrand in Figma and the Adobe suite",
          "Database migration and redesign: Firebase → Appwrite",
          "More complex data model to support new platform features",
          "Designed for future migrations beyond Appwrite",
        ],
      },
      {
        title: "Technical overview",
        body: "The backend direction is to keep product logic stable and keep vendors contained: thin endpoints, services owning domain rules, and adapters wrapping vendor SDK calls.",
        bullets: [
          "Thin endpoints: authenticate, validate, delegate",
          "Service layer: business rules + orchestration",
          "Vendor isolation: DB/storage/payments behind small interfaces",
          "Workflow reliability: state-first flows and idempotency where it matters",
        ],
        stack: ["TypeScript", "Serverless Functions", "Appwrite", "Stripe"],
      },
      {
        title: "Demo",
        body: "A test-mode purchase flow that mirrors the intended production journey end-to-end.",
      },
      {
        title: "Future roadmap",
        body: "The next layer builds retention and organiser capability on top of solid ticketing foundations.",
        bullets: [
          "Organiser tooling: dashboards, comms, and event ops workflows",
          "Community layer for retention and identity",
          "Discovery + personalisation improvements",
          "Operational hardening: monitoring and failure handling",
          "Performance and release cadence improvements",
        ],
      },
    ],
  },
  {
    slug: "tea-powered-projects",
    title: "Tea Powered Projects",
    subtitle: "Client websites + CMS delivery (Next.js + PHP)",
    period: "2023 — Dec 2025",
    role: "Full-Stack Software Developer",
    tags: ["Agency", "CMS", "Performance", "Delivery"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "PHP",
      "MySQL",
      "Shopify",
      "GitLab CI",
      "GitHub Actions",
      "PhpStorm",
      "SEO",
    ],
    highlights: [
      "Delivered production work across multiple client sites with consistent quality and strong engineering discipline",
      "Built and extended a CMS system (PHP + Next.js) with reusable blocks and clean separation of concerns",
      "Led CI/CD improvements across GitLab and GitHub to keep delivery fast, reliable, and repeatable",
      "Worked across ecommerce, booking flows, and mobile delivery — not just frontend UI",
    ],
    body: {
      overview:
        "At Tea Powered Projects I shipped features across multiple production sites and shared internal systems. The work covered frontend delivery, PHP-backed CMS development, database workflows, and disciplined CI/CD practices to keep releases safe and repeatable.",
      problem:
        "Agency delivery demands speed without chaos. The challenge is shipping client changes quickly while keeping performance, consistency, SEO, and maintainability high across multiple codebases.",
      approach: [
        "Built CMS-driven page building via reusable blocks that made new layouts fast and consistent",
        "Worked across Next.js and PHP responsibilities with clear boundaries and maintainable structure",
        "Handled migrations of existing sites onto the CMS system with attention to SEO and performance",
        "Improved deployment reliability by setting up and maintaining CI/CD pipelines (GitLab + GitHub)",
        "Balanced delivery speed with clean code practices and predictable patterns",
      ],
      outcome: [
        "Improved delivery speed and consistency across multiple client sites",
        "Reduced duplication through reusable CMS blocks and shared UI patterns",
        "Supported SEO-friendly builds and content migrations without breaking existing visibility",
        "Strengthened engineering workflow through CI/CD and disciplined release practices",
      ],
    },
    sections: [
      {
        title: "Key projects and delivery",
        body: "I worked across a mix of ecommerce, booking platforms, and service businesses. The focus was shipping production-ready work with strong quality, not just making pages look good.",
        bullets: [
          "Reader: Shopify store work and ecommerce delivery",
          "Built a booking platform integrated with the CMS (PHP + Next.js)",
          "Migrated existing sites onto the CMS system while protecting SEO and performance",
          "Delivered work across trades, beauticians, and service businesses with production standards",
          "Built a mobile app for a locksmith business (web + mobile delivery experience)",
        ],
      },
      {
        title: "Backend, CMS, and data experience",
        body: "Alongside Next.js delivery, I worked in PHP-backed systems and database workflows where needed — building and extending CMS functionality and supporting real client operations.",
        bullets: [
          "PHP development in a structured CMS codebase",
          "MySQL familiarity and database-backed feature delivery",
          "Clean separation of concerns across UI, CMS logic, and integrations",
        ],
        stack: ["PHP", "MySQL", "Next.js"],
      },
      {
        title: "Engineering practices and CI/CD",
        body: "A major part of reliable delivery is workflow. I worked inside a merge-request culture and helped keep deployments predictable by improving CI/CD across projects.",
        bullets: [
          "GitLab merge requests, pipelines, and disciplined release workflow",
          "GitHub Actions and CI improvements where needed",
          "SEO-aware implementation across templates, pages, and migrations",
          "Consistent patterns and clean code habits that scale across teams",
        ],
        stack: ["GitLab CI", "GitHub Actions", "SEO", "TypeScript"],
      },
    ],
  },
];
