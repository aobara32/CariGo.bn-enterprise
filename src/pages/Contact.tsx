import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PhoneInput } from "@/components/PhoneInput";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Send, MessageSquare, Store } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { saveContactForm, type ContactFormData } from "@/lib/supabase";

export default function Contact() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setFormErrors({});
    
    // Validate form with strict rules
    const errors: {[key: string]: string} = {};
    
    // Name validation (2-100 characters, letters and spaces only)
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (formData.name.length > 100) {
      errors.name = 'Name must be less than 100 characters';
    } else if (!/^[a-zA-Z\s\-'\.]+$/.test(formData.name)) {
      errors.name = 'Name can only contain letters, spaces, hyphens, apostrophes, and periods';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (optional but must be valid format)
    if (formData.phone.trim() && !/^\+\d{1,4}\s?\d{4,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number with country code';
    }
    
    // Category validation
    if (!formData.category) {
      errors.category = 'Category is required';
    }
    
    // Subject validation (5-200 characters)
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.length < 5) {
      errors.subject = 'Subject must be at least 5 characters';
    } else if (formData.subject.length > 200) {
      errors.subject = 'Subject must be less than 200 characters';
    }
    
    // Message validation (10-2000 characters)
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 2000) {
      errors.message = 'Message must be less than 2000 characters';
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Save to Supabase
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category: formData.category,
        subject: formData.subject,
        message: formData.message,
      };

      await saveContactForm(contactData);

      // Navigate to success screen
      navigate('/form-success?type=contact');

    } catch (error) {
      console.error('Error saving contact form:', error);
      setFormErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    { value: 'general', label: t('contact.category.general') },
    { value: 'support', label: t('contact.category.support') },
    { value: 'business', label: t('contact.category.business') },
    { value: 'partnership', label: t('contact.category.partnership') },
    { value: 'feedback', label: t('contact.category.feedback') },
    { value: 'other', label: t('contact.category.other') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <LandingHeader />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Vendor Banner */}
          <Card className="mb-8 p-6 border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Store className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{t('contact.vendor.title')}</h3>
                  <p className="text-muted-foreground">{t('contact.vendor.description')}</p>
                </div>
              </div>
              <Button
                onClick={() => window.location.href = '/careers?business=true'}
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                <Store className="w-5 h-5 mr-2" />
                {t('contact.vendor.button')}
              </Button>
            </div>
          </Card>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
              <MessageSquare className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-racing">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{t('contact.info.email')}</h3>
              <a href="mailto:carigobn@gmail.com" className="text-sm text-primary hover:underline">
                carigobn@gmail.com
              </a>
            </Card>

            <Card className="p-6 text-center border-2 border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{t('contact.info.phone')}</h3>
              <a href="tel:+673 8228250" className="text-sm text-accent hover:underline">
                +673 8228250
              </a>
            </Card>

            <Card className="p-6 text-center border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{t('contact.info.address')}</h3>
              <p className="text-sm text-muted-foreground">{t('contact.info.addressValue')}</p>
            </Card>
          </div>

          {/* Contact Form with gradient border */}
          <Card className="p-8 md:p-10 border-2 border-primary/30 bg-card/50 backdrop-blur-sm shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
              <p className="text-sm text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">{t('contact.name')} *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className={formErrors.name ? "border-2 border-red-500 focus:border-red-500" : "border-2 focus:border-primary"}
                  />
                  {formErrors.name && <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">{t('contact.email')} *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className={formErrors.email ? "border-2 border-red-500 focus:border-red-500" : "border-2 focus:border-primary"}
                  />
                  {formErrors.email && <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('contact.phone')}</label>
                <PhoneInput
                  value={formData.phone}
                  onChange={(value) => setFormData({ ...formData, phone: value })}
                  placeholder="8XXX XXXX"
                />
                {formErrors.phone && <p className="text-sm text-red-500 mt-1">{formErrors.phone}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('contact.category')} *</label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger className={formErrors.category ? "border-2 border-red-500" : "border-2 focus:border-primary"}>
                    <SelectValue placeholder={t('contact.categoryPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formErrors.category && <p className="text-sm text-red-500 mt-1">{formErrors.category}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('contact.subject')} *</label>
                <Input
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="How can we help you?"
                  className={formErrors.subject ? "border-2 border-red-500 focus:border-red-500" : "border-2 focus:border-primary"}
                />
                {formErrors.subject && <p className="text-sm text-red-500 mt-1">{formErrors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('contact.message')} *</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className={formErrors.message ? "border-2 border-red-500 focus:border-red-500 resize-none" : "border-2 focus:border-primary resize-none"}
                />
                {formErrors.message && <p className="text-sm text-red-500 mt-1">{formErrors.message}</p>}
              </div>

              {formErrors.submit && <p className="text-sm text-red-500 mt-1">{formErrors.submit}</p>}

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold text-lg group"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? "Sending..." : t('contact.send')}
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
