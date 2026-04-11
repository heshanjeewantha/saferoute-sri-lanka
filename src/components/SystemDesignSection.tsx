import { FaVideo, FaMapMarkerAlt, FaHeartbeat, FaServer, FaChartArea, FaMicrochip } from "react-icons/fa";
import { motion } from "framer-motion";
import systemArch from "@/assets/system-architecture.jpg";

const systemData = {
  sectionTitle: "System Design",
  headline: "Architecture & Methodology",
  description: "Our system utilizes an advanced, multi-layered IoT framework that seamlessly combines edge computing with cutting-edge cloud analytics, powered by CNN and temporal LSTM models for exact driver behavior classification.",
  components: [
    { icon: FaVideo, label: "Camera Module", desc: "Captures high-res driver facial data" },
    { icon: FaMapMarkerAlt, label: "GPS Tracker", desc: "Pinpoints real-time location & speed" },
    { icon: FaHeartbeat, label: "Accelerometer", desc: "Detects sudden motion & braking patterns" },
    { icon: FaMicrochip, label: "Edge Processor", desc: "Executes blazing-fast on-board AI inference" },
    { icon: FaServer, label: "Cloud Server", desc: "Synchronizes data storage & heavy analytics" },
    { icon: FaChartArea, label: "Dashboard", desc: "Visualizes trends via a dynamic web UI" },
  ]
};

const SystemDesignSection = () => (
  <section id="system" className="section-padding bg-white relative overflow-hidden">
    <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    <div className="container relative z-10 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center flex flex-col items-center"
      >
        <span className="mb-3 rounded-full bg-accent/10 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-accent border border-accent/20 shadow-sm">
          {systemData.sectionTitle}
        </span>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl mt-4">
          {systemData.headline}
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {systemData.description}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white shadow-2xl shadow-primary/5 relative group"
      >
        {/* Subtle overlay effect on hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <img
          src={systemArch}
          alt="System architecture diagram"
          className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
          width={1280}
          height={720}
        />
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {systemData.components.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={c.label}
              className="group hover-lift flex items-start gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:border-primary/30"
            >
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-accent group-hover:text-white shadow-inner group-hover:rotate-12 group-hover:scale-110">
                <Icon className="text-2xl" />
              </div>
              <div className="flex-1 flex flex-col justify-center align-middle pt-1">
                <h4 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {c.label}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-snug">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SystemDesignSection;
