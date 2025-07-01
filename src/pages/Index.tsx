import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">IGRH</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Our Work</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Research</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Resources</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">News</a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Donate
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Advancing Global Reproductive Health
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The Institute for Global and Reproductive Health is dedicated to improving reproductive health outcomes worldwide through research, education, and advocacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Learn About Our Impact
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Support Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-muted-foreground">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Global Research</h3>
                <p className="text-muted-foreground">
                  Conducting cutting-edge research to address reproductive health challenges worldwide.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Education & Training</h3>
                <p className="text-muted-foreground">
                  Training healthcare professionals and educating communities on reproductive health.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Policy Advocacy</h3>
                <p className="text-muted-foreground">
                  Advocating for evidence-based policies that improve reproductive health outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Together, we can ensure every person has access to quality reproductive healthcare.
          </p>
          <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Get Involved Today
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
