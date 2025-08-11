import { Button } from "@/components/ui/button";
import { User, Globe, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              StayDrive
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Places to stay
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Vehicles
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Experiences
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Become a host
            </Button>
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
            </Button>
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