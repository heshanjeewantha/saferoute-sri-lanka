import { UserCheck, MonitorSmartphone, MessageSquare, FileText, BarChart3, Shield } from "lucide-react";

const features = [
  { icon: UserCheck, title: "Driver Behavior Analysis", desc: "AI-powered detection of fatigue, distraction, and aggressive driving patterns using facial recognition and motion sensors." },
  { icon: MonitorSmartphone, title: "Real-Time Dashboard", desc: "Web-based monitoring interface showing live vehicle locations, driver status, and safety scores across the entire fleet." },
  { icon: MessageSquare, title: "SMS/Mobile Alerts", desc: "Instant notifications to transport authorities and fleet managers when safety violations are detected." },
  { icon: FileText, title: "Incident Logging", desc: "Comprehensive logging of all safety events with timestamps, GPS coordinates, and severity classification." },
  { icon: BarChart3, title: "Data Analytics", desc: "Historical trend analysis and predictive insights to identify high-risk routes, drivers, and time periods." },
  { icon: Shield, title: "Safety Scoring", desc: "Automated driver safety scoring system enabling performance-based assessments and targeted training." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Key Features
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Comprehensive Safety Platform
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="hover-lift group rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-3 text-primary transition-all group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
