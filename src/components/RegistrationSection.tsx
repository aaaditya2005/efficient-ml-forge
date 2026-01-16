import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, Loader2, Calendar } from "lucide-react";
import confetti from "canvas-confetti";

const RegistrationSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
    domain: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.college || !formData.year || !formData.domain) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to register.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("registrations").insert([
        {
          name: formData.name,
          email: formData.email,
          college: formData.college,
          year: formData.year,
          domain_interest: formData.domain,
        },
      ]);

      if (error) throw error;

      setIsSuccess(true);

      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00E5FF", "#AA00FF", "#00E676"],
      });

      toast({
        title: "Registration Successful! 🎉",
        description: "Welcome to ML Efficient! Check your email for confirmation.",
      });
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="register" className="py-20 md:py-32 relative bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-lg mx-auto glass-card border-glow-cyan overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                You're Registered!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you for registering for ML Efficient. We'll send you all the
                details to your email soon.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    name: "",
                    email: "",
                    college: "",
                    year: "",
                    domain: "",
                  });
                }}
              >
                Register Another Person
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Join Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Register for <span className="text-gradient-cyan">ML Efficient</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Secure your spot at the most anticipated ML event of the year
          </p>
        </div>

        {/* Registration Form */}
        <Card className="max-w-lg mx-auto glass-card border-glow-cyan overflow-hidden">
          <CardHeader className="border-b border-border/50 bg-primary/5">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Registration Form</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Registration Deadline: <span className="text-primary font-medium">March 10, 2025</span>
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="college">College / University</Label>
                <Input
                  id="college"
                  placeholder="Enter your institution name"
                  value={formData.college}
                  onChange={(e) =>
                    setFormData({ ...formData, college: e.target.value })
                  }
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year of Study</Label>
                <Select
                  value={formData.year}
                  onValueChange={(value) =>
                    setFormData({ ...formData, year: value })
                  }
                >
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st Year">1st Year</SelectItem>
                    <SelectItem value="2nd Year">2nd Year</SelectItem>
                    <SelectItem value="3rd Year">3rd Year</SelectItem>
                    <SelectItem value="4th Year">4th Year</SelectItem>
                    <SelectItem value="PG / Research">PG / Research</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="domain">Domain Interest</Label>
                <Select
                  value={formData.domain}
                  onValueChange={(value) =>
                    setFormData({ ...formData, domain: value })
                  }
                >
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Computer Vision">Computer Vision</SelectItem>
                    <SelectItem value="Natural Language Processing">
                      Natural Language Processing
                    </SelectItem>
                    <SelectItem value="Deep Learning">Deep Learning</SelectItem>
                    <SelectItem value="MLOps">MLOps & Deployment</SelectItem>
                    <SelectItem value="Reinforcement Learning">
                      Reinforcement Learning
                    </SelectItem>
                    <SelectItem value="General ML">General ML</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Register for ML Efficient"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationSection;
