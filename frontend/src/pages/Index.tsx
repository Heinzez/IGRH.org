import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Users, Award, Menu, ArrowRight, Handshake } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BurgerMenu, DesktopBurgerMenu } from "@/components/BurgerMenu";
import heroImage from "@/assets/hero-women-health.jpg";
import researchIcon from "@/assets/research-icon.jpg";
import educationIcon from "@/assets/education-icon.jpg";
import policyIcon from "@/assets/policy-icon.jpg";

const CountingNumber = ({ target, suffix = "", duration = 2000, shouldGlow = false }) => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });
    
    const element = document.getElementById(`count-${target}`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div 
      id={`count-${target}`}
      className="text-5xl font-bold text-primary mb-2 transition-all duration-300"
    >
      {count}{suffix}
    </div>
  );
};

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 glow-effect">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 animate-slide-up hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img 
              src="/lovable-uploads/c4a16660-f9be-4e7f-8d59-dfa08469d58d.png" 
              alt="IGRH Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-foreground">IGRH</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/about" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">About Us</a>
            <a href="/work" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Our Work</a>
            <a href="/research" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Research</a>
            <a href="/resources" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Resources</a>
            <a href="/news" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">News</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Button 
              className="hidden md:block glass-button text-primary hover:text-primary-glow px-6"
              size="sm"
            >
              <Handshake className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Donate
            </Button>
            <div className="hidden md:block">
              <DesktopBurgerMenu />
            </div>
            <div className="md:hidden">
              <BurgerMenu />
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="/about" className="block text-foreground hover:text-primary transition-colors">About Us</a>
              <a href="/work" className="block text-foreground hover:text-primary transition-colors">Our Work</a>
              <a href="/research" className="block text-foreground hover:text-primary transition-colors">Research</a>
              <a href="/resources" className="block text-foreground hover:text-primary transition-colors">Resources</a>
              <a href="/news" className="block text-foreground hover:text-primary transition-colors">News</a>
              <Button className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg group">
                <Handshake className="w-5 h-4 mr-2 group-hover:animate-pulse" />
                Donate
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat gradient-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(142, 76, 36, 0.1), rgba(142, 76, 50, 0.2)), url(${heroImage})`
        }}
      >
        <div className="container mx-auto px-4 text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-float">
            Advancing Global Reproductive Health
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The Institute for Global and Reproductive Health is dedicated to improving reproductive health outcomes worldwide through research, education, and advocacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="glass-button text-primary hover:text-primary-glow group border-0"
            >
              Learn About Our Impact
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              className="glass-button text-primary hover:text-primary-glow"
            >
              <Heart className="mr-2 h-4 w-4" />
              Support Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-110 transition-all duration-500 ease-out">
              <CountingNumber target={50} suffix="+" />
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Countries Served</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-500 ease-out">
              <CountingNumber target={2} suffix="M+" />
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Lives Impacted</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-500 ease-out">
              <CountingNumber target={100} suffix="+" />
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Research Projects</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-500 ease-out">
              <div className="animate-snake-glow rounded-lg p-3">
                <CountingNumber target={25} suffix="" />
              </div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Areas */}
      <section className="py-16 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4 animate-slide-up">
            Our Focus Areas
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Driving change through three core pillars that create lasting impact in reproductive health worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border glow-effect group hover:scale-105 transition-all duration-300 animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <img 
                    src={researchIcon} 
                    alt="Global Research" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  Global Research
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conducting cutting-edge research to address reproductive health challenges worldwide and developing evidence-based solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border glow-effect group hover:scale-105 transition-all duration-300 animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <img 
                    src={educationIcon} 
                    alt="Education & Training" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  Education & Training
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Training healthcare professionals and educating communities on reproductive health through innovative programs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border glow-effect group hover:scale-105 transition-all duration-300 animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <img 
                    src={policyIcon} 
                    alt="Policy Advocacy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  Policy Advocacy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advocating for evidence-based policies that improve reproductive health outcomes and create systemic change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-90"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-float">
            <Handshake className="h-12 w-12 mx-auto mb-4 animate-pulse-glow" />
          </div>
          <h2 className="text-4xl font-bold mb-4 animate-slide-up">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Together, we can ensure every person has access to quality reproductive healthcare. Your support creates lasting change.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 glow-effect group"
          >
            <Handshake className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Get Involved Today
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/c4a16660-f9be-4e7f-8d59-dfa08469d58d.png" 
                  alt="IGRH Logo" 
                  className="h-6 w-auto"
                />
                <span className="font-bold text-foreground">IGRH</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Institute for Global and Reproductive Health
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/mission" className="hover:text-primary transition-colors">Mission</a></li>
                <li><a href="/team" className="hover:text-primary transition-colors">Team</a></li>
                <li><a href="/history" className="hover:text-primary transition-colors">History</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Work</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Programs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Impact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Social Media</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            © 2025 Institute for Global and Reproductive Health. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
