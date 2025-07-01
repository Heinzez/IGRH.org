import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Globe } from "lucide-react";

const News = () => {
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
            <a href="/resources" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">Resources</a>
            <a href="/news" className="text-primary font-semibold">News</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Latest News & Updates
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay informed about our latest research findings, program updates, and global reproductive health developments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary mb-8 glow-effect">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  <span className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    March 15, 2024
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  IGRH Launches Revolutionary Maternal Health Initiative in Sub-Saharan Africa
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Our new $50 million initiative will provide comprehensive maternal health services to over 1 million women across 15 countries, focusing on reducing maternal mortality through innovative care delivery models and community health worker training.
                </p>
                <Button className="gradient-bg text-primary-foreground glow-effect group">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Recent News */}
            <h2 className="text-3xl font-bold mb-8">Recent Updates</h2>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary">Research</Badge>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 10, 2024
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    New Study Shows 40% Reduction in Teen Pregnancy Rates
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our comprehensive school-based reproductive health education program demonstrates significant impact in reducing unintended pregnancies among adolescents in East Africa.
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary">Partnership</Badge>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 5, 2024
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    IGRH Partners with WHO for Global Contraceptive Access Initiative
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Strategic partnership aims to improve contraceptive access for 10 million women in low-resource settings through innovative supply chain solutions.
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary">Award</Badge>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      February 28, 2024
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    IGRH Receives Excellence Award for Innovation in Reproductive Health
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Recognition from the Global Health Council for our groundbreaking work in developing mobile health solutions for rural communities.
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary">Event</Badge>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      February 20, 2024
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Annual Global Reproductive Health Conference 2024 Announced
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Join leading experts from around the world for three days of cutting-edge research presentations and networking. Registration now open.
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button className="gradient-bg text-primary-foreground glow-effect group">
                View All News
                <Globe className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;