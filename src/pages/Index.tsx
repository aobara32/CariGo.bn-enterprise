import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { LocationMap } from "@/components/LocationMap";
import { 
  ShoppingBag, 
  Smartphone, 
  Home, 
  Shirt, 
  Book, 
  Utensils,
  Sparkles,
  TrendingUp
} from "lucide-react";

const Index = () => {
  const categories = [
    { icon: ShoppingBag, label: "Shopping", color: "bg-primary" },
    { icon: Smartphone, label: "Electronics", color: "bg-blue-500" },
    { icon: Home, label: "Home", color: "bg-green-500" },
    { icon: Shirt, label: "Fashion", color: "bg-purple-500" },
    { icon: Book, label: "Books", color: "bg-yellow-500" },
    { icon: Utensils, label: "Food", color: "bg-red-500" },
  ];

  const featuredProducts = [
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      name: "Wireless Headphones",
      price: "BND 89.99",
      location: "Bandar Seri Begawan",
      rating: 4.8,
      badge: "New"
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      name: "Classic Watch",
      price: "BND 149.99",
      location: "Kuala Belait",
      rating: 4.9,
    },
    {
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      name: "Sneakers",
      price: "BND 79.99",
      location: "Tutong",
      rating: 4.7,
      badge: "Popular"
    },
    {
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop",
      name: "Backpack",
      price: "BND 59.99",
      location: "Bandar Seri Begawan",
      rating: 4.6,
    },
  ];

  const trendingProducts = [
    {
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&h=500&fit=crop",
      name: "Business Shirt",
      price: "BND 45.99",
      location: "Bandar Seri Begawan",
      rating: 4.5,
    },
    {
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
      name: "Smart Watch",
      price: "BND 199.99",
      location: "Kuala Belait",
      rating: 4.8,
      badge: "Sale"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-hover p-8 md:p-12 text-primary-foreground">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Brunei Exclusive</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The Largest<br />Online Mall in the Region
            </h1>
            <p className="text-lg opacity-90">
              Fast delivery across Brunei, trusted quality
            </p>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
            <div className="h-full w-full bg-white rounded-full blur-3xl" />
          </div>
        </section>

        {/* Categories */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Categories</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>

        {/* Location Map */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Delivery Area</h2>
          <LocationMap />
        </section>

        {/* Featured Products */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        {/* Trending Products */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Trending Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>© 2025 CariGo. Cari Murah, Hidup Bijak</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
