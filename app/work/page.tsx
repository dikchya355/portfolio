import Link from "next/link";
import { Icon } from "../components/Icon";
import { process, projects } from "../components/data";

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner centered-heading animate-in">
          <p className="section-label">Selected Work</p>
          <h1 className="section-title">
            Simple projects with <span>strong structure</span>.
          </h1>
          <p className="section-copy">
            A compact set of portfolio pieces that can grow as Dikchya&apos;s
            academic and creative work develops.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner work-grid reveal">
          {projects.map((project, index) => (
            <article
              className="work-card"
              key={project.title}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="work-thumb">
                <Icon name={project.icon} />
              </div>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link href="/contact">Discuss this -&gt;</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section surface-section">
        <div className="section-inner centered-heading reveal">
          <p className="section-label">How I Work</p>
          <h2 className="section-title">
            A clear <span>four-step</span> rhythm.
          </h2>
          <p className="section-copy">
            Every project starts with understanding, then moves through
            structure, creation, and careful finishing.
          </p>
        </div>

        <div className="section-inner process-grid reveal">
          {process.map((item) => (
            <article className="process-card" key={item.step}>
              <span className="step-number">{item.step}</span>
              <div className="icon-box">
                <Icon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
