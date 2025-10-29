import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, Package, MapPin, ShoppingBag, Check } from "lucide-react";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      id: 'price-comparison',
      icon: BarChart3,
      title: t('features.compare.title'),
      description: t('features.compare.desc'),
      benefits: [
        t('features.compare.benefit1'),
        t('features.compare.benefit2'),
        t('features.compare.benefit3'),
      ],
      imageUrl: '/assets/compare.jpg',
      color: 'primary',
    },
    {
      id: 'real-time-inventory',
      icon: Package,
      title: t('features.inventory.title'),
      description: t('features.inventory.desc'),
      benefits: [
        t('features.inventory.benefit1'),
        t('features.inventory.benefit2'),
        t('features.inventory.benefit3'),
      ],
      imageUrl: '/assets/stock.jpg',
      color: 'accent',
    },
    {
      id: 'smart-location',
      icon: MapPin,
      title: t('features.map.title'),
      description: t('features.map.desc'),
      benefits: [
        t('features.map.benefit1'),
        t('features.map.benefit2'),
        t('features.map.benefit3'),
      ],
      imageUrl: '/assets/map.jpg',
      color: 'primary',
    },
    {
      id: 'all-in-one',
      icon: ShoppingBag,
      title: t('features.allinone.title'),
      description: t('features.allinone.desc'),
      benefits: [
        t('features.allinone.benefit1'),
        t('features.allinone.benefit2'),
        t('features.allinone.benefit3'),
      ],
      imageUrl: '/assets/complete.jpg',
      color: 'accent',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <LandingHeader />

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-racing">
            {t('features.pageTitle')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('features.pageSubtitle')}
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <section key={feature.id} className="scroll-mt-20">
              <div className={`grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'sm:flex-row-reverse' : ''
              }`}>
                {/* Content Side */}
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'sm:order-2' : ''}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${
                    feature.color === 'primary' 
                      ? 'bg-gradient-to-br from-primary to-primary/80' 
                      : 'bg-gradient-to-br from-accent to-accent/80'
                  }`}>
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {feature.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3 pt-4">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {t('features.keyBenefits')}
                    </h3>
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          feature.color === 'primary' ? 'bg-primary' : 'bg-accent'
                        }`}>
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <p className="text-base text-foreground leading-relaxed">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className={index % 2 === 1 ? 'sm:order-1' : ''}>
                  <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      <img 
                        src={feature.imageUrl}
                        alt={`${feature.title} illustration`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-primary/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                        <p className="text-xs font-semibold text-primary-foreground">Feature Preview</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-32 max-w-4xl mx-auto">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/30">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('features.ctaTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('features.ctaSubtitle')}
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <p className="text-xl font-semibold text-foreground">Coming Soon! 🚀</p>
              </div>
              <p className="text-muted-foreground text-sm max-w-md">
                We're working hard to bring you the best shopping experience. Stay tuned for updates!
              </p>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}

