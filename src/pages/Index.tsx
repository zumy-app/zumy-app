import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Smartphone, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Development",
      description: "Tailored solutions built with cutting-edge technologies to meet your unique needs.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile First",
      description: "Beautiful, performant applications that work seamlessly across all devices.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Delivery",
      description: "Agile methodologies ensure fast turnaround without compromising quality.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Seasoned professionals with deep expertise across the technology stack.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Build the Future with
              <span className="block gradient-text">TechVista Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Expert technology consulting and innovative product development 
              that transforms your vision into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-bg text-lg px-8 hero-glow">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TechVista?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical excellence with creative innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-2">
                <CardHeader>
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions that are changing how people connect and consume content
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">DreamIPTV</CardTitle>
                <CardDescription>Feature-rich IPTV client for all platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stream with confidence using our cross-platform IPTV solution with advanced features.
                </p>
                <Link to="/products">
                  <Button variant="link" className="px-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">NRI Nest</CardTitle>
                <CardDescription>Marketplace for the Desi community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connecting the global Desi diaspora through a specialized marketplace platform.
                </p>
                <Link to="/products">
                  <Button variant="link" className="px-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Chorus</CardTitle>
                <CardDescription>Multilingual messaging without barriers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Real-time translation that bridges communication gaps across languages and cultures.
                </p>
                <Link to="/products">
                  <Button variant="link" className="px-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="gradient-bg text-white border-0 hero-glow">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your project and explore how we can help you achieve your goals
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
