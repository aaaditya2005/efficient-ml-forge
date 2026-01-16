import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PastEventsSection from "@/components/PastEventsSection";
import TimelineSection from "@/components/TimelineSection";
import RegistrationSection from "@/components/RegistrationSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PastEventsSection />
        <TimelineSection />
        <RegistrationSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
