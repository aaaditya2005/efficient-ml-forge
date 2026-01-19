import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Code, Brain, Bot, Cpu, Zap, Sparkles, Award } from "lucide-react";
interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}
interface DaySchedule {
  day: string;
  date: string;
  events: TimelineEvent[];
}
const TimelineSection = () => {
  const schedule: DaySchedule[] = [{
    day: "Day 1",
    date: "24 January 2026",
    events: [{
      time: "10:00 AM",
      title: "Installation & Python Basics",
      description: "Set up your development environment and learn Python fundamentals for ML/AI development",
      icon: Wrench
    }, {
      time: "Slot 2",
      title: "ML, DL & Handwritten Digits Project",
      description: "Learn basics of Machine Learning and Deep Learning with a hands-on project building a handwritten digits recognition system",
      icon: Brain
    }, {
      time: "If Time Permits",
      title: "RAG-Based AI Agent",
      description: "Introduction to building Retrieval Augmented Generation (RAG) based AI agents",
      icon: Bot
    }]
  }, {
    day: "Day 2",
    date: "25 January 2026",
    events: [{
      time: "10:00 AM",
      title: "RAG Project Continuation",
      description: "Continue building and refining the RAG-based AI agent project with advanced techniques",
      icon: Code
    }, {
      time: "Slot 2",
      title: "Automation Concepts & Project",
      description: "Learn automation fundamentals and build a practical automation project",
      icon: Cpu
    }, {
      time: "If Time Permits",
      title: "Introduction to Gen AI",
      description: "Brief overview of Generative AI concepts and applications in modern development",
      icon: Sparkles
    }, {
      time: "Closing",
      title: "Certificates Distribution",
      description: "Certificate distribution ceremony for all participants",
      icon: Award
    }]
  }];
  return <section id="timeline" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Event Schedule
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            2-Day <span className="text-gradient-cyan">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two days packed with learning Python, ML, DL, AI Agents, Automation and Gen AI
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {schedule.map((day, dayIndex) => <div key={day.day} className="mb-16 last:mb-0">
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-8">
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{day.day}</h3>
                  <p className="text-muted-foreground">{day.date}</p>
                </div>
              </div>

              {/* Events */}
              <div className="relative pl-8 md:pl-12">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

                {day.events.map((event, eventIndex) => <div key={event.title} className="relative mb-8 last:mb-0" style={{
              animationDelay: `${eventIndex * 100}ms`
            }}>
                    {/* Timeline Dot */}
                    <div className="absolute -left-8 md:-left-10 top-6 w-4 h-4 rounded-full bg-primary glow-cyan" />

                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          {/* Icon */}
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <event.icon className="w-6 h-6" />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                              <span className="text-sm font-medium text-primary">
                                {event.time}
                              </span>
                              <h4 className="text-lg font-semibold text-foreground">
                                {event.title}
                              </h4>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TimelineSection;