import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, BookOpen, Microscope, Heart, Stethoscope } from "lucide-react";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
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
            <a href="/about" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">About Us</a>
            <a href="/work" className="text-primary font-semibold">Our Work</a>
            <a href="/research" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Research</a>
            <a href="/resources" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Resources</a>
            <a href="/news" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">News</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Our Work
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Through comprehensive programs and initiatives, we're transforming reproductive health outcomes across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <Microscope className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Clinical Research</h3>
                <p className="text-muted-foreground mb-4">
                  Conducting groundbreaking clinical trials and studies to develop new treatments and improve existing protocols for reproductive health conditions.
                </p>
                <Badge variant="secondary">Active Projects: 15</Badge>
              </CardContent>
            </Card>

            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Healthcare Training</h3>
                <p className="text-muted-foreground mb-4">
                  Training healthcare professionals worldwide with the latest knowledge and skills in reproductive health care delivery.
                </p>
                <Badge variant="secondary">Professionals Trained: 5,000+</Badge>
              </CardContent>
            </Card>

            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Community Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Implementing community-based interventions that address local reproductive health needs and cultural contexts.
                </p>
                <Badge variant="secondary">Communities Served: 200+</Badge>
              </CardContent>
            </Card>

            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Policy Advocacy</h3>
                <p className="text-muted-foreground mb-4">
                  Working with governments and international organizations to develop evidence-based policies that improve reproductive health access.
                </p>
                <Badge variant="secondary">Policy Changes: 25+</Badge>
              </CardContent>
            </Card>

            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <Stethoscope className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Emergency Response</h3>
                <p className="text-muted-foreground mb-4">
                  Providing critical reproductive health services in emergency situations and humanitarian crises.
                </p>
                <Badge variant="secondary">Responses: 30+</Badge>
              </CardContent>
            </Card>

            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Innovation Labs</h3>
                <p className="text-muted-foreground mb-4">
                  Developing innovative technologies and approaches to solve complex reproductive health challenges.
                </p>
                <Badge variant="secondary">Innovations: 12+</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Recent Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Maternal Health Initiative - Kenya</h3>
                <p className="text-muted-foreground mb-3">
                  Reduced maternal mortality by 40% in rural communities through improved prenatal care and skilled birth attendance programs.
                </p>
                <Badge>Completed 2024</Badge>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Contraceptive Access Program - Bangladesh</h3>
                <p className="text-muted-foreground mb-3">
                  Increased contraceptive access by 60% in underserved areas through community health worker training and supply chain improvements.
                </p>
                <Badge>Ongoing</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;