import { Eye, Gauge, AlertCircle, Bell } from "lucide-react";

const objectives = [
  { icon: Eye, title: "Detect Driver Fatigue", desc: "Using computer vision and facial landmark detection to identify drowsiness and microsleep events in real-time." },
  { icon: Gauge, title: "Monitor Overspeeding", desc: "GPS-based speed tracking with geofenced speed limits for different road zones across the network." },
  { icon: AlertCircle, title: "Identify Unsafe Driving", desc: "Accelerometer data analysis to detect harsh braking, sudden acceleration, and dangerous cornering patterns." },
  { icon: Bell, title: "Real-Time Alerts", desc: "Instant SMS and push notifications to transport authorities when safety thresholds are breached." },
];

const ObjectivesSection = () => (
  <section id="objectives" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Research Objectives
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          What We Aim to Achieve
        </h2>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {objectives.map((o, i) => (
          <div
            key={o.title}
            className="hover-lift relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <span className="absolute right-4 top-4 font-display text-5xl font-bold text-primary/10">
              0{i + 1}
            </span>
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
              <o.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
              {o.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {o.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectivesSection;
