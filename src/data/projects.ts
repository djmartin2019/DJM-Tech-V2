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
    id: "pyspark-stock-analysis-pipeline",
    title: "Stock Analysis Dashboard",
    description:
      "A comprehensive stock market analysis platform built with Apache Spark, Delta Lake, and Dash.",
    longDescription:
      "This project implements a modern data engineering pipeline following the medallion architecture pattern to ingest, process, and visualize stock market data from Alpha Vantage API.",
    image: "/assets/websites/AlphaVantageDashboard.png",
    technologies: ["Plotly", "Python", "PySpark", "Delta Lake"],
    status: "current",
    githubUrl:
      "https://github.com/djmartin2019/pyspark-stock-analysis-pipeline",
    featured: true,
    category: "Finance",
    startDate: "2025-09",
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
