"use client";

import { FormEvent } from "react";

import { ExpandableNavbar } from "@/components/navigation/expandableNavbar";
import { SocialLinks } from "@/components/ui/socialLinks";

// Used only to address the visitor's mail app; never rendered on the page.
const inbox = "dikchya.official1989@gmail.com";

const fieldClassName =
  "w-full rounded-[4px] border border-white/10 bg-[#0e0b14] px-4 text-[0.95rem] text-white placeholder:text-white/30 outline-none transition hover:border-white/20 focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = name ? `Hello from ${name}` : "Hello from your portfolio";

    window.location.href = `mailto:${inbox}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-svh bg-background text-white">
      <ExpandableNavbar />

      <section className="px-5 pb-24 pt-28 sm:px-6 md:px-10 md:pt-36">
        <div className="mx-auto grid w-full max-w-[52rem] gap-14 md:grid-cols-[1fr_22rem] md:gap-12">
          <div>
            <h1 className="font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl md:text-7xl">
              Get in touch
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
              I&apos;m open to internships and junior UI/UX roles. Send me a message and I&apos;ll get back to
              you.
            </p>

            <dl className="mt-12 grid gap-8 border-t border-white/10 pt-8">
              <div>
                <dt className="text-sm text-white/50">Based in</dt>
                <dd className="mt-2 text-white/85">Kathmandu, Nepal</dd>
              </div>
              <div>
                <dt className="text-sm text-white/50">Elsewhere</dt>
                <dd className="mt-2">
                  <SocialLinks />
                </dd>
              </div>
            </dl>
          </div>

          <form
            className="grid content-start gap-5 rounded-[4px] border border-white/10 bg-surface p-6 md:p-7"
            onSubmit={handleSubmit}
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight">Send me an email</h2>
            <label className="grid gap-2 text-sm font-medium text-white/70">
              Your name
              <input className={`${fieldClassName} h-12`} name="name" placeholder="Jane Doe" type="text" autoComplete="name" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white/70">
              Message
              <textarea
                className={`${fieldClassName} h-40 resize-none py-3 leading-relaxed`}
                name="message"
                placeholder="Hi Dikchya, ..."
                required
              />
            </label>
            <button
              className="rounded-[4px] bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
              type="submit"
            >
              Send email
            </button>
            <p className="text-xs leading-relaxed text-white/40">Opens your email app with the message filled in.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
