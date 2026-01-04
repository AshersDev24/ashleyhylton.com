// src/content/projects.ts
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
      "GitLab CI",
      "Figma",
      "Firebase (early)",
      "GCP (early)",
    ],
    highlights: [
      "Built the platform end-to-end across mobile, web, and backend workflows",
      "Moved the backend away from Firebase to reduce lock-in and improve control",
      "Improved code quality and maintainability with clearer service boundaries and structure",
      "Published builds to app stores and tightened release readiness for launch",
    ],
    links: [{ label: "Live site", href: "https://www.bublhub.com" }],
    body: {
      overview:
        "BublHub is a platform for organisers to publish events, sell tickets, and build communities that drive repeat attendance. It combines ticketing with a retention layer that helps event brands grow over time.",
      problem:
        "Organisers often stitch together multiple tools for promotion, ticketing, attendee management, and community engagement. That creates friction, inconsistent UX, and weak retention loops.",
      approach: [
        "Designed user journeys first, then built reusable UI patterns to keep web and mobile consistent",
        "Built the product as a real system: clear navigation, predictable state, and a UI language that scales",
        "Evolved backend responsibilities around data model clarity, permissions, and serverless workflows",
        "Reduced vendor lock-in by redesigning the backend approach and improving long-term flexibility",
      ],
      outcome: [
        "Shipped the core platform foundations: authentication, profiles, event structure, and shared UI patterns",
        "Improved maintainability with cleaner service boundaries and a more deliberate data model",
        "Implemented payments foundations with Stripe and structured onboarding flows for organisers",
        "Hardened the platform for launch with stronger structure, clearer flow, and higher code quality",
      ],
    },
    timeline: [
      {
        title: "Early builds and learning loop",
        period: "2018 — 2020",
        summary:
          "Started building BublHub by shipping real flows and learning what mattered most: the core journeys, the data model, and the interaction model.",
        bullets: [
          "Built initial mobile-first flows and tested real user journeys",
          "Iterated on event structure, profiles, and navigation patterns",
          "Focused on end-to-end execution over theory",
        ],
        stack: ["React Native (early)", "Firebase (early)", "GCP (early)"],
      },
      {
        title: "Product foundations and UI system direction",
        period: "2021 — 2023",
        summary:
          "Moved from experiments to foundations: reusable UI patterns, clearer architecture, and stronger system thinking across web and mobile.",
        bullets: [
          "Defined reusable UI primitives and consistent interaction patterns",
          "Improved separation of concerns to keep the codebase scalable",
          "Refined information architecture around organiser and attendee flows",
        ],
        stack: ["Figma", "TypeScript", "React Native (Expo)"],
      },
      {
        title: "Launch readiness and store publishing",
        period: "2024",
        summary:
          "Focused on shipping a stable baseline: release packaging, core flows, and improving consistency across screens.",
        bullets: [
          "Strengthened onboarding and profile completion flows",
          "Improved reliability and UX consistency across the product",
          "Published builds to app stores and refined release readiness",
        ],
        stack: ["Expo", "TypeScript", "Next.js"],
      },
      {
        title: "Backend redesign and migration to reduce lock-in",
        period: "2025",
        summary:
          "Rebuilt backend foundations to improve control, reduce vendor dependency, and raise code quality across the system.",
        bullets: [
          "Migrated away from Firebase to reduce lock-in and improve control",
          "Redesigned collections, permissions, and workflow boundaries",
          "Introduced serverless workflows and clearer service boundaries",
          "Improved code quality and maintainability across the app",
        ],
        stack: ["Appwrite", "Serverless Functions", "TypeScript", "Node.js"],
      },
      {
        title: "Payments and platform hardening",
        period: "Current",
        summary:
          "Finishing the release baseline and building payout-ready workflows with Stripe, while continuing to harden the platform structure.",
        bullets: [
          "Stripe onboarding and account status handling",
          "Platform fee + payout workflow planning",
          "Ongoing UX polish and reliability improvements",
        ],
        stack: ["Stripe", "Appwrite", "Next.js", "React Native (Expo)"],
      },
    ],
    sections: [
      {
        title: "How I build products",
        body: "I aim for clean UX, strong defaults, and systems that stay easy to work in as the product grows. I care about predictable state, reusable components, and backend workflows that map to real product operations.",
        bullets: [
          "UX decisions are treated as system decisions",
          "Maintainable patterns over clever shortcuts",
          "Clear boundaries between UI, domain logic, and backend workflows",
        ],
      },
      {
        title: "What’s next",
        body: "Once the baseline is solid, the next layer is community and organiser tooling: features that build retention and identity, not just one-off ticket sales.",
        bullets: [
          "Community layer + organiser tools",
          "Improved discovery and personalisation",
          "Reliability, performance, and release cadence improvements",
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
