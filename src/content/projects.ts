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
    period: "2024 — Present",
    role: "Founder / Full-Stack Developer",
    tags: ["Product", "Mobile", "Payments", "Platform"],
    stack: [
      "Next.js",
      "React Native (Expo)",
      "Appwrite",
      "Stripe Connect",
      "TypeScript",
      "GitLab CI",
    ],
    highlights: [
      "Designed and built a consistent experience across mobile and web",
      "Evolved the backend approach to reduce lock-in and support future growth",
      "Building organiser onboarding and payout-ready workflows using Stripe Connect",
    ],
    links: [
      { label: "Demo (coming soon)", href: "#" },
      { label: "Live site (when available)", href: "#" },
    ],
    body: {
      overview:
        "BublHub is a platform for organisers to publish events, sell tickets, and build communities that drive repeat attendance. It connects the ticketing workflow with the retention layer that makes event brands sustainable.",
      problem:
        "Organisers often stitch together multiple tools for promotion, ticketing, attendee management, and community engagement. That creates friction, inconsistent UX, and weak retention loops.",
      approach: [
        "Designed the user journeys first, then built reusable UI patterns that keep the experience consistent and scalable",
        "Built web + mobile with a shared product language and predictable navigation",
        "Structured backend responsibilities around data model clarity, permissions, and serverless workflows",
        "Chose an architecture that supports iteration and keeps future platform options open",
      ],
      outcome: [
        "Shipped the core platform foundations: auth, profile flows, events structure, and shared UI patterns",
        "Improved maintainability via clearer service boundaries and a more deliberate data model",
        "Implemented the groundwork for organiser onboarding and payout readiness",
      ],
    },
    timeline: [
      {
        title: "Phase 1 — Product design and system thinking",
        period: "Foundations",
        summary:
          "I treated BublHub as a product from day one: mapping user journeys, defining information architecture, and designing reusable UI patterns that can scale with the feature set.",
        bullets: [
          "Journey mapping: discovery → event detail → purchase → attendance → retention",
          "Organiser-first workflows: publishing, ticketing, payouts readiness, and trust signals",
          "Design system foundations that transfer cleanly to both mobile and web",
        ],
        stack: ["Figma", "Sketch"],
      },
      {
        title: "Phase 2 — Initial build (v1) and fast learning loops",
        period: "First implementation",
        summary:
          "The goal was end-to-end capability: ship working flows quickly, learn what matters, and validate navigation + data needs before hardening the platform.",
        bullets: [
          "Implemented early authentication and profile patterns",
          "Prototyped event creation and retrieval structures",
          "Validated core screens and interaction model across the app",
        ],
        stack: ["React Native (Expo)", "TypeScript", "Firebase (early)"],
      },
      {
        title: "Phase 3 — Migration to Appwrite for flexibility and control",
        period: "Architecture evolution",
        summary:
          "As the product matured, I focused on platform control: clearer boundaries, less vendor dependency, and a backend structure that supports long-term iteration.",
        bullets: [
          "Reworked collections and permissions with cleaner ownership boundaries",
          "Introduced serverless functions for platform workflows",
          "Improved service-layer separation to keep the app codebase clean",
        ],
        stack: ["Appwrite", "Serverless Functions", "TypeScript"],
      },
      {
        title: "Phase 4 — Platform hardening and feature expansion",
        period: "Build-out",
        summary:
          "This phase focuses on reliability and velocity: improving onboarding, standardising UI patterns, and refining data structures so new features don’t create chaos later.",
        bullets: [
          "Improved onboarding and profile completion flows",
          "Standardised UI primitives to ship new screens faster",
          "Refined data structures to support future community features",
        ],
        stack: ["Next.js", "Expo", "Appwrite", "TypeScript"],
      },
      {
        title: "Phase 5 — Launch readiness (v2 direction) + payments",
        period: "Current",
        summary:
          "Now the focus is finishing the release baseline and ensuring organiser onboarding and payouts are compliant, scalable, and easy to operate.",
        bullets: [
          "Stripe Connect onboarding and account status handling",
          "Platform fees + payout workflow planning",
          "Preparing the product for a public v2 launch",
        ],
        stack: ["Stripe Connect", "Appwrite", "Next.js", "React Native (Expo)"],
      },
    ],
    sections: [
      {
        title: "How I build products",
        body: "I aim for clean UX, strong defaults, and systems that don’t fight you as the product grows. That means predictable state, reusable components, and backend workflows that map to real product operations.",
        bullets: [
          "UX decisions are treated as system decisions",
          "Prefer maintainable patterns over clever shortcuts",
          "Reduce lock-in where it matters to keep options open",
        ],
      },
      {
        title: "What’s next",
        body: "Once the v2 baseline is solid, the next layer is community and organiser tooling: features that build retention, identity, and recurring culture — not just one-off ticket sales.",
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
    period: "2023 — Present",
    role: "Software Developer",
    tags: ["Agency", "CMS", "Performance", "Clean Code"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PHP",
      "MySQL",
      "GitLab CI",
      "PhpStorm",
    ],
    highlights: [
      "Delivered features and maintenance across multiple production client sites",
      "Built reusable CMS-driven blocks for scalable page building",
      "Worked in a clean code culture with separation of concerns and consistent patterns",
    ],
    body: {
      overview:
        "At Tea Powered Projects, I contribute to multiple production websites and shared internal systems. I ship features, extend CMS blocks, support ongoing maintenance, and help keep delivery fast without sacrificing code quality.",
      problem:
        "Agency work demands speed and stability. The challenge is shipping client updates quickly while maintaining consistency, performance, and a codebase the team can safely extend.",
      approach: [
        "Implemented CMS-driven page building via reusable content blocks",
        "Integrated frontend and backend responsibilities with clear boundaries",
        "Worked within a GitLab merge request workflow and CI pipelines",
        "Kept changes maintainable through consistent patterns and clean structure",
      ],
      outcome: [
        "Improved consistency and delivery speed across multiple sites",
        "Reduced duplication through reusable blocks and shared UI patterns",
        "Supported predictable deployments through a disciplined workflow",
      ],
    },
    sections: [
      {
        title: "What I delivered",
        body: "My work spans feature delivery and ongoing maintenance across multiple sites. I focused on building scalable page structures and shipping improvements that were safe, testable, and easy for the team to maintain.",
        bullets: [
          "CMS block development and layout improvements",
          "Design-to-build implementation with consistent UI patterns",
          "Bug fixing, refinements, and ongoing site maintenance",
        ],
      },
      {
        title: "Backend and integration experience",
        body: "Alongside Next.js delivery, I worked with PHP and database-backed systems where needed — including CMS integrations, MySQL workflows, and authentication patterns such as JWT-based flows.",
        bullets: [
          "PHP development in a structured codebase",
          "MySQL workflows and tooling familiarity",
          "JWT auth patterns and clean separation of concerns",
        ],
        stack: ["PHP", "MySQL", "JWT"],
      },
      {
        title: "Engineering practices",
        body: "A major part of reliable agency delivery is consistency. I worked in a codebase that prioritised clean code, shared conventions, and a workflow designed to reduce regressions.",
        bullets: [
          "GitLab pipelines and merge requests",
          "PhpStorm workflow and productivity habits",
          "SEO-aware implementation when delivering pages and content",
          "Maintainable structure with predictable patterns",
        ],
        stack: ["GitLab CI", "PhpStorm", "Next.js", "TypeScript"],
      },
    ],
  },
];
