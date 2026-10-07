"use client";

import { useEffect, useRef, useState } from "react";

export const landingScrollDistance = 1500;
export const landingExitDistance = 650;

export function usePortfolioMotion() {
  const [progress, setProgress] = useState(0);
  const [exitProgress, setExitProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const scrollTargetY = useRef(0);
  const scrollCurrentY = useRef(0);
  const lastProgress = useRef(-1);
  const lastExitProgress = useRef(-1);
  const lastScrollY = useRef(-1);

  useEffect(() => {
    scrollTargetY.current = window.scrollY;
    scrollCurrentY.current = window.scrollY;

    let rafId: number;
    let isAnimating = false;
    let lastFrameTime = 0;

    const updateMotion = (time = performance.now()) => {
      // Ease toward the real scroll position at the same speed on any refresh rate
      // (~20% of the remaining distance per 60fps frame), so the landing keeps up
      // with the page content scrolling underneath it.
      const elapsed = lastFrameTime ? Math.min(time - lastFrameTime, 64) : 16.67;
      lastFrameTime = time;
      const ease = 1 - Math.pow(1 - 0.2, elapsed / 16.67);

      const diff = scrollTargetY.current - scrollCurrentY.current;
      if (Math.abs(diff) > 0.5) {
        scrollCurrentY.current += diff * ease;
        isAnimating = true;
      } else {
        scrollCurrentY.current = scrollTargetY.current;
        isAnimating = false;
      }

      const currentY = scrollCurrentY.current;

      // Landing Section calculations
      let nextProgress = 0;
      let nextExitProgress = 0;

      if (currentY < landingScrollDistance) {
        nextProgress = currentY / landingScrollDistance;
        nextExitProgress = 0;

        if (gridRef.current) {
          gridRef.current.style.transform = `translateY(${currentY * 0.3}px)`;
        }
      } else {
        nextProgress = 1;
        nextExitProgress = Math.min((currentY - landingScrollDistance) / landingExitDistance, 1);

        if (gridRef.current) {
          gridRef.current.style.transform = `translateY(${landingScrollDistance * 0.3 + (currentY - landingScrollDistance) * 0.3}px)`;
        }
      }

      if (Math.abs(nextProgress - lastProgress.current) > 0.0001) {
        setProgress(nextProgress);
        lastProgress.current = nextProgress;
      }
      if (Math.abs(nextExitProgress - lastExitProgress.current) > 0.0001) {
        setExitProgress(nextExitProgress);
        lastExitProgress.current = nextExitProgress;
      }
      if (Math.abs(currentY - lastScrollY.current) > 0.1) {
        setScrollY(currentY);
        lastScrollY.current = currentY;
      }

      if (isAnimating) {
        rafId = requestAnimationFrame(updateMotion);
      } else {
        lastFrameTime = 0;
      }
    };

    const handleScroll = () => {
      scrollTargetY.current = window.scrollY;
      if (!isAnimating) {
        isAnimating = true;
        rafId = requestAnimationFrame(updateMotion);
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    // Run initial frame
    updateMotion();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    exitProgress,
    gridRef,
    progress,
    scrollY,
  };
}
