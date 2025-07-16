import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import globeAnimation from "@/assets/globe.json";
import { Stethoscope, Heart, Activity } from "lucide-react";

export default function NotFound() {
  const location = useLocation();
  const [lottieLoaded, setLottieLoaded] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-primary/10 to-background relative overflow-hidden">
      {/* Background medical pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="medicalPattern" patternUnits="userSpaceOnUse" width="60" height="60">
              <circle cx="30" cy="30" r="2" fill="currentColor" className="text-primary" />
              <path d="M25,15 L35,15 L35,25 L45,25 L45,35 L35,35 L35,45 L25,45 L25,35 L15,35 L15,25 L25,25 Z" fill="currentColor" className="text-primary/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medicalPattern)" />
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10">
        {/* Medical professional image */}
        <div className="relative mb-8">
          <div className="glass-card p-6 rounded-full">
            <img 
              src="https://images.unsplash.com/photo-1584421051105-5df9e20d9e77" 
              alt="Medical Professional"
              className="w-32 h-32 rounded-full object-cover animate-float"
            />
            {/* Nodding animation overlay */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full animate-pulse">
              <div className="absolute inset-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>

        {/* Animated Globe */}
        <div className="w-40 h-40 mb-6 relative">
          <Lottie 
            animationData={globeAnimation} 
            loop
            onDOMLoaded={() => setLottieLoaded(true)}
            className="filter hue-rotate-180 brightness-110"
          />
          {!lottieLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Medical icons floating around */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Stethoscope className="w-8 h-8 text-primary/40" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-6 h-6 text-primary/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <Activity className="w-7 h-7 text-primary/40" />
        </div>

        {/* Error message */}
        <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Error 404</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Page Not Found 🏥
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our medical team couldn't locate the page you're looking for. 
            Let's get you back to healthy browsing!
          </p>
          
          <button className="glass-button px-8 py-3 rounded-full font-semibold text-foreground hover:text-primary transition-colors">
            <a href="/" className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>Return to Health Hub</span>
            </a>
          </button>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          Found a broken link?{' '}
          <a href="mailto:support@igrh.org?subject=Broken link on IGRH" className="text-primary underline hover:text-primary-glow transition-colors">
            Report it to our medical team
          </a>
        </p>
      </div>
    </div>
  );
}
