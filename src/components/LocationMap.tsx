import { Card } from "@/components/ui/card";

export const LocationMap = () => {
  return (
    <Card className="overflow-hidden border-border">
      <div className="relative h-64">
        <img 
          src="/assets/mapscreen.png" 
          alt="CariGo Map - Brunei Coverage Area" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
          <div className="bg-card/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
            <p className="font-semibold text-foreground">Brunei</p>
            <p className="text-sm text-muted-foreground">Delivery Area</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
