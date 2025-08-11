import { Button } from "@/components/ui/button";
import { Home, Car, Tent, Ship, Mountain, Plane } from "lucide-react";
import { useTranslation } from 'react-i18next';

const CategoryTabs = () => {
  const { t } = useTranslation();
  
  const categories = [
    { icon: Home, labelKey: "categories.houses", active: true },
    { icon: Car, labelKey: "categories.cars", active: false },
    { icon: Tent, labelKey: "categories.camping", active: false },
    { icon: Ship, labelKey: "categories.boats", active: false },
    { icon: Mountain, labelKey: "categories.cabins", active: false },
    { icon: Plane, labelKey: "categories.unique", active: false },
  ];

  return (
    <div className="border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.labelKey}
                variant="ghost"
                className={`flex flex-col gap-2 h-auto py-3 px-4 min-w-[80px] ${
                  category.active
                    ? "text-foreground border-b-2 border-primary rounded-none"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium">{t(category.labelKey)}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;