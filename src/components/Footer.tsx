import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">StayDrive</h3>
            <p className="text-muted-foreground">
              Your one-stop platform for booking amazing places to stay and vehicles to drive worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.support')}</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.helpCenter')}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.safetyInformation')}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                {t('footer.cancellationOptions')}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Report issues
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.host')}</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                List your property
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                List your vehicle
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Host resources
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Community forum
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-muted-foreground text-sm">
              Get the latest deals and travel inspiration
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 StayDrive. {t('footer.allRightsReserved')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;