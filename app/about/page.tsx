import Image from "next/image";
import Link from "next/link";

import { ExpandableNavbar } from "@/components/navigation/expandableNavbar";

const tools = ["Figma", "Canva", "HTML", "CSS", "React.js"];

export default function AboutPage() {
  return (
    <main className="min-h-svh bg-background text-white">
      <ExpandableNavbar />

      <section className="px-5 pb-24 pt-28 sm:px-6 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-[52rem]">
          <header className="grid grid-cols-[6rem_1fr] items-end gap-x-5 gap-y-6 [grid-template-areas:'photo_name'_'text_text'_'cta_cta'] sm:grid-cols-[8rem_1fr] sm:gap-x-6 md:grid-cols-[1fr_15rem] md:grid-rows-[1fr_auto_auto] md:gap-x-14 md:gap-y-0 md:[grid-template-areas:'name_photo'_'text_photo'_'cta_photo']">
            <div className="[grid-area:name]">
              <p className="text-sm text-white/50">Kathmandu, Nepal</p>
              <h1 className="mt-2 font-display text-4xl font-semibold leading-none tracking-tight sm:mt-3 sm:text-6xl md:text-7xl">
                Dikchya Rai
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-white/75 [grid-area:text] md:mt-5 md:max-w-md md:text-xl">
              UI/UX designer and IT student.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm [grid-area:cta] sm:flex sm:flex-wrap sm:gap-x-4 md:mt-8">
              <Link
                className="rounded-[4px] bg-accent px-6 py-3 text-center font-semibold text-black transition hover:bg-white"
                href="/work"
              >
                View my work
              </Link>
              <Link
                className="rounded-[4px] border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:border-accent hover:text-accent"
                href="/contact"
              >
                Get in touch
              </Link>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-surface [grid-area:photo] md:self-end">
              <Image
                src="/pfp.jpg"
                alt="Portrait of Dikchya Rai"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 240px, (min-width: 640px) 128px, 96px"
                priority
              />
            </div>
          </header>

          <div className="mt-14 grid gap-4 border-t border-white/10 pt-10 md:mt-20 md:grid-cols-[11rem_1fr] md:gap-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight">About me</h2>
            <div className="grid gap-4 text-base leading-relaxed text-white/70 md:text-lg">
              <p>
                I&apos;m studying for a BSc. (Hons.) in IT at Techspire College. I&apos;m mostly interested
                in UI/UX design, and I do most of my work in Figma.
              </p>
              <p>
                So far I&apos;ve redesigned Ncell&apos;s website, made a few portfolio and dashboard designs, and
                I&apos;m learning HTML, CSS and React on the side. I&apos;m looking for a chance to work with
                other designers and learn more.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 border-t border-white/10 pt-10 md:grid-cols-[11rem_1fr] md:gap-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight">Tools</h2>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li className="rounded-[4px] border border-white/15 px-4 py-2 text-white/85" key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
