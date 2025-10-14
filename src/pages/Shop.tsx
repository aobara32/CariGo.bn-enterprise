import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { LocationMap } from "@/components/LocationMap";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Smartphone, Shirt, Home, Utensils, Dumbbell } from "lucide-react";

export default function Shop() {
  const categories = [
    { icon: ShoppingBag, label: "Shopping", color: "bg-blue-500" },
    { icon: Smartphone, label: "Electronics", color: "bg-purple-500" },
    { icon: Shirt, label: "Fashion", color: "bg-pink-500" },
    { icon: Home, label: "Home", color: "bg-green-500" },
    { icon: Utensils, label: "Food", color: "bg-orange-500" },
    { icon: Dumbbell, label: "Sports", color: "bg-red-500" },
  ];

  const products = [
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      name: "Wireless Headphones",
      price: "BND 89.99",
      location: "Gadong",
      rating: 4.8,
      badge: "Popular"
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      name: "Smart Watch",
      price: "BND 149.99",
      location: "Kiulap",
      rating: 4.6,
      badge: "New"
    },
    {
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      name: "Designer Sunglasses",
      price: "BND 45.00",
      location: "Bandar",
      rating: 4.9,
    },
    {
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      name: "Sneakers",
      price: "BND 79.99",
      location: "Gadong",
      rating: 4.7,
      badge: "Sale"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>

        <section>
          <LocationMap />
        </section>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2 mb-6">
            <TabsTrigger value="featured">Featured Products</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured" className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trending" className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Trending Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice().reverse().map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
