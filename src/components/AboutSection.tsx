import { AlertTriangle, Brain, ShieldCheck } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Reckless Driving",
    desc: "Aggressive overtaking, speeding, and ignoring traffic signals contribute to thousands of accidents annually on Sri Lankan roads.",
  },
  {
    icon: Brain,
    title: "Driver Fatigue",
    desc: "Long working hours without adequate rest lead to drowsy driving, a major undetected risk in public transport operations.",
  },
  {
    icon: ShieldCheck,
    title: "Lack of Monitoring",
    desc: "Current systems lack real-time tracking of driver behavior, making it impossible to intervene before accidents occur.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          About the Project
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Why Public Transport Safety Matters
        </h2>
        <p className="mt-4 text-muted-foreground">
          Sri Lanka's public transport network carries millions daily, yet safety monitoring remains largely manual. 
          Our research addresses this critical gap with AI-powered real-time monitoring to protect both passengers and drivers.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {challenges.map((c) => (
          <div
            key={c.title}
            className="hover-lift group rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold text-card-foreground">
              {c.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
