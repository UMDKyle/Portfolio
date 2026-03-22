import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-neutral-200 scroll-mt-16">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Skills</h2>
        <p className="text-sm text-neutral-500">
          Technologies and tools I work with regularly.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skillGroups.map(({ label, skills }) => (
          <div
            key={label}
            className="border border-neutral-200 rounded-xl p-5 hover:border-neutral-300 transition-colors"
          >
            <h3 className="text-xs font-semibold tracking-[0.15em] text-neutral-400 uppercase mb-4">
              {label}
            </h3>
            <ul className="space-y-2.5">
              {skills.map((skill) => (
                <li key={skill} className="text-sm text-neutral-700 leading-snug">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
