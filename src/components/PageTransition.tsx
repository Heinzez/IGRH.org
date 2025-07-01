import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex items-center space-x-4">
          {/* Logo slides in first */}
          <div className="animate-slide-in-logo">
            <img 
              src="/lovable-uploads/c4a16660-f9be-4e7f-8d59-dfa08469d58d.png" 
              alt="IGRH Logo" 
              className="h-16 w-auto animate-spin"
              style={{ animationDuration: "2s" }}
            />
          </div>
          {/* Text slides out after logo */}
          <div className="animate-slide-out-text">
            <span className="text-3xl font-bold text-foreground">IGRH</span>
          </div>
        </div>
      </div>
    );
  }

  return <div className="animate-fade-in">{children}</div>;
};