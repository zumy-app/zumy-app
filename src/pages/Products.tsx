import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tv, Home, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const products = [
    {
      icon: <Tv className="h-12 w-12" />,
      title: "DreamIPTV",
      status: "Live",
      description: "A feature-rich IPTV client designed for all platforms. Stream your favorite content with an intuitive interface, advanced playback controls, and cross-device synchronization.",
      features: ["Cross-platform support", "HD/4K streaming", "EPG integration", "Parental controls"],
      link: "https://dreamiptv.app",
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "NRI Nest",
      status: "In Development",
      description: "A specialized marketplace connecting the global Desi community. Buy, sell, and discover services tailored for NRIs and the diaspora community worldwide.",
      features: ["Community marketplace", "Verified sellers", "Global shipping", "Secure payments"],
      link: undefined,
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: "Chorus",
      status: "In Development",
      description: "Breaking language barriers with real-time multilingual messaging. Automatically translates messages to bridge communication gaps between people across the world.",
      features: ["Real-time translation", "100+ languages", "Group chats", "Voice messages"],
      link: undefined,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions built with passion and cutting-edge technology
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-12 flex items-center justify-center">
                    <div className="text-primary">{product.icon}</div>
                  </div>
                  <div>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-3xl">{product.title}</CardTitle>
                        <Badge variant={product.status === "Live" ? "default" : "secondary"}>
                          {product.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {product.link && (
                        <a 
                          href={product.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline font-medium"
                        >
                          Visit Website →
                        </a>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-card">
              <h3 className="text-2xl font-bold mb-2">Have a project in mind?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for new challenges and opportunities
              </p>
              <a href="/contact">
                <button className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
                  Let's Talk
                </button>
              </a>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
