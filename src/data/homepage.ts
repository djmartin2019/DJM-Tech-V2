export type HomepageProjectStatus = "completed" | "in-progress";

export interface HomepageProject {
  id: string;
  title: string;
  description: string;
  focus: string[];
  technologies: string[];
  href: string;
  githubUrl?: string;
  status?: HomepageProjectStatus;
  icon: "activity" | "cloud" | "network" | "server";
}

export const homepageProjects: HomepageProject[] = [
  {
    id: "sentinel",
    title: "Sentinel",
    description:
      "Observability dashboard for infrastructure health, uptime, telemetry, and operational metrics, built with Next.js, Postgres, Prisma, and TypeScript.",
    focus: [
      "Query optimization",
      "Scaling under load",
      "Backend aggregation",
      "Operational visibility",
    ],
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    href: "https://sentinel.djm-apps.com/",
    githubUrl: "https://github.com/djmartin2019/Sentinel",
    status: "in-progress",
    icon: "activity",
  },
  {
    id: "rendorix",
    title: "Rendorix",
    description:
      "AWS-powered image optimization and transformation pipeline using CloudFront, Lambda, Sharp, Terraform, and S3.",
    focus: [
      "CDN architecture",
      "Signed URLs",
      "Edge caching",
      "Serverless image processing",
    ],
    technologies: ["AWS", "CloudFront", "Lambda", "Terraform", "Sharp"],
    href: "https://rendorix.dev/",
    githubUrl: "https://github.com/djmartin2019/Rendorix",
    icon: "cloud",
  },
  {
    id: "localwatch",
    title: "LocalWatch",
    description:
      "Privacy-first desktop app (Electron + Next.js) that captures packets via tshark, aggregates metrics in real time, and streams operational snapshots to a local dashboard.",
    focus: [
      "Event pipelines",
      "Throughput monitoring",
      "Packet aggregation",
      "Real-time telemetry",
    ],
    technologies: ["TypeScript", "Electron", "tshark", "WebSocket"],
    href: "https://github.com/djmartin2019/LocalWatch",
    githubUrl: "https://github.com/djmartin2019/LocalWatch",
    status: "in-progress",
    icon: "network",
  },
  {
    id: "edge-cache",
    title: "Edge Cache / Gateway",
    description:
      "GH Resolver edge cache lab: a custom edge/origin gateway exploring rate limiting, proxy architecture, and response caching with Node.js and Docker.",
    focus: [
      "Middleware pipelines",
      "Proxy systems",
      "Caching strategies",
      "Operational infrastructure",
    ],
    technologies: ["Node.js", "Docker", "Redis", "HTTP"],
    href: "https://githublookup.djm-apps.com/",
    icon: "server",
  },
];

export const infrastructureStack = [
  "Ubuntu VPS",
  "Apache reverse proxies",
  "Docker Compose",
  "Cloudflare",
  "TLS / SSL",
  "PostgreSQL",
  "TypeScript services",
  "Deployment pipelines",
];

/** Factual stack description (no live metrics). */
export const infrastructureLayers = [
  {
    tier: "Edge",
    detail: "Cloudflare DNS and proxy in front of the VPS",
  },
  {
    tier: "Reverse proxy",
    detail: "Apache terminates TLS and routes requests to services",
  },
  {
    tier: "Runtime",
    detail: "Docker Compose runs TypeScript backends and Next.js apps",
  },
  {
    tier: "Data",
    detail: "PostgreSQL backs observability and application state",
  },
];

export const vpsDashboardHighlights = [
  "Entry point for self-hosted lab projects",
  "Links to platform apps running on the VPS",
  "A place to browse experiments as they ship",
];
