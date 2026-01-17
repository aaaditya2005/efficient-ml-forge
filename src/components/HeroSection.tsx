import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  // Event starts January 24, 2026 at 10:00 AM IST
  const eventDate = new Date("2026-01-24T10:00:00+05:30");

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">R&D Cell Technical Event</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-gradient-cyan">ML</span>{" "}
          <span className="text-foreground">Efficient</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Optimizing Intelligence. Building the Future.
        </p>

        {/* Countdown Timer */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
            Event Starts In
          </p>
          <CountdownTimer targetDate={eventDate} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("#register")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan text-lg px-8 py-6"
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#timeline")}
            className="border-border/50 hover:border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
          >
            View Timeline
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
