import { ContactForm } from "../components/ContactForm";
import { Icon } from "../components/Icon";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner centered-heading animate-in">
          <p className="section-label">Get In Touch</p>
          <h1 className="section-title">
            Start a <span>conversation</span>.
          </h1>
          <p className="section-copy">
            For academic opportunities, collaboration, or a quick hello, leave a
            note below.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner contact-layout">
          <div className="contact-card reveal">
            <div className="icon-box">
              <Icon name="mail" />
            </div>
            <h2>Direct Contact</h2>
            <p>
              Prefer email? Use the address below and Dikchya can replace it
              with her real contact anytime.
            </p>
            <a href="mailto:dikchya.official1989@gmail.com">
              dikchya.official1989@gmail.com
            </a>
          </div>

          <div className="contact-panel reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
