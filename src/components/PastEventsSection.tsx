import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Youtube, Linkedin, FolderOpen, Image } from "lucide-react";

const PastEventsSection = () => {
  const pastEvents = [
    {
      year: "2024",
      title: "ML Efficient 3.0",
      description: "Focused on transformer optimization and LLM deployment strategies",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      highlights: ["500+ Participants", "20+ Workshops", "Industry Mentors"],
    },
    {
      year: "2023",
      title: "ML Efficient 2.0",
      description: "Deep dive into neural network pruning and quantization techniques",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      highlights: ["350+ Participants", "15+ Sessions", "Hackathon Winners"],
    },
    {
      year: "2022",
      title: "ML Efficient 1.0",
      description: "Inaugural edition exploring efficient ML fundamentals",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      highlights: ["200+ Participants", "10+ Workshops", "Research Showcase"],
    },
  ];

  const externalLinks = [
    { icon: Github, label: "GitHub", url: "#", color: "hover:text-foreground" },
    { icon: Youtube, label: "YouTube", url: "#", color: "hover:text-destructive" },
    { icon: Linkedin, label: "LinkedIn", url: "#", color: "hover:text-primary" },
    { icon: FolderOpen, label: "Drive", url: "#", color: "hover:text-accent" },
  ];

  return (
    <section id="past-events" className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Past <span className="text-gradient-purple">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrating years of innovation, learning, and community building
            in the machine learning space.
          </p>
        </div>

        {/* Events Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pastEvents.map((event) => (
            <Card
              key={event.year}
              className="glass-card border-border/50 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="glass-card px-3 py-1 rounded-full text-sm font-medium text-primary">
                    {event.year}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card rounded-2xl overflow-hidden border-glow-purple">
            <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-secondary/30 transition-colors">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-secondary border-b-[15px] border-b-transparent ml-2" />
                </div>
                <p className="text-muted-foreground">Watch Event Highlights</p>
              </div>
              {/* Placeholder for actual video embed */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
            </div>
          </div>
        </div>

        {/* External Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {externalLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              className={`border-border/50 ${link.color} transition-colors`}
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="w-4 h-4 mr-2" />
                {link.label}
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
