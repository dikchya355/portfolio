"use client";

import { useEffect, useState } from "react";

import { ExpandableNavbar } from "@/components/navigation/ExpandableNavbar";
import { landingExitDistance, landingScrollDistance } from "@/components/portfolio/data/constants";
import { usePortfolioMotion } from "@/components/portfolio/hooks/usePortfolioMotion";
import Loading from "./loading";
import { LandingSection } from "@/components/portfolio/sections/LandingSection";
import Link from "next/link";

export default function Home() {
  const { exitProgress, gridRef, progress } = usePortfolioMotion();
  const [mounted, setMounted] = useState(true);
  const [fade, setFade] = useState(false);

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

      <main className="relative isolate min-h-svh overflow-x-hidden bg-[#09060f] text-white">
        <ExpandableNavbar />
        
        <LandingSection
          contentLift={contentLift}
          exitProgress={exitProgress}
          gridRef={gridRef}
          landingDetailsOpacity={landingDetailsOpacity}
          landingOpacity={landingOpacity}
          progress={progress}
          wordStageOpacity={wordStageOpacity}
        />

        <div
          style={{ height: landingScrollDistance + landingExitDistance }}
          aria-hidden="true"
        />

        <section className="relative z-10 grid min-h-svh place-items-center bg-[#09060f] px-6 py-28 text-white">
          <div className="w-full max-w-[52rem] text-center">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-cyan-200">
              Explore the portfolio
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Find out more.
            </h2>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              <Link className="rounded border border-white/15 bg-white/5 px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-cyan-200/60 hover:bg-white/10" href="/work">
                Work
              </Link>
              <Link className="rounded border border-white/15 bg-white/5 px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-cyan-200/60 hover:bg-white/10" href="/about">
                About
              </Link>
              <Link className="rounded border border-white/15 bg-white/5 px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-cyan-200/60 hover:bg-white/10" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
