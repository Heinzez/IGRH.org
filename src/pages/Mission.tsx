import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Globe, Users } from "lucide-react";

const Mission = () => {
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
              Our Mission
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Defining our purpose and commitment to advancing global reproductive health.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glow-effect border-l-4 border-l-primary">
              <CardContent className="p-8">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-center mb-6">Mission Statement</h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  To advance global reproductive health through cutting-edge research, innovative education programs, 
                  and evidence-based policy advocacy that creates lasting change in communities worldwide. We are 
                  committed to ensuring that every person has access to comprehensive reproductive healthcare, 
                  enabling them to make informed decisions about their reproductive lives and achieve optimal health outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Human Rights Focus</h3>
                <p className="text-muted-foreground">
                  We believe reproductive health is a fundamental human right that should be accessible to all, 
                  regardless of geography, economic status, or social circumstances.
                </p>
              </CardContent>
            </Card>
            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Global Impact</h3>
                <p className="text-muted-foreground">
                  Our work spans continents and cultures, addressing diverse reproductive health challenges 
                  while respecting local contexts and community needs.
                </p>
              </CardContent>
            </Card>
            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Community Partnership</h3>
                <p className="text-muted-foreground">
                  We work hand-in-hand with local communities, healthcare providers, and governments 
                  to develop sustainable, culturally appropriate solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Strategic Goals</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Research Excellence</h3>
                <p className="text-muted-foreground">
                  Conduct world-class research that generates evidence to inform policy and practice, 
                  addressing the most pressing reproductive health challenges globally.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Capacity Building</h3>
                <p className="text-muted-foreground">
                  Strengthen healthcare systems and train the next generation of reproductive health 
                  professionals through innovative education and training programs.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Policy Influence</h3>
                <p className="text-muted-foreground">
                  Advocate for evidence-based policies at local, national, and international levels 
                  that improve reproductive health outcomes and protect reproductive rights.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Develop and test innovative approaches, technologies, and interventions that can 
                  transform reproductive health care delivery, particularly in resource-limited settings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;