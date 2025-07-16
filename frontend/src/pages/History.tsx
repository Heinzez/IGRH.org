import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Globe, Users } from "lucide-react";

const History = () => {
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
            <a href="/news" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">News</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Our History
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              25 years of dedication to advancing global reproductive health and transforming lives worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary glow-effect">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge className="bg-primary text-primary-foreground">1999</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Foundation</h3>
                  <p className="text-muted-foreground">
                    IGRH was founded by a group of reproductive health experts and advocates with a vision to address 
                    global reproductive health disparities through research, education, and advocacy. Initial funding 
                    came from partnerships with leading universities and international health organizations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary glow-effect">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">2003</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">First International Program</h3>
                  <p className="text-muted-foreground">
                    Launched our first international program in Kenya, focusing on maternal health and family planning 
                    services in rural communities. This program served as a model for future initiatives and established 
                    our commitment to community-based approaches.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary glow-effect">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">2008</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Research Excellence Recognition</h3>
                  <p className="text-muted-foreground">
                    Received international recognition for groundbreaking research on contraceptive access in developing 
                    countries. Published influential studies in The Lancet and New England Journal of Medicine that 
                    shaped global reproductive health policies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary glow-effect">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">2012</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Global Expansion</h3>
                  <p className="text-muted-foreground">
                    Expanded operations to 25 countries across Africa, Asia, and Latin America. Established regional 
                    offices and partnerships with local organizations to ensure culturally appropriate and sustainable 
                    program implementation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary glow-effect">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">2016</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation Initiative</h3>
                  <p className="text-muted-foreground">
                    Launched the Innovation Initiative, focusing on developing new technologies and approaches for 
                    reproductive health care delivery. Introduced mobile health solutions and telemedicine programs 
                    for remote communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary glow-effect">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">2020</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">COVID-19 Response</h3>
                  <p className="text-muted-foreground">
                    Rapidly adapted programs to address reproductive health needs during the COVID-19 pandemic. 
                    Developed emergency protocols for maternal care and expanded telemedicine services to maintain 
                    access to contraceptive counseling and services.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary glow-effect">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge className="bg-primary text-primary-foreground">2024</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">25th Anniversary Milestone</h3>
                  <p className="text-muted-foreground">
                    Celebrating 25 years of impact with operations in 50+ countries, having reached over 2 million 
                    women and families. Launching new initiatives focused on climate change impacts on reproductive 
                    health and advancing digital health solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Key Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glow-effect text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Awards & Recognition</p>
              </CardContent>
            </Card>
            <Card className="glow-effect text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Countries Served</p>
              </CardContent>
            </Card>
            <Card className="glow-effect text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">2M+</h3>
                <p className="text-muted-foreground">Lives Impacted</p>
              </CardContent>
            </Card>
            <Card className="glow-effect text-center">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">25</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;