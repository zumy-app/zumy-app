import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">TechVista</h3>
            <p className="text-muted-foreground text-sm">
              Transforming ideas into powerful digital solutions. Expert consulting and product development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground text-sm">DreamIPTV</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">NRI Nest</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Chorus</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <Link to="/contact" className="block mt-4">
              <span className="text-sm text-primary hover:underline">Get in Touch →</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} TechVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
