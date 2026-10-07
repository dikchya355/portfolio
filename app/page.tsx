"use client";

import { CSSProperties, useEffect, useState } from "react";
import Link from "next/link";

import { ExpandableNavbar } from "@/components/navigation/expandableNavbar";
import {
  landingScrollDistance,
  usePortfolioMotion,
} from "@/hooks/usePortfolioMotion";
import Loading from "./loading";

const minPanelHeight = 12;
const maxPanelHeight = 34;

const kathmanduTime = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "Asia/Kathmandu",
});

const animatedWords = [
  { label: "DESIGN", enterX: "-70%", enterY: "120%" },
  { label: "BUILD", enterX: "-30%", enterY: "120%" },
  { label: "CREATE", enterX: "-58%", enterY: "145%" },
  { label: "PORTFOLIO", enterX: "-42%", enterY: "145%" },
];

const exploreLinks = [
  { label: "Work", href: "/work", note: "Projects & experience" },
  { label: "About", href: "/about", note: "A bit about me" },
  { label: "Contact", href: "/contact", note: "Say hello" },
];

export default function Home() {
  const { exitProgress, gridRef, progress } = usePortfolioMotion();
  const [mounted, setMounted] = useState(true);
  const [fade, setFade] = useState(false);
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setLocalTime(kathmanduTime.format(new Date()));
    const firstTick = setTimeout(tick, 0);
    const interval = setInterval(tick, 15_000);

    return () => {
      clearTimeout(firstTick);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Start fading out after 1.2s
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1200);

    // Unmount completely after fade finishes (1.7s total)
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  const contentLift = (1 - progress) * 18 - progress * 2.75;
  const wordStageOpacity = Math.max(0, 1 - progress * 10);
  const landingDetailsOpacity = Math.max(0, 1 - progress * 7);
  const easedExit = 1 - Math.pow(1 - exitProgress, 3);
  const landingOpacity = 1 - easedExit;
  const panelHeight = minPanelHeight + progress * (maxPanelHeight - minPanelHeight);

  return (
    <>
      {mounted && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Loading />
        </div>
      )}

      <main className="relative isolate min-h-svh overflow-x-hidden bg-background text-white">
        <ExpandableNavbar />

        <div className="ambient-background fixed inset-0 -z-30" aria-hidden="true" />
        <div ref={gridRef} className="ambient-grid fixed inset-0 -z-20" aria-hidden="true" />
        <div className="ambient-vignette fixed inset-0 -z-10" aria-hidden="true" />

        <div
          className="landing-cover pointer-events-none fixed inset-0 z-[5]"
          style={{ opacity: landingOpacity }}
          aria-hidden="true"
        />

        <section
          className="fixed left-1/2 top-[calc(50%+1.75rem)] z-10 w-[min(calc(100%_-_2.5rem),52rem)] -translate-x-1/2 -translate-y-1/2"
          aria-label="Scroll-resizing landing panel"
        >
          <div
            className="scroll-expanding-row relative max-h-[calc(100svh-7.5rem)] w-full overflow-hidden rounded-[4px] bg-black/65 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
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
              className="relative z-10 grid h-full grid-cols-[minmax(0,1fr)_13rem] items-center gap-7 p-8 max-md:grid-cols-1 max-md:content-center max-md:gap-6 max-sm:p-6"
              style={{ transform: `translateY(${contentLift}rem)` }}
            >
              <div className="min-w-0">
                <p className="mb-3 font-display text-3xl font-medium tracking-tight text-accent md:text-4xl">
                  Hi, I&apos;m Dikchya
                </p>
                <h1 className="max-w-[8.8ch] text-[clamp(2.8rem,7.2vw,4.75rem)] font-black uppercase leading-[0.9] tracking-normal">
                  UI/UX Designer
                </h1>
              </div>
              <p className="max-w-[13rem] border-l border-white/15 pl-5 text-sm leading-6 text-white/70 max-md:max-w-md max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-5">
                I shape ideas into clean interfaces, smooth interactions, and responsive digital products.
              </p>
            </div>
          </div>
        </section>

        <div
          className="pointer-events-none fixed bottom-8 left-1/2 z-[6] flex w-[min(calc(100%_-_2.5rem),52rem)] -translate-x-1/2 items-center justify-between gap-6 text-sm text-white/50 max-sm:bottom-6"
          style={{ opacity: landingDetailsOpacity }}
        >
          <p>
            Kathmandu, Nepal
            {localTime && <span className="text-white/35"> · {localTime}</span>}
          </p>
          <p className="flex items-center gap-3" aria-hidden="true">
            Scroll
            <span className="h-px w-10 bg-white/30" />
          </p>
        </div>

        <div
          style={{ height: `calc(${landingScrollDistance}px + 100svh)` }}
          aria-hidden="true"
        />

        <section className="relative z-10 bg-background px-5 py-24 text-white sm:px-6 md:px-10 md:py-32">
          <div className="mx-auto w-full max-w-[52rem]">
            <h2 className="max-w-[18ch] font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              I design interfaces that are simple to use and pleasant to look at.
            </h2>
            <nav className="mt-14 divide-y divide-white/10 border-y border-white/10" aria-label="Explore">
              {exploreLinks.map((link) => (
                <Link
                  className="group flex items-baseline justify-between gap-6 py-5 transition hover:text-accent"
                  href={link.href}
                  key={link.href}
                >
                  <span className="text-2xl md:text-3xl">{link.label}</span>
                  <span className="text-sm text-white/50 transition group-hover:text-accent">
                    {link.note} →
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </main>
    </>
  );
}
