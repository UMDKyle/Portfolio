interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  gifUrl?: string;
}

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-medium border border-neutral-200">
      {tag}
    </span>
  );
}

function ActionLinks({
  githubUrl,
  demoUrl,
  featured,
}: {
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}) {
  return (
    <div className="flex gap-3">
      {githubUrl && githubUrl !== "#" ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            featured
              ? "px-4 py-2 rounded-md border border-neutral-300 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
              : "text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          }
        >
          GitHub →
        </a>
      ) : (
        <span className="text-xs text-neutral-400 cursor-default">
          GitHub (private)
        </span>
      )}
      {demoUrl && demoUrl !== "#" && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            featured
              ? "px-4 py-2 rounded-md bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-700 transition-colors"
              : "text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          }
        >
          Live Demo →
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  featured,
  gifUrl,
}: ProjectCardProps) {
  if (featured) {
    return (
      <div className="flex flex-col border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-400 hover:shadow-sm transition-all duration-200 bg-white">
        {/* Two-column layout on md+: content left, GIF right */}
        <div className={`flex flex-col ${gifUrl ? "md:flex-row" : ""}`}>
          {/* Content */}
          <div className="flex flex-col p-8 flex-1 min-w-0">
            <p className="text-xs font-semibold tracking-[0.18em] text-neutral-400 uppercase mb-4">
              Featured Project
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">{title}</h3>
            <p className="text-[15px] text-neutral-500 leading-relaxed mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
            <div className="mt-auto">
              <ActionLinks githubUrl={githubUrl} demoUrl={demoUrl} featured />
            </div>
          </div>

          {/* GIF preview */}
          {gifUrl && (
            <div className="md:w-80 shrink-0 border-t md:border-t-0 md:border-l border-neutral-200 bg-neutral-50 flex items-center justify-center p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={gifUrl}
                alt={`${title} demo`}
                className="rounded-lg w-full h-auto object-cover max-h-64 md:max-h-none"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-400 hover:shadow-sm transition-all duration-200 bg-white">
      {/* GIF banner at top */}
      {gifUrl && (
        <div className="border-b border-neutral-200 bg-neutral-50 overflow-hidden h-44">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gifUrl}
            alt={`${title} demo`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Card content */}
      <div className="flex flex-col p-6 flex-1">
        <h3 className="text-base font-semibold text-neutral-900 mb-2">{title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed mb-5 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
        <div className="pt-4 border-t border-neutral-100 mt-auto">
          <ActionLinks githubUrl={githubUrl} demoUrl={demoUrl} />
        </div>
      </div>
    </div>
  );
}
