import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Mic,
  Wrench,
  Users,
  Code,
  UserCheck,
  Presentation,
  Trophy,
} from "lucide-react";

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface DaySchedule {
  day: string;
  date: string;
  events: TimelineEvent[];
}

const TimelineSection = () => {
  const schedule: DaySchedule[] = [
    {
      day: "Day 1",
      date: "Innovation & Learning",
      events: [
        {
          time: "9:00 AM",
          title: "Inauguration Ceremony",
          description:
            "Official opening with keynote address from industry leaders and academic heads",
          icon: Sparkles,
        },
        {
          time: "10:30 AM",
          title: "Keynote Session",
          description:
            "Expert insights on the future of efficient ML systems and emerging trends",
          icon: Mic,
        },
        {
          time: "2:00 PM",
          title: "Hands-on ML Workshop",
          description:
            "Interactive session on model optimization, quantization, and deployment strategies",
          icon: Wrench,
        },
        {
          time: "5:00 PM",
          title: "Networking Session",
          description:
            "Connect with peers, mentors, and industry professionals in a relaxed setting",
          icon: Users,
        },
      ],
    },
    {
      day: "Day 2",
      date: "Competition & Celebration",
      events: [
        {
          time: "9:00 AM",
          title: "Hackathon / ML Challenge",
          description:
            "24-hour coding challenge to build efficient ML solutions for real-world problems",
          icon: Code,
        },
        {
          time: "1:00 PM",
          title: "Mentorship Rounds",
          description:
            "One-on-one guidance sessions with industry experts and research scholars",
          icon: UserCheck,
        },
        {
          time: "3:30 PM",
          title: "Project Presentations",
          description:
            "Showcase your ML projects and receive feedback from an expert panel",
          icon: Presentation,
        },
        {
          time: "6:00 PM",
          title: "Closing Ceremony & Results",
          description:
            "Award distribution, hackathon winners announcement, and closing remarks",
          icon: Trophy,
        },
      ],
    },
  ];

  return (
    <section id="timeline" className="py-20 md:py-32 relative">
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
            Two days packed with learning, innovation, and networking opportunities
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {schedule.map((day, dayIndex) => (
            <div key={day.day} className="mb-16 last:mb-0">
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {dayIndex + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{day.day}</h3>
                  <p className="text-muted-foreground">{day.date}</p>
                </div>
              </div>

              {/* Events */}
              <div className="relative pl-8 md:pl-12">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

                {day.events.map((event, eventIndex) => (
                  <div
                    key={event.title}
                    className="relative mb-8 last:mb-0"
                    style={{ animationDelay: `${eventIndex * 100}ms` }}
                  >
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
