import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, MapPin, Package, ShoppingBag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: BarChart3,
      title: t('landing.features.compare.title'),
      description: t('landing.features.compare.desc'),
      priority: 'high' as const,
    },
    {
      icon: Package,
      title: t('landing.features.inventory.title'),
      description: t('landing.features.inventory.desc'),
      priority: 'high' as const,
    },
    {
      icon: MapPin,
      title: t('landing.features.map.title'),
      description: t('landing.features.map.desc'),
      priority: 'high' as const,
    },
    {
      icon: ShoppingBag,
      title: t('landing.features.allinone.title'),
      description: t('landing.features.allinone.desc'),
      priority: 'medium' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-white font-racing">
              {t('landing.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {t('landing.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-not-allowed" 
                disabled
              >
                {t('header.comingSoon')} 🚀
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white text-black bg-white hover:bg-white/90"
                onClick={() => navigate('/features')}
              >
                {t('landing.hero.learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen flex items-center py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`relative overflow-visible hover:shadow-2xl transition-all duration-300 border-3 min-h-[320px] md:min-h-[380px] lg:min-h-[420px] ${
                  feature.priority === 'high' 
                    ? 'border-primary hover:border-primary/80 bg-primary/5' 
                    : 'border-accent hover:border-accent/80 bg-accent/5'
                }`}
              >
                {feature.icon === MapPin ? (
                  <div className="relative flex flex-col md:flex-row items-center h-full">
                    {/* Left Image - with transparent overflow */}
                    <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-3/5 lg:w-2/3 z-10 pointer-events-none p-4 md:p-0">
                      <img 
                        src="/assets/mapscreen.png" 
                        alt="Interactive Map Feature" 
                        className="w-full h-auto object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Right Content - overlapping with image transparency */}
                    <div className="relative md:ml-auto md:w-1/2 p-8 md:p-12 lg:p-16 z-20 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4 text-primary">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                        onClick={() => navigate('/features')}
                      >
                        {t('landing.features.learnMore')}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full">
                    <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center mb-6 md:mb-8 ${
                      feature.priority === 'high' ? 'bg-primary' : 'bg-accent'
                    }`}>
                      <feature.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                      onClick={() => navigate('/features')}
                    >
                      {t('landing.features.learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent via-accent/90 to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {t('landing.download.title')}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('landing.download.subtitle')}
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <p className="text-xl font-semibold">App launching soon!</p>
            </div>
            <p className="text-white/70 text-sm max-w-md">
              We're working hard to bring you the best shopping experience. Stay tuned for updates!
            </p>
          </div>
        </div>
      </section>

      {/* Merchant Section */}
      <section className="pt-20 pb-8 md:pt-32 md:pb-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            {t('landing.merchant.title')}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            {t('landing.merchant.subtitle')}
          </p>
          
          <a 
            href="https://merchant.carigo.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12">
              {t('landing.merchant.button')}
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
