import Image from "next/image";
import Link from "next/link";
import { Icon } from "./components/Icon";
import { projects } from "./components/data";

export default function Home() {
  return (
    <>
      <section className="hero-section" id="hero">
        <div className="hero-heading">
          <p className="hero-kicker animate-in">Undergraduate Portfolio</p>
          <h1 className="hero-title animate-in delay-1">
            Research, writing, and thoughtful <span>digital design</span>.
          </h1>
        </div>

        <div className="hero-panel animate-in delay-2">
          <div className="profile-frame image-frame">
            <div className="profile-photo-wrap">
              <Image
                alt="Portrait of Dikchya Rai"
                className="profile-photo"
                height={520}
                priority
                src="/pfp.jpg"
                width={420}
              />
            </div>
          </div>
        </div>

        <p className="hero-intro animate-in delay-2">
          A focused portfolio shaped around learning, clear communication, and
          creative academic work.
        </p>

        <div className="hero-actions animate-in delay-3">
          <Link className="btn btn-primary" href="/work">
            View work
          </Link>
          <Link className="btn btn-outline" href="/contact">
            Say hello
          </Link>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner centered-heading reveal">
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">
            Selected pieces with <span>strong structure</span>.
          </h2>
        </div>

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
              <Link href="/work">Open work -&gt;</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
