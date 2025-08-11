import { Button } from "@/components/ui/button";
import { Home, Car, Tent, Ship, Mountain, Plane } from "lucide-react";

const categories = [
  { icon: Home, label: "Houses", active: true },
  { icon: Car, label: "Cars", active: false },
  { icon: Tent, label: "Camping", active: false },
  { icon: Ship, label: "Boats", active: false },
  { icon: Mountain, label: "Cabins", active: false },
  { icon: Plane, label: "Unique", active: false },
];

const CategoryTabs = () => {
  return (
    <div className="border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.label}
                variant="ghost"
                className={`flex flex-col gap-2 h-auto py-3 px-4 min-w-[80px] ${
                  category.active
                    ? "text-foreground border-b-2 border-primary rounded-none"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium">{category.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;