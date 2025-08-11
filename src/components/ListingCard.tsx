import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ListingCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  type: "stay" | "vehicle";
  features?: string[];
  isFavorite?: boolean;
}

const ListingCard = ({
  title,
  location,
  price,
  rating,
  reviews,
  image,
  type,
  features = [],
  isFavorite = false,
}: ListingCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 rounded-full bg-black/20 hover:bg-black/40 ${
            isFavorite ? "text-red-500" : "text-white"
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-white/90 text-foreground"
        >
          {type === "stay" ? "Stay" : "Vehicle"}
        </Badge>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-current text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviews})</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-3">{location}</p>
        
        {features.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {features.slice(0, 2).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {features.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{features.length - 2} more
              </Badge>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold">${price}</span>
            <span className="text-muted-foreground text-sm">
              {type === "stay" ? " / night" : " / day"}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListingCard;