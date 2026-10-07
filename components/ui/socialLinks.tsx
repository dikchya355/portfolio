import type { ReactNode } from "react";

export const socialProfiles = [
  { label: "GitHub", handle: "dikchya355", href: "https://github.com/dikchya355" },
  { label: "LinkedIn", handle: "dikchya-rai", href: "https://www.linkedin.com/in/dikchya-rai-b59a41339" },
] as const;

const icons: Record<(typeof socialProfiles)[number]["label"], ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.09.65-.2.65-.46v-1.6c-2.64.57-3.2-1.27-3.2-1.27-.43-1.1-1.06-1.39-1.06-1.39-.86-.59.07-.58.07-.58.95.07 1.45.98 1.45.98.85 1.45 2.22 1.03 2.76.79.09-.61.33-1.03.6-1.27-2.1-.24-4.32-1.05-4.32-4.68 0-1.03.37-1.88.98-2.54-.1-.24-.43-1.2.09-2.5 0 0 .8-.26 2.61.97a9.03 9.03 0 0 1 4.75 0c1.81-1.23 2.61-.97 2.61-.97.52 1.3.19 2.26.09 2.5.61.66.98 1.51.98 2.54 0 3.64-2.22 4.44-4.34 4.67.34.3.64.88.64 1.77v2.63c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M5.35 3.5a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7ZM3.3 9.8h4.1v10.7H3.3V9.8Zm6.67 0h3.93v1.46h.06c.55-1.04 1.88-2.14 3.87-2.14 4.14 0 4.9 2.72 4.9 6.26v5.12h-4.1v-4.54c0-1.08-.02-2.48-1.51-2.48-1.51 0-1.74 1.18-1.74 2.4v4.62h-4.1V9.8Z" />
    </svg>
  ),
};

export function SocialLinks({ className = "", iconsOnly = false }: { className?: string; iconsOnly?: boolean }) {
  return (
    <div className={["flex flex-wrap gap-x-6 gap-y-3", className].join(" ")}>
      {socialProfiles.map((social) => (
        <a
          aria-label={`${social.label}: ${social.handle}`}
          className="flex items-center gap-2 text-sm text-white/70 transition hover:text-accent"
          href={social.href}
          key={social.label}
          rel="noreferrer"
          target="_blank"
        >
          <span className={iconsOnly ? "size-6" : "size-4"}>{icons[social.label]}</span>
          {!iconsOnly && <span>{social.label}</span>}
        </a>
      ))}
    </div>
  );
}
