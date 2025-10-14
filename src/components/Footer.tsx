import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 w-fit hover:opacity-80 transition-opacity">
              <img 
                src="/assets/logo.png" 
                alt="CariGo Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-lg font-racing">CariGo</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('header.about')}
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('header.features')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('header.careers')}
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('header.support')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('header.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.app')}</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {t('footer.comingSoon')}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span>In Development</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CariGo. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};
