import { HeroSection } from "@/sections/hero-section";
import { AboutSection } from "@/sections/about-section";
import { TruthFilesSection } from "@/sections/truth-files-section";
import { SocialSection } from "@/sections/social-section";
import { WhatsappSection } from "@/sections/whatsapp-section";
import { FooterSection } from "@/sections/footer-section";

export default function Home() {
  return (
    <main className="bg-ink">
      {/* Section order: hero → story & pillars → deep dives → community → direct action → footer */}
      <HeroSection />
      <AboutSection />
      <TruthFilesSection />
      <SocialSection />
      <WhatsappSection />
      <FooterSection />
    </main>
  );
}
