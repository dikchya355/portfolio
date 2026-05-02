import { Icon } from "../components/Icon";
import { focusCards } from "../components/data";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner centered-heading animate-in">
          <p className="section-label">About Me</p>
          <h1 className="section-title">
            A centered space for <span>learning</span> and growth.
          </h1>
          <p className="section-copy">
            Dikchya is interested in the meeting point between people, learning,
            and digital expression. Her work is quiet, clear, and built around
            steady improvement.
          </p>
        </div>
      </section>

      <section className="content-section surface-section">
        <div className="section-inner two-column">
          <div className="reveal">
            <p className="section-label">Strengths</p>
            <h2 className="section-title">
              Growing through <span>steady practice</span>.
            </h2>
            <p className="section-copy">
              Her focus is less about numbers and more about building a calm,
              reliable way of thinking: observing carefully, writing clearly,
              and presenting ideas with intention.
            </p>
            <div className="note-list">
              <p>Research-minded and curious</p>
              <p>Clear communicator</p>
              <p>Careful with visual details</p>
            </div>
          </div>

          <div className="focus-list reveal">
            {focusCards.map((card) => (
              <article className="focus-card" key={card.title}>
                <div className="icon-box">
                  <Icon name={card.icon} />
                </div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
