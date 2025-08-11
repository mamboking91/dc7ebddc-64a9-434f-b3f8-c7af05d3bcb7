import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              {t('header.brand')}
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              {t('header.placesToStay')}
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              {t('header.vehicles')}
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              {t('header.experiences')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              {t('header.becomeHost')}
            </Button>
            <LanguageSwitcher />
            <Button variant="outline" className="gap-2">
              <Menu className="h-4 w-4" />
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;