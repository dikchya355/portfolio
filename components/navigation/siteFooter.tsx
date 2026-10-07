import { SocialLinks } from "@/components/ui/socialLinks";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background px-5 py-6 text-white sm:px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-[52rem] items-center justify-between gap-6">
        <p className="text-sm text-white/50">© {new Date().getFullYear()} Dikchya Rai</p>
        <SocialLinks iconsOnly />
      </div>
    </footer>
  );
}
