const email = "hello@dikchya.dev";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M5.35 3.5a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7ZM3.3 9.8h4.1v10.7H3.3V9.8Zm6.67 0h3.93v1.46h.06c.55-1.04 1.88-2.14 3.87-2.14 4.14 0 4.9 2.72 4.9 6.26v5.12h-4.1v-4.54c0-1.08-.02-2.48-1.51-2.48-1.51 0-1.74 1.18-1.74 2.4v4.62h-4.1V9.8Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.6" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M13.8 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.25-1.5 1.57-1.5h1.68V3.62A22.6 22.6 0 0 0 14.57 3c-2.45 0-4.13 1.5-4.13 4.24V9.9H7.67V13h2.77v8h3.36Z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  return (
    <section className="grid min-h-svh place-items-center bg-[#09060f] px-6 pt-20 text-white">
      <div className="w-full max-w-[52rem] text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Contact</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">Let&apos;s work together.</h1>
        <a
          className="mt-7 inline-block text-lg text-fuchsia-200 underline decoration-1 underline-offset-4 transition hover:text-cyan-200 md:text-2xl"
          href={`mailto:${email}`}
        >
          {email}
        </a>
        <div className="mt-8 flex justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              aria-label={social.label}
              className="grid size-11 place-items-center rounded-full border border-white/15 text-cyan-100 transition hover:border-fuchsia-200 hover:bg-white/10 hover:text-fuchsia-200"
              href={social.href}
              key={social.label}
              rel="noreferrer"
              target="_blank"
            >
              <span className="size-5">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
