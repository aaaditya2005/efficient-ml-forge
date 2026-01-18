import { Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Past Events", href: "#past-events" },
    { label: "Timeline", href: "#timeline" },
    { label: "Team", href: "#team" },
    { label: "Register", href: "#register" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ML</span>
              </div>
              <span className="text-foreground font-semibold text-lg">ML Efficient 3.0</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              A premier technical event by R&D Cell, CCA - NIT Durgapur, exploring the frontiers of
              efficient machine learning systems.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cca.nitd?igsh=eWNxMHlhZzcxMHRn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="CCA Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rnd_cca.nitd?igsh=MTU2ZWtydDFvb3Vvbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors"
                aria-label="R&D Cell Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Location</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-foreground text-sm">
                  MAB (Main Academic Building)
                  <br />
                  NIT Durgapur
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* R&D Instagram Promo Section */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <div className="glass-card rounded-xl p-6 max-w-3xl mx-auto text-center">
            <h4 className="font-semibold text-foreground mb-3">Stay Updated with R&D Cell</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Follow us on Instagram for the latest research happening explained in simple, 
              understandable ways along with Sci-Fi videos that make complex concepts visual and fun!
              Stay tuned for R&D events and knowledge updates.
            </p>
            <a
              href="https://www.instagram.com/rnd_cca.nitd?igsh=MTU2ZWtydDFvb3Vvbw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              Follow @rnd_cca.nitd
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} R&D Cell, CCA - NIT Durgapur. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with <span className="text-primary">❤</span> for ML Efficient 3.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
