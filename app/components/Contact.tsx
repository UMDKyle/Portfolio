import { contactLinks } from "../data/contacts";

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-neutral-200 scroll-mt-16">
      <h2 className="text-2xl font-bold text-neutral-900 mb-2">
        Let&apos;s Connect
      </h2>
      <p className="text-sm text-neutral-500 mb-10 max-w-lg leading-relaxed">
        I&apos;m actively looking for full-time software engineering roles. If you
        think there could be a fit — or just want to chat — I&apos;d love to hear
        from you.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        {contactLinks.map(({ label, href, display }) => {
          const isEmail = href.startsWith("mailto:");
          return (
            <a
              key={label}
              href={href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              className="group flex flex-col px-6 py-5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-sm transition-all duration-150"
            >
              <span className="text-xs font-semibold tracking-[0.15em] text-neutral-400 uppercase mb-1.5">
                {label}
              </span>
              <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors">
                {display}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
