import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Target, ArrowRight, Activity, Stethoscope, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus } from "@react-three/drei";

// 3D Globe component
const RotatingGlobe = () => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#008dc9" 
        wireframe
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
};

// 3D Medical Molecules
const MedicalMolecules = () => {
  const group = useRef();
  
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.x += delta * 0.1;
      group.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Box args={[0.5, 0.5, 0.5]} position={[2, 1, 0]}>
        <meshStandardMaterial color="#0f2d5b" transparent opacity={0.8} />
      </Box>
      <Torus args={[0.8, 0.2, 8, 16]} position={[-2, -1, 0]}>
        <meshStandardMaterial color="#90d3fb" transparent opacity={0.7} />
      </Torus>
      <Sphere args={[0.3, 16, 16]} position={[0, 2, -1]}>
        <meshStandardMaterial color="#008dc9" transparent opacity={0.9} />
      </Sphere>
    </group>
  );
};

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [medicalOfficerVisible, setMedicalOfficerVisible] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Show medical officer when scrolling starts
      if (scrollPosition > 100) {
        setMedicalOfficerVisible(true);
      }
      
      // Change stages based on scroll position
      if (scrollPosition > 800) {
        setCurrentStage(2); // Stethoscope on pregnant woman
      } else if (scrollPosition > 400) {
        setCurrentStage(1); // Pointing to important parts
      } else {
        setCurrentStage(0); // Initial state
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 glow-effect">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slide-up">
            <img 
              src="/lovable-uploads/c4a16660-f9be-4e7f-8d59-dfa08469d58d.png" 
              alt="IGRH Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-foreground">IGRH</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Home</a>
            <a href="/about" className="text-primary font-semibold">About Us</a>
            <a href="/work" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Our Work</a>
            <a href="/research" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Research</a>
            <a href="/resources" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Resources</a>
            <a href="/news" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">News</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with 3D Globe */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingGlobe />
            <MedicalMolecules />
          </Canvas>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-foreground mb-6 animate-slide-up">
              About IGRH
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The Institute for Global and Reproductive Health is a leading organization dedicated to improving reproductive health outcomes worldwide through innovative research, comprehensive education, and evidence-based advocacy.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary" />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>2M+ Lives Impacted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span>25 Years Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Officer Background - Appears on scroll */}
      {medicalOfficerVisible && (
        <div 
          className="fixed right-0 top-0 w-1/3 h-full z-0 transition-all duration-1000 ease-out"
          style={{
            transform: `translateX(${Math.max(0, 100 - scrollY * 0.1)}%)`,
            opacity: Math.min(1, (scrollY - 100) / 300)
          }}
        >
          <div className="relative w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1581093577421-f561a654a353" 
              alt="Medical Officer"
              className="w-full h-full object-cover object-left filter brightness-90"
            />
            
            {/* Overlay effects based on scroll stage */}
            {currentStage === 1 && (
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                <div className="absolute -top-2 -left-2 w-8 h-8 border-2 border-primary rounded-full animate-ping" />
              </div>
            )}
            
            {currentStage === 2 && (
              <div className="absolute bottom-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <Stethoscope className="w-8 h-8 text-primary animate-pulse" />
                <div className="absolute -inset-2 border-2 border-primary/50 rounded-full animate-ping" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mission & Vision */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-3xl group hover:scale-105 transition-all duration-500">
              <Target className="h-16 w-16 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold text-card-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To advance global reproductive health through cutting-edge research, innovative education programs, and evidence-based policy advocacy that creates lasting change in communities worldwide.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl group hover:scale-105 transition-all duration-500">
              <Globe className="h-16 w-16 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold text-card-foreground mb-6">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A world where every person has access to comprehensive reproductive healthcare, enabling them to make informed decisions about their reproductive lives and achieve optimal health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-transparent relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, number: "50+", label: "Countries Served", color: "text-blue-500" },
              { icon: Users, number: "2M+", label: "Lives Impacted", color: "text-green-500" },
              { icon: Activity, number: "100+", label: "Research Projects", color: "text-purple-500" },
              { icon: Award, number: "25", label: "Years of Excellence", color: "text-orange-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-card p-6 rounded-2xl group hover:scale-110 transition-all duration-500">
                <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color} group-hover:scale-125 transition-transform`} />
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We approach every challenge with empathy and understanding, recognizing the human impact of our work."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of partnerships and work together with communities, governments, and organizations."
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We strive for the highest standards in research, education, and advocacy to maximize our impact."
              }
            ].map((value, index) => (
              <div key={index} className="text-center glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-500">
                <value.icon className="h-20 w-20 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-primary/10 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card p-12 rounded-3xl max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Join Our Mission</h2>
            <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
              Together, we can create a world where reproductive health is a fundamental right for all.
            </p>
            <Button 
              size="lg" 
              className="glass-button text-primary hover:text-primary-glow px-8 py-4 text-lg"
            >
              Get Involved Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;