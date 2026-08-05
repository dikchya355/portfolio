import { ExpandableNavbar } from "@/components/navigation/ExpandableNavbar";
import { AboutSection } from "@/components/portfolio/sections/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-svh bg-[#09060f] text-white">
      <ExpandableNavbar />
      <AboutSection nextSectionIntroOffset={0} opacity={1} />
    </main>
  );
}
