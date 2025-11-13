import { GameNav } from "@/components/GameNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen scanline">
      <GameNav />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </main>

      <footer className="bg-card border-t border-border py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Cris Julian R. Abuan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Built with passion and dedication
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
