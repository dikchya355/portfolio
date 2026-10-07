"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function ExpandableNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed left-1/2 top-5 z-20 -translate-x-1/2"
      aria-label="Primary navigation"
    >
      <div
        className={[
          "overflow-hidden rounded-[4px] border border-white/10 bg-black/80 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl will-change-[width,height] transform-gpu",
          "[transition-property:width,height,background-color,border-color,box-shadow] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
          isOpen
            ? "h-[280px] w-[52rem] bg-black/85 shadow-[0_24px_72px_rgba(0,0,0,0.5)] [transition-delay:0ms,280ms,0ms,0ms,0ms] [transition-duration:520ms,620ms,320ms,320ms,520ms] max-sm:h-[274px]"
            : "h-[52px] w-[470px] [transition-delay:300ms,0ms,120ms,120ms,0ms] [transition-duration:460ms,360ms,220ms,220ms,320ms] max-sm:h-[50px] max-sm:w-[min(calc(100vw_-_2.5rem),340px)]",
          "max-w-[calc(100vw_-_2.5rem)]",
        ].join(" ")}
      >
        <button
          className="grid h-[52px] w-full cursor-pointer grid-cols-[1fr_auto_1fr] items-center px-4 outline-none max-sm:h-[50px]"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className="relative size-8 justify-self-start rounded-full border border-white/25 bg-white/5"
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
            <span className="absolute left-1 top-1 size-1.5 rounded-full bg-white/80" />
          </span>

          <span className="justify-self-center font-display font-semibold tracking-tight text-xl text-white">
            Dikchya
          </span>

          <span
            className={[
              "group/menu relative grid size-9 justify-self-end place-items-center rounded-[4px] text-white/85 transition hover:text-accent",
              isOpen ? "text-white" : "",
            ].join(" ")}
          >
            <span className="relative h-5 w-7" aria-hidden="true">
              <span
                className={[
                  "absolute left-1/2 h-0.5 bg-current transition-all duration-300",
                  isOpen
                    ? "top-1/2 w-7 -translate-x-1/2 -translate-y-1/2 rotate-45"
                    : "top-1.5 w-5 -translate-x-1/2 group-hover/menu:-translate-x-[42%] group-hover/menu:w-7",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-1/2 h-0.5 bg-current transition-all duration-300",
                  isOpen
                    ? "top-1/2 w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45"
                    : "top-3.5 w-5 -translate-x-1/2 group-hover/menu:-translate-x-[58%] group-hover/menu:w-7",
                ].join(" ")}
              />
            </span>
          </span>
        </button>

        <div
          id="site-menu"
          className={[
            "mx-4 border-t border-white/15 py-5 transition-[opacity,transform] duration-500 ease-out",
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0 delay-0",
          ].join(" ")}
        >
          <div className="grid gap-1.5">
            {navItems.map((item) => (
              <Link
                className="group/navlink relative flex min-h-10 items-center justify-between overflow-hidden rounded-[4px] px-3 text-2xl font-medium leading-tight text-white/90 transition-[color,padding,transform] duration-300 before:absolute before:inset-0 before:-translate-x-[102%] before:bg-white/10 before:transition-transform before:duration-500 before:ease-out hover:pl-5 hover:text-white hover:before:translate-x-0 max-sm:text-[1.35rem]"
                href={item.href}
                key={item.label}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className="relative z-10 h-px w-10 scale-x-0 bg-accent/80 transition-transform duration-300 group-hover/navlink:scale-x-100"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
