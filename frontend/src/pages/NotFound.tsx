import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import globeAnimation from "@/assets/globe.json";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
       {/* Animated Globe */}
      <div className="w-52 h-52 mb-6">
        <Lottie animationData={globeAnimation} 
          loop
          onDOMLoaded={() => setLottieLoaded(true)} />
        {!lottieLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-32 h-32 animate-spin" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="#39FF14" strokeWidth="5" fill="none" />
              <path d="M50,5 a45,45 0 1,0 0.1,0" stroke="#00D1FF" strokeWidth="2" fill="none" />
              <path d="M5,50 a45,45 0 1,0 90,0" stroke="#00D1FF" strokeWidth="2" fill="none" />
            </svg>
        </div>
      )}
        </div>
        <h1 className="text-5xl font-bold mb-4">Error 404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Looks like you're off the map 🌍</p>
        <a href="/" className="inline-block px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg shadow hover:bg-lime-300 transition">
          Return Home
        </a>
      <p className="text-sm text-muted mt-6">
        Found a broken link?{' '}
        <a href="mailto:support@igrh.org?subject=Broken link on IGRH" className="text-accent underline hover:text-primary">
          Report it
        </a>
      </p>
      </div>
  );
}
