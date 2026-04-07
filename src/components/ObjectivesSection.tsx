import { Eye, Gauge, AlertCircle, Bell } from "lucide-react";

const objectives = [
  {
    icon: Eye,
    title: "Driver Behavior Monitoring",
    desc: "Detect drowsiness, yawning, head turns, phone usage, and seat belt compliance using MediaPipe, YOLOv8, and temporal LSTM classification.",
  },
  {
    icon: Gauge,
    title: "Context-Aware Violation Detection",
    desc: "Use segmentation, object detection, and monocular depth estimation on edge devices to identify lane departures, unsafe distance, and traffic-aware speeding.",
  },
  {
    icon: AlertCircle,
    title: "Predictive Passenger Information",
    desc: "Forecast bus arrival times and occupancy trends from GPS and ticketing data to provide commuters with practical, real-time planning insights.",
  },
  {
    icon: Bell,
    title: "Dynamic Safety Speed Intelligence",
    desc: "Estimate safe operating speed from passenger load, weather, and road conditions, then trigger immediate in-cabin warning alerts when thresholds are exceeded.",
  },
];

const ObjectivesSection = () => (
  <section id="objectives" className="section-padding bg-secondary/50">
    <div className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Research Objectives
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Core Objectives Of SafeTransit360°
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
