import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `[${formData.category.toUpperCase()}] ${formData.subject}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Category: ${categories.find(c => c.value === formData.category)?.label}

Message:
${formData.message}

---
This message was sent through CariGo Contact Form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:carigobn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...", {
      description: "Please send the email to complete your inquiry.",
      icon: "📧",
      duration: 5000,
    });
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
          {/* Header with animated icon */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6 animate-pulse">
              <MessageSquare className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-racing">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Contact Info Cards with hover effects */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{t('contact.info.email')}</h3>
              <a href="mailto:carigobn@gmail.com" className="text-sm text-primary hover:underline">
                carigobn@gmail.com
              </a>
            </Card>

            <Card className="p-6 text-center border-2 border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{t('contact.info.phone')}</h3>
              <a href="tel:+673----" className="text-sm text-accent hover:underline">
                +673 ----
              </a>
            </Card>

            <Card className="p-6 text-center border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">{t('contact.name')} *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="border-2 focus:border-primary transition-colors"
                    required
                    onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please enter your name')}
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">{t('contact.email')} *</label>
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

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('contact.category')} *</label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })} required>
                  <SelectTrigger className="border-2 focus:border-primary transition-colors">
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
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('contact.subject')} *</label>
                <Input
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="How can we help you?"
                  className="border-2 focus:border-primary transition-colors"
                  required
                  onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Please enter a subject')}
                  onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">{t('contact.message')} *</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="border-2 focus:border-primary transition-colors resize-none"
                  required
                  onInvalid={(e) => (e.target as HTMLTextAreaElement).setCustomValidity('Please enter your message')}
                  onInput={(e) => (e.target as HTMLTextAreaElement).setCustomValidity('')}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold text-lg group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                {t('contact.send')}
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
