import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code, Smartphone, Cloud, Database, LineChart, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to your exact specifications using cutting-edge technologies.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that users love.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud architecture and migration services for modern, distributed systems.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Enterprise Applications",
      description: "Robust enterprise-grade applications designed for performance and reliability.",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Technology Consulting",
      description: "Strategic technology guidance to help your business make informed decisions.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Comprehensive security assessments and compliance solutions for peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-12 text-center hero-glow">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help bring your vision to life
            </p>
            <a href="/contact">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
