import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  label: string;
  color?: string;
}

export const CategoryCard = ({ icon: Icon, label, color = "bg-primary" }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-md transition-all duration-300 border-none bg-card">
      <div className="flex flex-col items-center justify-center p-4 gap-3">
        <div className={`${color} rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <span className="text-sm font-medium text-center text-foreground">{label}</span>
      </div>
    </Card>
  );
};
