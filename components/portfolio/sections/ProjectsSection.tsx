import { projectCards } from "../data/constants";

function ProjectPreview({ index }: { index: number }) {
  const colors = ["#0d4552", "#351148", "#24205b", "#123f3d", "#4b1538"];

  return (
    <div
      className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg"
      style={{ backgroundColor: colors[index % colors.length] }}
      aria-hidden="true"
    >
      <div className="absolute size-[58%] rounded-full border-[10px] border-cyan-200/35" />
      <div className="absolute h-[18%] w-[66%] rotate-[-12deg] rounded-full bg-fuchsia-200/35" />
      <span className="relative text-center text-lg font-bold uppercase tracking-[0.12em] text-white/75">
        Project<br />Preview
      </span>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="min-h-svh bg-[#09060f] px-6 pb-16 pt-28 text-white md:px-8">
      <div className="mx-auto w-full max-w-[52rem]">
        <h1 className="text-2xl font-bold uppercase tracking-tight text-cyan-200 md:text-3xl">Development</h1>
        <div className="mt-5 divide-y divide-white/10">
          {projectCards.map((project, index) => (
            <article className="grid gap-7 py-8 md:grid-cols-[17rem_1fr] md:gap-7" key={project.title}>
              <ProjectPreview index={index} />
              <div className="self-center">
                <h2 className="text-3xl font-medium text-fuchsia-200 md:text-4xl">{project.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-purple-100/70 md:text-lg">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm text-cyan-100/65">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
