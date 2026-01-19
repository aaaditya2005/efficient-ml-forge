import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    phone_number: "",
    branch: "",
    section: "",
    regNumber: "",
    year: "",
    domain: ""
  });
  const {
    toast
  } = useToast();
  const branches = ["Computer Science & Engineering", "Information Technology", "Electronics & Communication", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering", "Biotechnology", "Metallurgical & Materials Engineering", "Other"];
  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone_number || !formData.branch || !formData.year) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    if (!validatePhoneNumber(formData.phone_number)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from("registrations").insert([{
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone_number: formData.phone_number.trim(),
        branch: formData.branch,
        section: formData.section.trim() || null,
        reg_number: formData.regNumber.trim() || null,
        year: formData.year,
        domain_interest: formData.domain || null
      }]);
      if (error) throw error;
      setIsSuccess(true);

      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          y: 0.6
        },
        colors: ["#00E5FF", "#AA00FF", "#00E676"]
      });
      toast({
        title: "Registration Successful! 🎉",
        description: "Welcome to ML Efficient 3.0! See you on 24-25 January 2026."
      });
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSuccess) {
    return <section id="register" className="py-20 md:py-32 relative bg-muted/30">
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
                Thank you for registering for ML Efficient 3.0. See you on 24-25 January 2026!
              </p>
              <Button variant="outline" onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: "",
                email: "",
                phone_number: "",
                branch: "",
                section: "",
                regNumber: "",
                year: "",
                domain: ""
              });
            }}>
                Register Another Person
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>;
  }
  return <section id="register" className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Join Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Register for <span className="text-gradient-cyan">ML Efficient 3.0</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Secure your spot at the most anticipated ML-Gen-AI event of the NIT DURGAPUR</p>
        </div>

        {/* Registration Form */}
        <Card className="max-w-lg mx-auto glass-card border-glow-cyan overflow-hidden">
          <CardHeader className="border-b border-border/50 bg-primary/5">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Registration Form</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Registration Deadline: <span className="text-destructive font-medium">23 January 2026, 10:00 AM</span>
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                <Input id="name" placeholder="Enter your full name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="bg-background/50" maxLength={100} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="bg-background/50" maxLength={255} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone_number">Phone Number <span className="text-destructive">*</span></Label>
                <Input id="phone_number" type="tel" placeholder="10-digit phone number" value={formData.phone_number} onChange={e => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                setFormData({
                  ...formData,
                  phone_number: value
                });
              }} className="bg-background/50" maxLength={10} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="branch">Branch <span className="text-destructive">*</span></Label>
                <Select value={formData.branch} onValueChange={value => setFormData({
                ...formData,
                branch: value
              })}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select your branch" />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map(branch => <SelectItem key={branch} value={branch}>
                        {branch}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="section">Section</Label>
                  <Input id="section" placeholder="e.g., A, B, C" value={formData.section} onChange={e => setFormData({
                  ...formData,
                  section: e.target.value
                })} className="bg-background/50" maxLength={5} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="regNumber">Registration Number</Label>
                  <Input id="regNumber" placeholder="e.g., 22XXXX123" value={formData.regNumber} onChange={e => setFormData({
                  ...formData,
                  regNumber: e.target.value
                })} className="bg-background/50" maxLength={20} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year of Study <span className="text-destructive">*</span></Label>
                <Select value={formData.year} onValueChange={value => setFormData({
                ...formData,
                year: value
              })}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st Year">1st Year</SelectItem>
                    <SelectItem value="2nd Year">2nd Year</SelectItem>
                    <SelectItem value="3rd Year">3rd Year</SelectItem>
                    <SelectItem value="4th Year">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="domain">Domain Interest <span className="text-muted-foreground text-sm">(Optional)</span></Label>
                <Input id="domain" placeholder="e.g., ML, AI, Automation" value={formData.domain} onChange={e => setFormData({
                ...formData,
                domain: e.target.value
              })} className="bg-background/50" maxLength={100} />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan" disabled={isSubmitting}>
                {isSubmitting ? <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Registering...
                  </> : "Register for ML Efficient 3.0"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default RegistrationSection;