import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
import rndLogo from "@/assets/rnd-logo.png";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    label: "About",
    href: "#about"
  }, {
    label: "Past Events",
    href: "#past-events"
  }, {
    label: "Timeline",
    href: "#timeline"
  }, {
    label: "Team",
    href: "#team"
  }, {
    label: "Register",
    href: "#register"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({
          top: 0,
          behavior: "smooth"
        })} className="flex items-center gap-3 cursor-pointer">
            <img src={rndLogo} alt="R&D Cell" className="h-10 w-auto" />
            <span className="text-foreground font-semibold text-lg hidden sm:block">
              ML Efficient 3.0
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection("#register")} className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
              Register Now
            </Button>

            {/* CCA & R&D Instagram Links */}
            
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium text-left py-2">
                  {item.label}
                </button>)}
              <Button onClick={() => scrollToSection("#register")} className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan w-full">
                Register Now
              </Button>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://www.instagram.com/cca.nitd?igsh=eWNxMHlhZzcxMHRn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Instagram className="w-4 h-4" /> CCA
                </a>
                <a href="https://www.instagram.com/rnd_cca.nitd?igsh=MTU2ZWtydDFvb3Vvbw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm">
                  <Instagram className="w-4 h-4" /> R&D Cell
                </a>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;