import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PhoneInput } from "@/components/PhoneInput";
import { Briefcase, Send, Upload, File, X } from "lucide-react";
import { useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { saveCareerApplication, uploadCVFile, type CareerApplicationData } from "@/lib/supabase";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvFileName, setCvFileName] = useState<string>('');
  const [cvUploading, setCvUploading] = useState(false);
  const [cvUrl, setCvUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCvFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type (PDF preferred)
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setFormErrors({ ...formErrors, cv: 'Please upload a PDF file.' });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setFormErrors({ ...formErrors, cv: 'File size must be less than 5MB.' });
      return;
    }

    setCvFile(file);
    setCvFileName(file.name);
    setCvUploading(true);
    setFormErrors({ ...formErrors, cv: '' });

    try {
      // Upload file to Supabase
      const url = await uploadCVFile(file, formData.email);
      setCvUrl(url);
    } catch (error) {
      console.error('Error uploading CV:', error);
      setFormErrors({ ...formErrors, cv: 'Failed to upload CV. Please try again.' });
      setCvFile(null);
      setCvFileName('');
    } finally {
      setCvUploading(false);
    }
  };

  const handleCvBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveCv = () => {
    setCvFile(null);
    setCvFileName('');
    setCvUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setFormErrors({});
    
    // Validate form with strict rules
    const errors: {[key: string]: string} = {};
    
    // Name validation (2-100 characters, letters and spaces only)
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      errors.fullName = 'Full name must be at least 2 characters';
    } else if (formData.fullName.length > 100) {
      errors.fullName = 'Full name must be less than 100 characters';
    } else if (!/^[a-zA-Z\s\-'\.]+$/.test(formData.fullName)) {
      errors.fullName = 'Name can only contain letters, spaces, hyphens, apostrophes, and periods';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (must be valid format with country code)
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\+\d{1,4}\s?\d{4,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number with country code';
    }
    
    // Position validation
    if (!formData.position) {
      errors.position = 'Position is required';
    }
    
    // Cover letter validation (50-2000 characters)
    if (!formData.coverLetter.trim()) {
      errors.coverLetter = 'Cover letter is required';
    } else if (formData.coverLetter.length < 50) {
      errors.coverLetter = 'Cover letter must be at least 50 characters';
    } else if (formData.coverLetter.length > 2000) {
      errors.coverLetter = 'Cover letter must be less than 2000 characters';
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Save to Supabase
      const careerData: CareerApplicationData = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.portfolio,
        motivation: formData.coverLetter,
        resume_url: formData.linkedin || '', // Save LinkedIn if provided, otherwise empty string
      };

      await saveCareerApplication(careerData);

      // Navigate to success screen
      navigate('/form-success?type=career');

    } catch (error) {
      console.error('Error saving career application:', error);
      setFormErrors({ submit: 'Failed to submit application. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
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
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
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
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Full Name *</label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    className={formErrors.fullName ? "border-2 border-red-500 focus:border-red-500" : "border-2 focus:border-primary transition-colors"}
                  />
                  {formErrors.fullName && <p className="text-sm text-red-500 mt-1">{formErrors.fullName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className={formErrors.email ? "border-2 border-red-500 focus:border-red-500" : "border-2 focus:border-primary transition-colors"}
                  />
                  {formErrors.email && <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                  <div className={formErrors.phone ? "border-2 border-red-500 rounded-md p-1" : ""}>
                    <PhoneInput
                      value={formData.phone}
                      onChange={(value) => setFormData({ ...formData, phone: value })}
                      placeholder="8XXX XXXX"
                    />
                  </div>
                  {formErrors.phone && <p className="text-sm text-red-500 mt-1">{formErrors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Position *</label>
                  <Select 
                    value={formData.position} 
                    onValueChange={(value) => setFormData({ ...formData, position: value })}
                  >
                    <SelectTrigger className={formErrors.position ? "border-2 border-red-500" : "border-2 focus:border-primary transition-colors"}>
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
                  {formErrors.position && <p className="text-sm text-red-500 mt-1">{formErrors.position}</p>}
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
                  className={formErrors.coverLetter ? "border-2 border-red-500 focus:border-red-500 resize-none" : "border-2 focus:border-primary transition-colors resize-none"}
                />
                {formErrors.coverLetter && <p className="text-sm text-red-500 mt-1">{formErrors.coverLetter}</p>}
              </div>

              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleCvFileSelect}
                  className="hidden"
                />
                <div
                  onClick={handleCvBoxClick}
                  className={`bg-accent/10 border-2 border-accent/30 rounded-lg p-4 cursor-pointer hover:bg-accent/20 transition-colors ${cvFile ? 'border-green-500/50 bg-green-500/5' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    {cvUploading ? (
                      <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin mt-0.5 flex-shrink-0" />
                    ) : cvFile ? (
                      <File className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Upload className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground mb-1">Resume/CV</p>
                      {cvFile ? (
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-muted-foreground">{cvFileName}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveCv();
                            }}
                            className="text-red-500 hover:text-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <p className="text-xs text-muted-foreground">
                          Click to upload your CV (PDF format, max 5MB)
                        </p>
                      )}
                      {formErrors.cv && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.cv}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {formErrors.submit && <p className="text-sm text-red-500 mb-4">{formErrors.submit}</p>}

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
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Submitting..." : "Submit Application"}
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

