import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={(val) => setLanguage(val as 'en' | 'ms')}>
      <SelectTrigger className="w-[100px] sm:w-[120px] h-8 gap-2">
        <Globe className="h-4 w-4 flex-shrink-0" />
        <SelectValue>
          <span className="text-xs sm:text-sm font-medium truncate">{language === 'en' ? 'English' : 'Melayu'}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>English (EN)</span>
          </div>
        </SelectItem>
        <SelectItem value="ms">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Melayu (MS)</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
