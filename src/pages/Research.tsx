import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Users, ArrowRight } from "lucide-react";

const Research = () => {
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
            <a href="/work" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Our Work</a>
            <a href="/research" className="text-primary font-semibold">Research</a>
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
              Research & Publications
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our evidence-based research drives innovation in reproductive health and informs global policy decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Maternal Mortality Prevention</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Investigating innovative approaches to reduce maternal deaths in low-resource settings.
                </p>
                <Badge variant="secondary">5 Active Studies</Badge>
              </CardContent>
            </Card>
            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Contraceptive Innovation</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Developing new contraceptive methods and improving existing technologies.
                </p>
                <Badge variant="secondary">3 Clinical Trials</Badge>
              </CardContent>
            </Card>
            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Adolescent Health</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Understanding and addressing reproductive health needs of adolescents globally.
                </p>
                <Badge variant="secondary">7 Ongoing Projects</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Publications</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold flex-1">
                    "Global Trends in Maternal Mortality: A 10-Year Analysis"
                  </h3>
                  <FileText className="h-5 w-5 text-primary ml-3" />
                </div>
                <p className="text-muted-foreground mb-3">
                  Comprehensive analysis of maternal mortality trends across 50 countries, identifying key factors and intervention opportunities.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Published: March 2024
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    12 Authors
                  </span>
                  <Badge>Lancet Global Health</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold flex-1">
                    "Community-Based Interventions for Adolescent Reproductive Health"
                  </h3>
                  <FileText className="h-5 w-5 text-primary ml-3" />
                </div>
                <p className="text-muted-foreground mb-3">
                  Systematic review of community-based programs and their effectiveness in improving adolescent reproductive health outcomes.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Published: February 2024
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    8 Authors
                  </span>
                  <Badge>BMJ Global Health</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold flex-1">
                    "Technology Solutions for Contraceptive Access in Rural Areas"
                  </h3>
                  <FileText className="h-5 w-5 text-primary ml-3" />
                </div>
                <p className="text-muted-foreground mb-3">
                  Evaluation of mobile health technologies and their impact on contraceptive access in underserved communities.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Published: January 2024
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    6 Authors
                  </span>
                  <Badge>Reproductive Health</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="gradient-bg text-primary-foreground glow-effect group">
              View All Publications
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;