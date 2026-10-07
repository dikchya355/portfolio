import { ExpandableNavbar } from "@/components/navigation/expandableNavbar";

const projects = [
  {
    title: "Ncell Website Redesign",
    category: "UI Redesign",
    description:
      "Redesigned Ncell's website interface, reworking the layout and navigation for a cleaner, more intuitive browsing experience.",
    tags: ["Figma", "UI/UX", "Information Architecture"],
  },
  {
    title: "Figma Portfolio Designs",
    category: "Web Design",
    description:
      "Designed a set of portfolio website interfaces, focusing on clean visual hierarchy, typography, and usability.",
    tags: ["Figma", "Typography", "Visual Design"],
  },
  {
    title: "Dashboard Designs",
    category: "Dashboard UI",
    description:
      "Designed UI layouts for dashboard interfaces, turning data-heavy screens into simple, intuitive views for end users.",
    tags: ["Figma", "UI Design", "Data Visualization"],
  },
];

const experience: { role: string; organization: string; period?: string; description: string }[] = [
  {
    role: "Assistant, Document Management",
    organization: "Himalayan Chess",
    period: "Current",
    description: "Assist with organizing, managing, and maintaining company documents and records.",
  },
  {
    role: "Volunteer, Robotics Club",
    organization: "Techspire College",
    description: "Volunteered in event coordination and team activities for Robotics Club events.",
  },
  {
    role: "Volunteer, PUBG Mobile Tournament",
    organization: "Techspire College",
    description: "Volunteered in organizing and coordinating logistics for the college's PUBG Mobile Tournament event.",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-svh bg-background text-white">
      <ExpandableNavbar />

      <section className="px-5 pb-24 pt-28 sm:px-6 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-[52rem]">
          <h1 className="font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl">
            Work
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            A few design projects I&apos;ve worked on in Figma, mostly redesigns and interface studies.
          </p>

          <div className="mt-14 border-t border-white/10">
            {projects.map((project, index) => (
              <article
                className="grid gap-5 border-b border-white/10 py-10 md:grid-cols-[15rem_1fr] md:gap-10"
                key={project.title}
              >
                <div
                  className="flex aspect-[4/3] items-end rounded-[4px] bg-surface p-4 max-md:max-w-sm"
                  aria-hidden="true"
                >
                  <span className="font-display text-5xl font-semibold tracking-tight text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="self-center">
                  <p className="text-sm text-white/50">{project.category}</p>
                  <h2 className="mt-1 text-2xl font-medium md:text-3xl">{project.title}</h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-white/70">{project.description}</p>
                  <p className="mt-4 text-sm text-white/50">{project.tags.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>

          <h2 className="mt-24 font-display text-4xl font-semibold tracking-tight md:text-5xl">Experience</h2>
          <div className="mt-8 border-t border-white/10">
            {experience.map((item) => (
              <article
                className="grid gap-2 border-b border-white/10 py-7 md:grid-cols-[15rem_1fr] md:gap-10"
                key={item.role}
              >
                <div>
                  <p className="text-white/85">{item.organization}</p>
                  {item.period && <p className="mt-1 text-sm text-accent">{item.period}</p>}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{item.role}</h3>
                  <p className="mt-2 leading-relaxed text-white/70">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
