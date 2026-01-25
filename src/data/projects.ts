export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  status: "completed" | "current" | "roadmap";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  startDate?: string;
  endDate?: string;
}

export const projects: Project[] = [
  {
    id: "foodly-map",
    title: "Foodly Map",
    description:
      "A social, map-based food discovery app focused on personal taste and trusted recommendations.",
    longDescription:
      "Foodly Map is a social-first food discovery platform that lets users build a personal map of places they’ve actually eaten, organize them into custom lists, and discover new spots through friends they trust. Instead of algorithmic rankings and noisy star ratings, Foodly Map emphasizes real experiences, contextual discovery, and long-term usefulness. The product is being built as a progressive web app with a focus on performance, privacy, and a deliberate, human-centered UX.",
    image: "/assets/websites/FoodlyMap.png",
    technologies: [
      "React",
      "Vite",
      "TanStack",
      "Supabase",
      "Mapbox",
      "Cloudflare Pages"
    ],
    status: "current",
    liveUrl: "https://foodlymap.com/",
    githubUrl: "https://github.com/djmartin2019/FoodlyMap",
    featured: true,
    category: "Product / Social",
    startDate: "2026-01",
  },
  {
    id: "oblique-engine",
    title: "Oblique",
    description:
      "A custom-built isometric CRPG engine in C focused on consequence-driven gameplay and systemic design.",
    longDescription:
      "Oblique is a ground-up isometric CRPG engine written in C, designed to make building consequence-driven RPGs practical instead of painful. The engine emphasizes systems over scripting: tile-based worlds with cost-aware pathfinding, AP-driven movement, deterministic AI state machines, and a global world-state model that enables meaningful player choice. Rather than converging dialogue and quests back into a single outcome, Oblique is being built to support branching consequences, persistent NPC memory, and world reactions that naturally emerge from shared state. The project serves both as a deep dive into low-level engine architecture and as a foundation for authoring classic-style RPGs where decisions genuinely matter.",
    image: "/assets/websites/Oblique.png",
    technologies: [
      "C",
      "SDL2",
      "Custom Pathfinding (A*)",
      "Isometric Rendering",
      "State Machines"
    ],
    status: "current",
    githubUrl: "https://github.com/djmartin2019/Oblique",
    featured: true,
    category: "Game Engine / Systems",
    startDate: "2025-12",
  },  
  {
    id: "astrocontentfulstarter",
    title: "Astro Contentful Starter Template",
    description:
      "A production-ready blog starter template built with Astro and Contentful CMS.",
    longDescription:
      "A production-ready blog starter template built with Astro and Contentful CMS. Features interactive multi-tag filtering, beautiful responsive design, and seamless Cloudflare Pages deployment.",
    image: "/assets/websites/astro-contentful-home.png",
    technologies: ["Astro", "TailwindCSS", "TypeScript", "Contentful"],
    status: "completed",
    liveUrl: "https://astro-contentful-starter-project.pages.dev/",
    githubUrl:
      "https://github.com/djmartin2019/Astro-Contentful-Starter-Project",
    featured: true,
    category: "Portfolio",
    startDate: "2025-09",
  },
  {
    id: "daveypics",
    title: "DaveyPics",
    description:
      "My photography portfolio and blog powered by Next.js and Contentful.",
    longDescription:
      "A comprehensive photography portfolio showcasing my work with a dynamic blog system. Built with Next.js for optimal performance and Contentful for flexible content management.",
    image: "/assets/websites/daveypics.png",
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
    status: "completed",
    liveUrl: "https://www.daveypicsstudio.com/",
    githubUrl: "https://github.com/djmartin2019/DaveyPicsPortfolio",
    featured: true,
    category: "Portfolio",
    startDate: "2024-01",
  },
  {
    id: "texas-frontstep",
    title: "Texas Frontstep Media",
    description:
      "Professional photography and web services for real estate and small businesses.",
    longDescription:
      "A comprehensive service offering professional photography, one-page websites, and digital presence solutions for real estate listings, rentals, and small businesses in Texas.",
    image: "/assets/websites/TexasFrontstep.png",
    technologies: ["Astro", "TailwindCSS", "TypeScript", "Cloudflare"],
    status: "completed",
    liveUrl: "https://texasfrontstep.com/",
    githubUrl: "https://github.com/djmartin2019/texas-frontstep",
    featured: true,
    category: "Business",
    startDate: "2025-08",
  },
];

export const getProjectsByStatus = (status: Project["status"]) => {
  return projects.filter((project) => project.status === status);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: string) => {
  return projects.filter((project) => project.category === category);
};
