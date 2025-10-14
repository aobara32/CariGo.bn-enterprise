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
      videoPlaceholder: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
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
      videoPlaceholder: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
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
      videoPlaceholder: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80',
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
      videoPlaceholder: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
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
              <div className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
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

                {/* Video/Image Side */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      <img 
                        src={feature.videoPlaceholder}
                        alt={`${feature.title} demonstration`}
                        className="w-full h-full object-cover"
                      />
                      {/* Video overlay placeholder */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <p className="text-xs font-semibold text-primary-foreground">Coming Soon</p>
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

