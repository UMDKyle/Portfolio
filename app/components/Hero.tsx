export default function Hero() {
  return (
    <section className="pt-24 pb-20 text-center">
      {/* Eyebrow */}
      <p className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-6">
        Software Engineer Portfolio
      </p>

      {/* Name */}
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900 mb-4">
        Kailun Wang
      </h1>

      {/* Role */}
      <p className="text-base sm:text-lg font-medium text-neutral-500 mb-7">
        Software Engineer &nbsp;·&nbsp; Full-Stack Developer
      </p>

      {/* Intro */}
      <p className="text-[15px] text-neutral-500 max-w-xl mx-auto leading-relaxed mb-5">
        I build practical full-stack web applications with a focus on clean user
        experience, scalable architecture, and real-world usefulness. I enjoy
        turning ideas into working products using modern web technologies and
        cloud tools.
      </p>

      {/* Status */}
      <p className="text-sm text-neutral-400 mb-10">
        Currently pursuing M.Eng in Software Engineering at the University of
        Maryland
      </p>

      {/* Action buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="px-6 py-2.5 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
        >
          View Projects
        </a>
        <a
          href="https://github.com/UMDKyle"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-md border border-neutral-300 text-neutral-700 text-sm font-medium hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="/Kailun_Wang_Resume.pdf"
          download="Kailun_Wang_Resume.pdf"
          className="px-6 py-2.5 rounded-md border border-neutral-300 text-neutral-700 text-sm font-medium hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
        >
          Resume ↓
        </a>
      </div>
    </section>
  );
}
