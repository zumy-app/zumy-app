import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { appPrivacyRegistry, privacyUrlFor } from "./registry";

const AppsIndex = () => (
  <div className="min-h-screen">
    <Navigation />

    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Apps</h1>
          <p className="text-xl text-muted-foreground">
            Privacy policies for every Zumy app, in one place.
          </p>
        </div>

        <div className="space-y-4">
          {appPrivacyRegistry.map((app) => (
            <Link
              key={app.appId}
              to={privacyUrlFor(app.appId)}
              className="block rounded-lg border bg-card p-6 shadow-sm hover:border-primary transition-colors"
            >
              <h2 className="text-2xl font-semibold">{app.name}</h2>
              <p className="text-muted-foreground mt-1">{app.tagline}</p>
              <p className="text-sm text-primary mt-2">Privacy Policy →</p>
            </Link>
          ))}
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default AppsIndex;
