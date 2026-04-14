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
    id: "texas-frontstep",
    title: "Texas Frontstep Media",
    description:
      "A website and photography service built for Texas real estate agents and small businesses who needed a professional online presence fast.",
    longDescription:
      "Texas Frontstep Media helps real estate agents and small business owners in Texas get online quickly with professional photography and clean, fast websites. The site itself is built for speed and reliability, and the service is designed to be simple: you get a professional result without the back-and-forth.",
    image: "/assets/websites/TexasFrontstep.png",
    technologies: ["Astro", "TailwindCSS", "TypeScript", "Cloudflare"],
    status: "completed",
    liveUrl: "https://texasfrontstep.com/",
    githubUrl: "https://github.com/djmartin2019/texas-frontstep",
    featured: true,
    category: "Business",
    startDate: "2025-08",
  },
  {
    id: "how-god-speaks-to-us",
    title: "How God Speaks to Us",
    description:
      "A content-driven website built for a Bible study group, allowing daily verses, blogs, and sermons to be published and scheduled ahead of time.",
    longDescription:
      "Built a full content-managed website for a Bible study group that needed a simple way to share daily verses, blogs, sermons, and documents with their community. The platform integrates with a CMS so new content can be added and scheduled ahead of time without touching code. Designed for reliability, ease of use, and consistent daily engagement.",
    image: "/assets/websites/HowGodSpeaks.png", // update if needed
    technologies: ["Astro", "TailwindCSS", "TypeScript", "Contentful"],
    status: "completed",
    liveUrl: "https://howgodspeakstous.com/",
    githubUrl: "", // leave empty if private
    featured: true,
    category: "Business",
    startDate: "2025-12",
  },
  {
    id: "foodly-map",
    title: "Foodly Map",
    description:
      "A food discovery app that shows you where your friends actually eat, not just what an algorithm thinks you'll like.",
    longDescription:
      "Foodly Map is built around a simple frustration: most food apps push you toward whatever is trending, not what you'd actually enjoy. This app lets you save places you've eaten, organize them into lists, and discover new spots through people you trust. It works on any device, loads fast, and respects your privacy. Currently in active development.",
    image: "/assets/websites/FoodlyMap.png",
    technologies: [
      "React",
      "Vite",
      "TanStack",
      "Supabase",
      "Mapbox",
      "Cloudflare Pages",
    ],
    status: "current",
    liveUrl: "https://foodlymap.com/",
    githubUrl: "https://github.com/djmartin2019/FoodlyMap",
    featured: true,
    category: "Product / Social",
    startDate: "2026-01",
  },
  {
    id: "astrocontentfulstarter",
    title: "Astro Contentful Starter Template",

    description:
      "A ready-to-use blog template for developers who want a fast, polished site without starting from scratch.",
    longDescription:
      "A starter template built for developers or small teams who want a blog that's fast, looks professional, and is easy to update. Content is managed through a simple online editor (no coding required to publish posts), and the site loads quickly on any connection. It comes ready to go out of the box.",
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
      "A personal photography portfolio with a built-in blog, built to showcase work and attract clients.",
    longDescription:
      "DaveyPics is a photography portfolio site designed to show off work and convert visitors into bookings. It loads fast, looks great on every device, and includes a blog that's easy to update without touching any code. A good example of what a clean, purpose-built portfolio site looks like.",
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
    id: "oblique-engine",
    title: "Oblique",
    description:
      "A custom game engine built from scratch, designed for RPGs where player choices actually change the world.",
    longDescription:
      "Oblique is a passion project: a game engine built from the ground up in C, designed to support classic-style RPGs where decisions have real consequences. Most game engines make choices converge back to a single path. Oblique is built to do the opposite. It's a deep technical project that demonstrates what's possible when you build the right tool for the job rather than bending an existing one out of shape.",
    image: "/assets/websites/Oblique.png",
    technologies: [
      "C",
      "SDL2",
      "Custom Pathfinding (A*)",
      "Isometric Rendering",
      "State Machines",
    ],
    status: "current",
    githubUrl: "https://github.com/djmartin2019/Oblique",
    featured: false,
    category: "Game Engine / Systems",
    startDate: "2025-12",
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
