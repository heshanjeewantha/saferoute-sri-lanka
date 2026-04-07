import { Camera, MapPin, Activity, Server, Monitor, Cpu } from "lucide-react";
import systemArch from "@/assets/system-architecture.jpg";

const components = [
  { icon: Camera, label: "Camera Module", desc: "Captures driver facial data" },
  { icon: MapPin, label: "GPS Tracker", desc: "Real-time location & speed" },
  { icon: Activity, label: "Accelerometer", desc: "Motion & braking patterns" },
  { icon: Cpu, label: "Edge Processor", desc: "On-board AI inference" },
  { icon: Server, label: "Cloud Server", desc: "Data storage & analytics" },
  { icon: Monitor, label: "Dashboard", desc: "Web-based monitoring UI" },
];

const SystemDesignSection = () => (
  <section id="system" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          System Design
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Architecture & Methodology
        </h2>
        <p className="mt-4 text-muted-foreground">
          Our system uses a layered IoT architecture combining edge computing with cloud analytics,
          powered by CNN and LSTM models for driver behavior classification.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        <img
          src={systemArch}
          alt="System architecture diagram"
          className="w-full object-contain"
          loading="lazy"
          width={1280}
          height={720}
        />
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((c) => (
          <div
            key={c.label}
            className="hover-lift flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
              <c.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-card-foreground">
                {c.label}
              </h4>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemDesignSection;
