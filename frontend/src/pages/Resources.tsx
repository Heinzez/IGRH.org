import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen, Video, Users, ArrowRight } from "lucide-react";

const Resources = () => {
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
            <a href="/research" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Research</a>
            <a href="/resources" className="text-primary font-semibold">Resources</a>
            <a href="/news" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">News</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Resources & Tools
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Access our comprehensive library of research, training materials, and tools to advance reproductive health initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="glow-effect group hover:scale-105 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Guidelines</h3>
                <p className="text-muted-foreground text-sm">Clinical and program guidelines</p>
              </CardContent>
            </Card>
            <Card className="glow-effect group hover:scale-105 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Training</h3>
                <p className="text-muted-foreground text-sm">Educational videos and courses</p>
              </CardContent>
            </Card>
            <Card className="glow-effect group hover:scale-105 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Reports</h3>
                <p className="text-muted-foreground text-sm">Research reports and data</p>
              </CardContent>
            </Card>
            <Card className="glow-effect group hover:scale-105 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">Forums and discussions</p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Resources */}
          <h2 className="text-3xl font-bold text-center mb-12">Featured Resources</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold flex-1">
                    Comprehensive Family Planning Implementation Guide
                  </h3>
                  <Download className="h-5 w-5 text-primary ml-3" />
                </div>
                <p className="text-muted-foreground mb-4">
                  A complete guide for implementing family planning programs in diverse cultural and resource settings.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge>PDF</Badge>
                    <Badge variant="secondary">120 pages</Badge>
                    <Badge variant="secondary">Updated 2024</Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    Download
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold flex-1">
                    Emergency Obstetric Care Training Modules
                  </h3>
                  <Video className="h-5 w-5 text-primary ml-3" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Interactive training modules for healthcare providers on emergency obstetric and newborn care.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge>Video Series</Badge>
                    <Badge variant="secondary">8 modules</Badge>
                    <Badge variant="secondary">Certificate Available</Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    Access Training
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold flex-1">
                    Global Reproductive Health Data Dashboard
                  </h3>
                  <BookOpen className="h-5 w-5 text-primary ml-3" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Interactive dashboard with the latest reproductive health indicators and trends worldwide.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge>Interactive Tool</Badge>
                    <Badge variant="secondary">Real-time Data</Badge>
                    <Badge variant="secondary">50+ Countries</Badge>
                  </div>
                  <Button size="sm" variant="outline">
                    View Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-bg text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Custom Resources?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team to develop specialized training materials or resources for your specific needs.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 glow-effect group"
          >
            Contact Our Team
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Resources;