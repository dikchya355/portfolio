import { ExpandableNavbar } from "@/components/navigation/ExpandableNavbar";
import { ContactSection } from "@/components/portfolio/sections/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-svh bg-[#09060f] text-white">
      <ExpandableNavbar />
      <ContactSection />
    </main>
  );
}
