export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  gifUrl?: string;
}

export const projects: Project[] = [
  {
    title: "GameMatch",
    description:
      "A game discovery and recommendation web application that helps users find relevant games through improved tag-based matching. To address inaccurate metadata, the system refines game tags and supports AI-assisted tag extraction, leading to better recommendation quality and more useful search results.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "OpenAI API",
      "Recommendation Logic",
    ],
    githubUrl: "https://github.com/UMDKyle/GameMatch",
    demoUrl: "https://game-match-beta.vercel.app",
    featured: true,
    gifUrl: "/demos/gamematch.gif",
  },
  {
    title: "Culture-Links Translation Services Platform",
    description:
      "Built the full frontend of a production academic services platform using Vue.js, implementing multiple modules such as translation and document refinement. Designed responsive UI components and collaborated with backend APIs to deliver a smooth user experience.",
    tags: ["Vue.js", "TypeScript/JavaScript", "REST API", "API Design", "Web App"],
    githubUrl: "#",
    demoUrl: "https://apps.culture-links.com",
    gifUrl: "/demos/culturelinks.png",
  },
  {
    title: "Seray",
    description:
      "A campus-focused mobile and web platform designed to improve student wellness and social connection through event discovery, club recommendations, and community engagement features.",
    tags: ["React Native", "AWS Amplify", "DynamoDB", "TypeScript", "UI/UX"],
    githubUrl: "#",
    demoUrl: "#",
    gifUrl: "/demos/seray.png",
  },

  {
    title: "Apply Tracker",
    description:
      "A practical tool for tracking job applications and status updates, built to help organize the application process in a more structured and efficient way.",
    tags: ["Python", "SQLite", "CLI Tool", "Productivity"],
    githubUrl: "https://github.com/UMDKyle/apply-tracker",
    demoUrl: "#",
  },
];
