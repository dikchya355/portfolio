import { ExpandableNavbar } from "@/components/navigation/ExpandableNavbar";
import { ProjectsSection } from "@/components/portfolio/sections/ProjectsSection";

export default function WorkPage() {
  return (
    <main className="min-h-svh bg-[#09060f] text-white">
      <ExpandableNavbar />
      <ProjectsSection />
    </main>
  );
}
