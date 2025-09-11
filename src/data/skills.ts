export interface Skill {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Tools" | "Languages";
}

export const skills: Skill[] = [
  // Frontend

  {
    name: "Python",
    icon: "python",
    category: "Backend",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    category: "Frontend",
  },
  {
    name: "React",
    icon: "react",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    category: "Frontend",
  },
  {
    name: "Astro",
    icon: "astro",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss",
    category: "Frontend",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    category: "Backend",
  },
  {
    name: "Cloudflare",
    icon: "cloudflare",
    category: "Tools",
  },
  {
    name: "Git",
    icon: "git",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: "github",
    category: "Tools",
  },
  {
    name: "Neovim",
    icon: "neovim",
    category: "Tools",
  },
];

export const getSkillsByCategory = (category: Skill["category"]) => {
  return skills.filter((skill) => skill.category === category);
};

export const getAllSkills = () => {
  return skills;
};
