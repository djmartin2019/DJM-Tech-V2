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
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
    status: "completed",
    liveUrl: "https://texasfrontstep.com/",
    githubUrl: "https://github.com/djmartin2019/texas-frontstep",
    featured: true,
    category: "Business",
    startDate: "2025-08",
  },
  {
    id: "sp500-analytics",
    title: "S&P 500 Analytics",
    description:
      "Comprehensive market-analysis dashboard using PostgreSQL, Python & Next.js.",
    longDescription:
      "A financial analytics platform providing comprehensive market analysis tools with real-time data visualization and historical trend analysis.",
    image: "/assets/websites/stock-market-dashboard.png",
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
    status: "current",
    githubUrl: "https://github.com/djmartin2019/stock-analysis-project",
    featured: true,
    category: "Finance",
    startDate: "2025-03",
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
