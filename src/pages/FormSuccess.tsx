import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Home } from "lucide-react";

export default function FormSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const formType = searchParams.get('type') || 'contact';
  
  const messages: { [key: string]: { title: string; message: string; backButton: string } } = {
    contact: {
      title: "Message Sent Successfully!",
      message: "Thank you for contacting us. We have received your message and will get back to you as soon as possible.",
      backButton: "Send Another Message"
    },
    career: {
      title: "Application Submitted Successfully!",
      message: "Your application has been received. We'll review it and contact you soon.",
      backButton: "Apply Again"
    },
    donation: {
      title: "Donation Form Submitted Successfully!",
      message: "Thank you for your support! Please complete the bank transfer.",
      backButton: "Donate Again"
    },
    investment: {
      title: "Investment Inquiry Submitted Successfully!",
      message: "We'll review your inquiry and contact you soon.",
      backButton: "Submit Another Inquiry"
    }
  };

  const currentMessage = messages[formType] || messages.contact;

  const handleBackToForm = () => {
    switch (formType) {
      case 'contact':
        navigate('/contact');
        break;
      case 'career':
        navigate('/careers/apply');
        break;
      case 'donation':
      case 'investment':
        navigate('/support');
        break;
      default:
        navigate('/contact');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <LandingHeader />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 text-center border-2 border-primary/30 bg-card/50 backdrop-blur-sm shadow-2xl">
            <div className="mb-6">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{currentMessage.title}</h2>
              <p className="text-muted-foreground">
                {currentMessage.message}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBackToForm}
                variant="outline"
                size="lg"
                className="font-semibold"
              >
                {currentMessage.backButton}
              </Button>
              <Button
                onClick={() => navigate('/')}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold"
              >
                <Home className="w-5 h-5 mr-2" />
                Return to Home
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

