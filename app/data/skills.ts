export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      ".NET",
      "ASP.NET",
      "Web API",
      "Go",
      "Fiber",
    ],
  },
  {
    label: "Cloud & Tools",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
      "Prisma",
    ],
  },
  {
    label: "Other",
    skills: [
      "SQL",
      "DynamoDB",
      "REST APIs",
      "Full-Stack Development",
      "Recommendation Systems",
      "Problem Solving",
    ],
  },
];
