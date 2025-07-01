import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
       {/* Animated Globe */}
      <div className="w-32 h-32 mb-6 animate-spin-slow">
        <img
          src="/globe.gif" // 👈 Place this in /public and rename accordingly
          alt="Rotating Globe"
          className="w-full h-full object-contain"
        />
        </div>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Looks like you're off the map 🌍</p>
        <a href="/" className="inline-block px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg shadow hover:bg-lime-300 transition">
          Return to Home
        </a>
      </div>
  );
};

export default NotFound;
