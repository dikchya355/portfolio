import { ReactNode, SVGProps } from "react";
import type { IconName } from "./data";

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    book: (
      <>
        <path d="M5 4.5A3.5 3.5 0 0 1 8.5 1H20v18H8.5A3.5 3.5 0 0 0 5 22.5z" />
        <path d="M5 4.5v18A3.5 3.5 0 0 1 8.5 19H20" />
      </>
    ),
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
    compass: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8z" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    mail: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    pen: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4.2-4.2" />
      </>
    ),
    send: (
      <>
        <path d="M22 2 11 13" />
        <path d="m22 2-7 20-4-9-9-4z" />
      </>
    ),
    spark: (
      <>
        <path d="M12 2v20" />
        <path d="M2 12h20" />
        <path d="m4.9 4.9 14.2 14.2" />
        <path d="m19.1 4.9-14.2 14.2" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
