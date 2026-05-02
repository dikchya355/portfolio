"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icon";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      form.reset();
    }, 2600);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input aria-label="Your name" placeholder="Your name" required />
        <input
          aria-label="Email address"
          placeholder="Email address"
          required
          type="email"
        />
      </div>
      <input aria-label="Subject" placeholder="Subject" />
      <textarea aria-label="Message" placeholder="Message" rows={5} />
      <button className="btn btn-primary submit-btn" type="submit">
        <Icon name={sent ? "spark" : "send"} />
        {sent ? "Message sent" : "Send message"}
      </button>
    </form>
  );
}
