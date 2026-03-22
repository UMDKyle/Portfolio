import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 border-t border-neutral-200 scroll-mt-16">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Projects</h2>
        <p className="text-sm text-neutral-500 max-w-xl">
          A selection of things I&apos;ve built — ranging from full-stack web apps to
          backend services and developer tools.
        </p>
      </div>

      {/* Featured project: full width */}
      {featured.length > 0 && (
        <div className="mb-14">
          {featured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      )}

      {/* Remaining projects: 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {rest.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
