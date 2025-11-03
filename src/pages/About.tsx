import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission-Driven",
      description: "We're committed to delivering technology solutions that create real business value and drive innovation.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships through trust, transparency, and results.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive edge.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">About Zumy</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pioneering digital transformation through innovative technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Who We Are</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Zumy LLC is a forward-thinking IT consulting and product development company based in Wood-Ridge, NJ, 
                dedicated to transforming businesses through technology. With expertise spanning mobile applications, 
                web platforms, and enterprise solutions, we turn complex challenges into elegant digital experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team of seasoned developers, designers, and strategists work collaboratively to deliver 
                solutions that not only meet technical requirements but exceed business expectations.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">What We Do</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We specialize in end-to-end technology consulting and product development. From initial 
                concept to final deployment, we guide our clients through every phase of their digital journey.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our portfolio includes innovative products like DreamIPTV, a cross-platform IPTV solution, 
                NRI Nest marketplace, and Chorus multilingual messaging platform - showcasing our ability 
                to build products that matter.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center card-hover">
                  <CardHeader>
                    <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-12 text-center hero-glow">
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for talented individuals and exciting partnerships. 
              Let's build something amazing together.
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

export default About;
