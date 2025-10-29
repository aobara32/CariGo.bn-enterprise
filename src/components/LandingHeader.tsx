import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const LandingHeader = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/assets/logo.png" 
              alt="CariGo Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="font-bold text-lg font-racing">CariGo</span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 flex-wrap">
            <Link to="/about" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              {t('header.about')}
            </Link>
            <Link to="/features" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              {t('header.features')}
            </Link>
            <Link to="/careers" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              {t('header.careers')}
            </Link>
            <Link to="/support" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              {t('header.support')}
            </Link>
            <Link to="/faq" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              {t('header.faq')}
            </Link>
            <Link to="/contact" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
              {t('header.contact')}
            </Link>
            <LanguageSwitcher />
            <Button className="text-xs lg:text-sm px-4 lg:px-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white cursor-not-allowed whitespace-nowrap" disabled>
              {t('header.comingSoon')}
            </Button>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link 
              to="/about" 
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('header.about')}
            </Link>
            <Link 
              to="/features" 
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('header.features')}
            </Link>
            <Link 
              to="/careers" 
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('header.careers')}
            </Link>
            <Link 
              to="/support" 
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('header.support')}
            </Link>
            <Link 
              to="/faq" 
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('header.faq')}
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('header.contact')}
            </Link>
            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white cursor-not-allowed" disabled>
              {t('header.comingSoon')}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
