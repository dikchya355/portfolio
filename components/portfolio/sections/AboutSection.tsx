import Image from "next/image";

type AboutSectionProps = {
  nextSectionIntroOffset?: number;
  opacity?: number;
};

export function AboutSection({ opacity = 1 }: AboutSectionProps) {
  return (
    <section
      className="min-h-svh bg-[#09060f] px-6 pb-16 pt-32 text-white md:px-10"
      style={{ opacity }}
    >
      <div className="mx-auto flex w-full max-w-[52rem] flex-col items-center gap-9 md:flex-row md:gap-12">
        <div className="relative size-44 shrink-0 overflow-hidden rounded-full border border-fuchsia-200/45 bg-[#160526]  md:size-52">
          <Image
            src="/pfp.jpg"
            alt="Dikchya Rai"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 208px, 176px"
            priority
          />
        </div>
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl font-medium tracking-tight text-cyan-200 md:text-6xl">
            Dikchya Rai
          </h1>
          <p className="mt-2 text-lg leading-relaxed text-purple-100/85 md:text-2xl">
            Creative developer and interface designer based in Nepal.
          </p>
          <p className="mt-1 text-base leading-relaxed text-purple-100/65 md:text-xl">
            I turn ideas into thoughtful, responsive digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
