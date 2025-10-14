import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'ms' : 'en')}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{language === 'en' ? 'EN' : 'MS'}</span>
    </Button>
  );
};
