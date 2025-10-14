import { MapPin, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  location: string;
  rating: number;
  badge?: string;
}

export const ProductCard = ({ image, name, price, location, rating, badge }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {badge && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
            {badge}
          </Badge>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xl font-bold text-primary">{price}</p>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          
          <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
