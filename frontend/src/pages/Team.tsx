import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, Linkedin } from "lucide-react";

const Team = () => {
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
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Meet the dedicated experts driving innovation in global reproductive health.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Sarah Chen</h3>
                <p className="text-primary font-semibold mb-2">Executive Director</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Leading global reproductive health initiatives for over 20 years with expertise in maternal health and policy development.
                </p>
                <div className="flex space-x-2 mb-3">
                  <Badge variant="secondary">MD, PhD</Badge>
                  <Badge variant="secondary">Public Health</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                </div>
              </CardContent>
            </Card>

            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Michael Rodriguez</h3>
                <p className="text-primary font-semibold mb-2">Research Director</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Renowned researcher in contraceptive innovation and family planning with 150+ published papers.
                </p>
                <div className="flex space-x-2 mb-3">
                  <Badge variant="secondary">PhD</Badge>
                  <Badge variant="secondary">Biomedical Engineering</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                </div>
              </CardContent>
            </Card>

            <Card className="glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Aisha Patel</h3>
                <p className="text-primary font-semibold mb-2">Global Programs Director</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Expert in implementing large-scale health programs across Africa and Asia with focus on community engagement.
                </p>
                <div className="flex space-x-2 mb-3">
                  <Badge variant="secondary">MPH</Badge>
                  <Badge variant="secondary">Global Health</Badge>
                </div>
                <div className="flex justify-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glow-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Research & Development</h3>
                <p className="text-muted-foreground mb-4">
                  35 researchers conducting cutting-edge studies in reproductive health, contraceptive technology, and maternal care.
                </p>
                <Badge variant="secondary">35 Team Members</Badge>
              </CardContent>
            </Card>

            <Card className="glow-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Global Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Program managers and field coordinators implementing health initiatives across 50+ countries worldwide.
                </p>
                <Badge variant="secondary">42 Team Members</Badge>
              </CardContent>
            </Card>

            <Card className="glow-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Education & Training</h3>
                <p className="text-muted-foreground mb-4">
                  Educational specialists developing innovative training programs for healthcare providers and communities.
                </p>
                <Badge variant="secondary">28 Team Members</Badge>
              </CardContent>
            </Card>

            <Card className="glow-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Policy & Advocacy</h3>
                <p className="text-muted-foreground mb-4">
                  Policy experts and advocates working to influence reproductive health policies at all levels of government.
                </p>
                <Badge variant="secondary">15 Team Members</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for passionate individuals who share our commitment to advancing global reproductive health.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glow-effect">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Current Openings</h3>
                  <p className="text-2xl font-bold text-primary">12</p>
                </CardContent>
              </Card>
              <Card className="glow-effect">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Global Offices</h3>
                  <p className="text-2xl font-bold text-primary">8</p>
                </CardContent>
              </Card>
              <Card className="glow-effect">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Team Members</h3>
                  <p className="text-2xl font-bold text-primary">120+</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;