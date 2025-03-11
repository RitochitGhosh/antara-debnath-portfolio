export interface Project {
    title: string;
    description: string;
    technologies: string[];
    sourceCode?: string;
    deployedUrl?: string;
    thumbnail?: string;
    completedAt: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description: "A modern portfolio website built with Next.js and Tailwind CSS",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      sourceCode: "https://github.com/RitochitGhosh/antara-debnath-portfolio",
      deployedUrl: "https://antara-debnath-portfolio.vercel.app/",
      completedAt: "2024-03-20"
    },
    // Add more projects here
  ]; 