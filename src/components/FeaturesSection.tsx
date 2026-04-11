import { FaUserShield, FaDesktop, FaSms, FaRegFileAlt, FaChartBar, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const featuresData = {
  sectionTitle: "Key Features",
  headline: "Comprehensive Safety Platform",
  items: [
    { icon: FaUserShield, title: "Driver Behavior Analysis", desc: "AI-powered detection of fatigue, distraction, and aggressive driving patterns using edge facial recognition and motion sensors." },
    { icon: FaDesktop, title: "Real-Time Dashboard", desc: "A powerful, unified web-based interface tracking live vehicle locations, real-time driver states, and dynamic safety scores." },
    { icon: FaSms, title: "Immediate Alerts", desc: "Instant multimedia notifications directly to transport authorities and fleet managers when critical safety violations occur." },
    { icon: FaRegFileAlt, title: "Incident Logging", desc: "Precision logging of all safety events, enriched with exact timestamps, GPS coordinates, vehicle telemetry, and visual evidence." },
    { icon: FaChartBar, title: "Predictive Analytics", desc: "Deep historical trend analysis providing actionable insights to pinpoint high-risk routes, recurring issues, and peak incident times." },
    { icon: FaShieldAlt, title: "Automated Safety Scoring", desc: "An objective driver safety scoring engine facilitating performance-based assessments, compliance, and targeted driver training." },
  ]
};

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-white relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] rounded-full bg-gradient-to-tr from-primary/5 to-accent/5 blur-[150px] pointer-events-none" />

    <div className="container relative z-10 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl text-center flex flex-col items-center"
      >
        <span className="mb-3 rounded-full bg-primary/10 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 shadow-sm">
          {featuresData.sectionTitle}
        </span>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl mt-4">
          {featuresData.headline}
        </h2>
        <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
      </motion.div>

      <div className="mt-20 grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {featuresData.items.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={f.title}
              className="group relative rounded-[2rem] border border-border/80 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-3 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                  <Icon className="text-3xl" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {f.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
