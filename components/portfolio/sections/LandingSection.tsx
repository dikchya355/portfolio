import { CSSProperties, RefObject } from "react";

import {
  animatedWords,
  maxPanelHeight,
  minPanelHeight,
} from "../data/constants";

type LandingSectionProps = {
  contentLift: number;
  exitProgress: number;
  gridRef: RefObject<HTMLDivElement | null>;
  landingOpacity: number;
  landingDetailsOpacity: number;
  progress: number;
  wordStageOpacity: number;
};

export function LandingSection({
  contentLift,
  exitProgress,
  gridRef,
  landingDetailsOpacity,
  landingOpacity,
  progress,
  wordStageOpacity,
}: LandingSectionProps) {
  const panelHeight =
    minPanelHeight + progress * (maxPanelHeight - minPanelHeight);
  const easedExit = 1 - Math.pow(1 - exitProgress, 3);

  return (
    <>
      <div className="ambient-background fixed inset-0 -z-30" aria-hidden="true" />
      <div ref={gridRef} className="ambient-grid fixed inset-0 -z-20" aria-hidden="true" />
      <div className="ambient-vignette fixed inset-0 -z-10" aria-hidden="true" />

      <div
        className="landing-cover pointer-events-none fixed inset-0 z-[5] transition-opacity duration-300"
        style={{ opacity: landingOpacity }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none fixed left-1/2 top-[7.75rem] z-[6] grid w-[min(calc(100%_-_2rem),52rem)] -translate-x-1/2 grid-cols-[1fr_auto_1fr] items-center gap-5 text-[0.68rem] font-black uppercase tracking-[0.24em] text-white/40 transition-opacity duration-200 max-md:top-[6.5rem] max-md:grid-cols-1 max-md:justify-items-center max-md:gap-2 max-md:text-center"
        style={{ opacity: landingDetailsOpacity }}
        aria-hidden="true"
      >
        <span className="justify-self-start text-cyan-100/65 max-md:justify-self-center">
          Creative Developer
        </span>
        <span className="h-px w-24 bg-white/18 max-md:w-16" />
        <span className="justify-self-end text-fuchsia-100/58 max-md:justify-self-center">
          Interface + Motion
        </span>
      </div>

      <section
        className="fixed left-1/2 top-[calc(50%+1.75rem)] z-10 w-[min(calc(100%_-_2rem),52rem)] -translate-x-1/2 -translate-y-1/2"
        aria-label="Scroll-resizing landing panel"
      >
        <div
          className="scroll-expanding-row relative max-h-[calc(100svh-7.5rem)] w-full overflow-hidden rounded-[4px] bg-black/65 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all duration-500 ease-out"
          style={{
            height: `${panelHeight}rem`,
            opacity: landingOpacity,
            transform: `translateY(${-easedExit * 3}rem) scale(${1 - easedExit * 0.025})`,
          }}
        >
          <div
            className="hero-word-stage"
            style={{ opacity: wordStageOpacity }}
            aria-hidden="true"
          >
            {animatedWords.map((word, index) => (
              <span
                className="hero-word"
                key={word.label}
                style={{
                  "--word-enter-x": word.enterX,
                  "--word-enter-y": word.enterY,
                  animationDelay: `${index * 2}s`,
                } as CSSProperties}
              >
                {word.label}
              </span>
            ))}
          </div>
          <div
            className="relative z-10 grid h-full grid-cols-[minmax(0,1fr)_13rem] items-center gap-7 p-8 transition-transform duration-300 ease-out max-md:grid-cols-1 max-md:content-center max-md:gap-6 max-sm:p-6"
            style={{ transform: `translateY(${contentLift}rem)` }}
          >
            <div className="min-w-0">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.26em] text-cyan-200">
                Dikchya Rai
              </p>
              <h1 className="max-w-[8.8ch] text-[clamp(2.8rem,7.2vw,4.75rem)] font-black uppercase leading-[0.9] tracking-normal">
                Designing clean digital spaces.
              </h1>
            </div>
            <div className="max-w-[13rem] border-l border-white/15 pl-5 max-md:max-w-md max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-5">
              <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-fuchsia-200/80">
                Creative Developer
              </p>
              <p className="text-sm leading-6 text-purple-100/72">
                I shape ideas into clean interfaces, smooth interactions, and responsive digital products.
              </p>
              <div className="mt-5 grid gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/45">
                <span>Frontend</span>
                <span>Interface Design</span>
                <span>Motion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="pointer-events-none fixed bottom-10 left-1/2 z-[6] grid w-[min(calc(100%_-_2rem),52rem)] -translate-x-1/2 grid-cols-[1fr_auto] items-end gap-6 text-[0.68rem] font-black uppercase tracking-[0.26em] text-white/42 transition-opacity duration-200 max-sm:bottom-6 max-sm:grid-cols-1 max-sm:gap-3"
        style={{ opacity: landingDetailsOpacity }}
        aria-hidden="true"
      >
        <div>
          <p className="mb-2 text-cyan-100/75">Portfolio 2026</p>
          <p className="max-w-[24rem] text-xs font-medium normal-case leading-5 tracking-normal text-purple-100/55">
            Frontend, interface design, and motion-led web experiences.
          </p>
        </div>
        <div className="flex items-center gap-3 justify-self-end text-fuchsia-100/60 max-sm:justify-self-start">
          <span>Scroll</span>
          <span className="h-px w-12 bg-fuchsia-100/35" />
          <span>Explore</span>
        </div>
      </div>
    </>
  );
}
