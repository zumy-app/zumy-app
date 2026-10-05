// Shared shell for per-app privacy policy pages.
// URL scheme: /apps/:appId/privacy  (e.g. /apps/app.zumy.cloud9.employee/privacy)
// Adding an app = one entry in registry.ts. No route changes needed.
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface PrivacyPolicyShellProps {
  appName: string;
  packageId: string;
  operator: string;
  effectiveDate: string;
  contactEmail: string;
  children: React.ReactNode;
}

const PrivacyPolicyShell = ({
  appName,
  packageId,
  operator,
  effectiveDate,
  contactEmail,
  children,
}: PrivacyPolicyShellProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy — {appName}</h1>
            <p className="text-muted-foreground">
              Effective date: {effectiveDate} • App: {appName} (Android package{" "}
              <code>{packageId}</code>) • Operator: {operator}
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            {children}

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Contact</h2>
              <p>
                {operator}
                <br />
                Email:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-primary hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const PrivacySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <h2 className="text-2xl font-bold text-foreground mb-3">{title}</h2>
    {children}
  </section>
);

export default PrivacyPolicyShell;
