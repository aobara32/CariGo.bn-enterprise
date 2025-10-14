import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, Map, Smartphone, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <LandingHeader />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <article className="max-w-4xl mx-auto prose prose-lg">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground font-racing">
            {t('about.title')}
          </h1>

          {/* Story Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              {t('about.story.title')}
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              {t('about.story.p1')}
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.story.p2')}
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              {t('about.mission.title')}
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.mission.desc')}
            </p>
          </section>

          {/* Vision Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              {t('about.vision.title')}
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.vision.desc')}
            </p>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">
              {t('about.values.title')}
            </h2>
            <div className="space-y-6">
              <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <Search className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg text-foreground leading-relaxed font-medium">
                      {t('about.values.transparency')}
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0">
                    <Map className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg text-foreground leading-relaxed font-medium">
                      {t('about.values.community')}
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg text-foreground leading-relaxed font-medium">
                      {t('about.values.innovation')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              {t('about.commitment.title')}
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.commitment.desc')}
            </p>
          </section>

          {/* Closing */}
          <div className="text-center py-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
            <p className="text-2xl font-bold text-primary mb-2 font-racing">
              Cari Murah, Hidup Bijak
            </p>
            <p className="text-muted-foreground">
              Find Cheap, Live Wisely
            </p>
          </div>
        </article>

        {/* Join Our Team CTA Section */}
        <section className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <Briefcase className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Join Our Team
                </h2>
                <p className="text-muted-foreground text-lg">
                  Be part of something bigger. Help us shape the future of shopping in Brunei.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
                  onClick={() => navigate('/careers')}
                >
                  View Open Positions
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
