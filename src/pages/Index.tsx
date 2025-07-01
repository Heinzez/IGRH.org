import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Users, Award, Menu, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-women-health.jpg";
import researchIcon from "@/assets/research-icon.jpg";
import educationIcon from "@/assets/education-icon.jpg";
import policyIcon from "@/assets/policy-icon.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 glow-effect">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-slide-up">
            <Heart className="h-8 w-8 text-primary animate-pulse-glow" />
            <span className="text-xl font-bold text-foreground">IGRH</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">About Us</a>
            <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Our Work</a>
            <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Research</a>
            <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Resources</a>
            <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">News</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button 
              className="hidden md:block gradient-bg text-primary-foreground hover:shadow-lg glow-effect border-0"
              size="sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Donate
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#" className="block text-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">Our Work</a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">Research</a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">Resources</a>
              <a href="#" className="block text-foreground hover:text-primary transition-colors">News</a>
              <Button className="w-full gradient-bg text-primary-foreground">
                <Sparkles className="w-4 h-4 mr-2" />
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
              className="gradient-bg text-primary-foreground hover:shadow-xl glow-effect group border-0"
            >
              Learn About Our Impact
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary/10 glow-effect bg-background/80 backdrop-blur-sm"
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
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-primary mb-2 animate-pulse-glow">50+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">Countries Served</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-primary mb-2 animate-pulse-glow">2M+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">Lives Impacted</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-primary mb-2 animate-pulse-glow">100+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">Research Projects</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-primary mb-2 animate-pulse-glow">25</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">Years of Excellence</div>
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
            <Sparkles className="h-12 w-12 mx-auto mb-4 animate-pulse-glow" />
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
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 glow-effect group border-0"
          >
            <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
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
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">IGRH</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Institute for Global and Reproductive Health
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Mission</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">History</a></li>
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
