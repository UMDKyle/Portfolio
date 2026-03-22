const NAV_LINKS = ["Projects", "Skills", "About", "Contact"] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold text-neutral-900 tracking-tight hover:text-neutral-500 transition-colors"
        >
          Kailun Wang
        </a>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-1.5 text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
