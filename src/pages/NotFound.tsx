import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-racing">
          404
        </h1>
        <p className="mb-2 text-2xl md:text-3xl font-semibold text-foreground">Oops! Page not found</p>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          size="lg" 
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
        >
          <Home className="w-5 h-5 mr-2" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
