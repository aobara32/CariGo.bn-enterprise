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
      imageUrl: '/assets/comparision.png',
    },
    {
      icon: Package,
      title: t('landing.features.inventory.title'),
      description: t('landing.features.inventory.desc'),
      priority: 'high' as const,
      imageUrl: '/assets/inventory.png',
    },
    {
      icon: MapPin,
      title: t('landing.features.map.title'),
      description: t('landing.features.map.desc'),
      priority: 'high' as const,
      imageUrl: '/assets/mapscreen.png',
    },
    {
      icon: ShoppingBag,
      title: t('landing.features.allinone.title'),
      description: t('landing.features.allinone.desc'),
      priority: 'medium' as const,
      imageUrl: '/assets/allinone.png',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white font-racing px-2">
              {t('landing.hero.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto px-4">
              {t('landing.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-2 border-white cursor-not-allowed" 
                disabled
              >
                {t('header.comingSoon')} 🚀
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 border-white text-black bg-white hover:bg-white/90"
                onClick={() => navigate('/features')}
              >
                {t('landing.hero.learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 ${
                  feature.priority === 'high' 
                    ? 'border-primary hover:border-primary/80 bg-primary/5' 
                    : 'border-accent hover:border-accent/80 bg-accent/5'
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Image Section */}
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-background to-primary/5">
                    <img 
                      src={feature.imageUrl} 
                      alt={`${feature.title} Feature`} 
                      className="w-full h-full object-contain object-center p-4 md:p-6"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex flex-col justify-between flex-1 p-6 md:p-8 lg:p-10">
                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-primary">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                        {feature.description}
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground group text-sm md:text-base"
                      onClick={() => navigate('/features')}
                    >
                      {t('landing.features.learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-accent via-accent/90 to-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Image */}
            <div className="lg:flex-1 flex justify-center w-full max-w-sm lg:max-w-md">
              <img 
                src="/assets/install.png" 
                alt="CariGo App Installation" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Content */}
            <div className="text-center lg:text-left lg:flex-1 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
                {t('landing.download.title')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
                {t('landing.download.subtitle')}
              </p>
              
              <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
                  <p className="text-lg sm:text-xl font-semibold">App launching soon!</p>
                </div>
                <p className="text-white/70 text-xs sm:text-sm max-w-md">
                  We're working hard to bring you the best shopping experience. Stay tuned for updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchant Section */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            {t('landing.merchant.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground max-w-2xl mx-auto px-4">
            {t('landing.merchant.subtitle')}
          </p>
          
          <a 
            href="https://merchant.carigo.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12">
              {t('landing.merchant.button')}
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
