import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message received!",
      description: "We'll get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "hello@techvista.com",
      link: "mailto:hello@techvista.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      details: "San Francisco, CA",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your vision to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center card-hover">
                <CardHeader>
                  <div className="text-primary mb-4 flex justify-center">{info.icon}</div>
                  <CardTitle>{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={info.link} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.details}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project inquiry" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    rows={6}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full gradient-bg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
