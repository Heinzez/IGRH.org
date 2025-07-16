import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import globeAnimation from "@/assets/globe.json";
import { Stethoscope, Heart, Activity, Plane } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Box, Sphere, Torus } from "@react-three/drei";

// 3D Heart component
const MeshHeart = ({ position, color = "#008dc9" }) => {
  return (
    <group position={position}>
      <Sphere args={[0.3, 16, 16]} position={[0, 0.2, 0]}>
        <meshStandardMaterial color={color} />
      </Sphere>
      <Sphere args={[0.3, 16, 16]} position={[0.3, 0.2, 0]}>
        <meshStandardMaterial color={color} />
      </Sphere>
      <Box args={[0.4, 0.4, 0.2]} position={[0.15, -0.1, 0]}>
        <meshStandardMaterial color={color} />
      </Box>
    </group>
  );
};

// 3D Stethoscope component
const MeshStethoscope = ({ position, color = "#0f2d5b" }) => {
  return (
    <group position={position}>
      <Torus args={[0.2, 0.05, 8, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial color={color} />
      </Torus>
      <Box args={[0.05, 0.8, 0.05]} position={[0, -0.4, 0]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Sphere args={[0.1, 16, 16]} position={[0, -0.8, 0]}>
        <meshStandardMaterial color={color} />
      </Sphere>
    </group>
  );
};

// 3D Activity/Pulse component  
const MeshActivity = ({ position, color = "#90d3fb" }) => {
  return (
    <group position={position}>
      <Box args={[0.6, 0.1, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.1, 0.4, 0.1]} position={[-0.2, 0.15, 0]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Box args={[0.1, 0.3, 0.1]} position={[0.2, 0.1, 0]}>
        <meshStandardMaterial color={color} />
      </Box>
    </group>
  );
};

// Flying paper jet component
const PaperJet = ({ position, onComplete }) => {
  const [currentPosition, setCurrentPosition] = useState([-5, 0, 0]);
  
  useEffect(() => {
    const animate = () => {
      setCurrentPosition(prev => {
        const newX = prev[0] + 0.1;
        if (newX > 5) {
          onComplete();
          return [-5, 0, 0];
        }
        return [newX, Math.sin(newX * 0.5) * 0.5, prev[2]];
      });
    };
    
    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <group position={currentPosition}>
      <Box args={[0.3, 0.05, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Box>
      <Box args={[0.1, 0.02, 0.15]} position={[0.1, 0, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Box>
    </group>
  );
};

export default function NotFound() {
  const location = useLocation();
  const [lottieLoaded, setLottieLoaded] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [showPaperJet, setShowPaperJet] = useState(false);
  const [personLookingAtJet, setPersonLookingAtJet] = useState(false);
  const [headShaking, setHeadShaking] = useState(true);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Track time on page
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [location.pathname]);

  useEffect(() => {
    // Show paper jet after 5 seconds
    if (timeOnPage > 5) {
      setShowPaperJet(true);
      setPersonLookingAtJet(true);
      setHeadShaking(false);
      
      // Reset after jet animation
      setTimeout(() => {
        setShowPaperJet(false);
        setPersonLookingAtJet(false);
        setHeadShaking(true);
      }, 3000);
    }
  }, [timeOnPage]);

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
        {/* 3D Medical Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} />
            
            {/* 3D Medical Icons */}
            <MeshHeart position={[-3, 2, 0]} />
            <MeshStethoscope position={[3, 1, 0]} />
            <MeshActivity position={[-2, -2, 0]} />
            <MeshHeart position={[2, -1, 0]} color="#90d3fb" />
            
            {/* Flying Paper Jet */}
            {showPaperJet && (
              <PaperJet 
                position={[0, 0, 0]}
                onComplete={() => setShowPaperJet(false)}
              />
            )}
          </Canvas>
        </div>

        {/* Mini Game Character (Medical Professional) */}
        <div className="relative mb-8">
          <div className="relative">
            {/* Mini person container */}
            <div className="w-24 h-32 relative">
              <img 
                src="https://images.unsplash.com/photo-1584421051105-5df9e20d9e77" 
                alt="Medical Professional"
                className={`w-full h-full object-cover object-top rounded-lg ${headShaking ? 'animate-pulse' : ''}`}
                style={{
                  transform: personLookingAtJet ? 'rotateY(20deg)' : headShaking ? 'rotateX(-5deg)' : 'none',
                  transition: 'transform 0.3s ease-in-out'
                }}
              />
              
              {/* Head shaking animation overlay */}
              {headShaking && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-bounce">
                  <div className="absolute inset-0.5 bg-red-400 rounded-full animate-ping" />
                </div>
              )}
              
              {/* Looking at jet indicator */}
              {personLookingAtJet && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="text-xs bg-primary/20 px-2 py-1 rounded-full">👀</div>
                </div>
              )}
            </div>

            {/* Pointing gesture */}
            <div className="absolute -bottom-2 -right-2 transform rotate-45">
              <div className="w-8 h-1 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-primary rounded-full ml-6 -mt-0.5" />
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
          
          <button className="glass-button px-8 py-3 rounded-full font-semibold text-primary hover:text-primary-glow transition-colors">
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
