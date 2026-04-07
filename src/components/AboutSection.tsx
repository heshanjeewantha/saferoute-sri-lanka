import { AlertTriangle, Brain, ShieldCheck } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Systemic Safety Gaps",
    desc: "Sri Lanka's bus network still relies on manual supervision and post-incident CCTV review, which limits real-time intervention for passenger and driver safety.",
  },
  {
    icon: Brain,
    title: "Reactive To Predictive",
    desc: "SafeTransit360° replaces isolated monitoring with AI-powered, context-aware intelligence that predicts risk and triggers immediate alerts before incidents escalate.",
  },
  {
    icon: ShieldCheck,
    title: "Integrated IoT + Edge AI",
    desc: "The framework combines driver monitoring, road-rule violation analysis, predictive bus tracking, and safety-speed estimation into one practical architecture for Sri Lankan public transport.",
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
          Safety Monitoring System For Public Transport Buses In Sri Lanka
        </h2>
        <p className="mt-4 text-muted-foreground">
          SafeTransit360° is an IoT-enabled research framework designed to improve safety, reliability, and commuter confidence.
          It unifies edge-based computer vision, predictive analytics, and real-time alerts to support both bus operators and passengers.
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
