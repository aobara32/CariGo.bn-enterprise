import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, Send, Upload } from "lucide-react";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function CareerApply() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const jobTitle = searchParams.get('job') || '';
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: jobTitle,
    portfolio: '',
    linkedin: '',
    coverLetter: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Job Application: ${formData.position}`;
    const body = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Position: ${formData.position}
Portfolio/Website: ${formData.portfolio}
LinkedIn: ${formData.linkedin}

Cover Letter:
${formData.coverLetter}

---
This application was submitted through CariGo Careers page.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:carigobn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...", {
      description: "Please send the email to complete your application.",
      icon: "📧",
      duration: 5000,
    });
  };

  const positions = [
    "Senior Frontend Developer",
    "Product Manager",
    "UX/UI Designer",
    "Backend Developer",
    "Marketing Specialist",
    "Data Analyst",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      <LandingHeader />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header with animated icon */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6 animate-pulse">
              <Briefcase className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-racing">
              Apply for Position
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our team and help shape the future of shopping in Brunei
            </p>
          </div>

          {/* Application Form */}
          <Card className="p-8 md:p-10 border-2 border-primary/30 bg-card/50 backdrop-blur-sm shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Application Form</h2>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Full Name *</label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    className="border-2 focus:border-primary transition-colors"
                    required
                    onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please enter your full name')}
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="border-2 focus:border-primary transition-colors"
                    required
                    onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please enter a valid email address')}
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+673 XXX XXXX"
                    className="border-2 focus:border-primary transition-colors"
                    required
                    onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please enter your phone number')}
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Position *</label>
                  <Select 
                    value={formData.position} 
                    onValueChange={(value) => setFormData({ ...formData, position: value })} 
                    required
                  >
                    <SelectTrigger className="border-2 focus:border-primary transition-colors">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      {positions.map((position) => (
                        <SelectItem key={position} value={position}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Portfolio/Website</label>
                  <Input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://yourportfolio.com"
                    className="border-2 focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">LinkedIn Profile</label>
                  <Input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="border-2 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Cover Letter *</label>
                <Textarea
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Tell us why you're the perfect fit for this role and what makes you passionate about joining CariGo..."
                  rows={8}
                  className="border-2 focus:border-primary transition-colors resize-none"
                  required
                  onInvalid={(e) => (e.target as HTMLTextAreaElement).setCustomValidity('Please enter your cover letter')}
                  onInput={(e) => (e.target as HTMLTextAreaElement).setCustomValidity('')}
                />
              </div>

              <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Upload className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Resume/CV</p>
                    <p className="text-xs text-muted-foreground">
                      After submitting this form, you'll be able to attach your resume in the email that opens.
                      Please attach your CV in PDF format.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  type="button"
                  variant="outline"
                  size="lg" 
                  className="flex-1"
                  onClick={() => navigate('/careers')}
                >
                  Back to Careers
                </Button>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold text-lg group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Submit Application
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

