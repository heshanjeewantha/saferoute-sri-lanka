import { useState } from "react";
import { FaExclamationTriangle, FaBrain, FaShieldAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const aboutData = {
  sectionTitle: "SOLUTIONS",
  headline: "I Want To:",
  cards: [
    {
      id: "01",
      icon: FaExclamationTriangle,
      title: "Identify Systemic Safety Gaps",
      desc: "Our framework overcomes Sri Lanka's reliance on manual supervision and post-incident CCTV review. Identify real-time gaps and prevent issues before they escalate.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "02",
      icon: FaBrain,
      title: "Transition from Reactive to Predictive",
      desc: "SafeTransit360° replaces isolated monitoring with AI-powered intelligence. Predict risk accurately and trigger immediate interactive alerts to keep passengers safe.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "03",
      icon: FaShieldAlt,
      title: "Integrate IoT & Edge AI",
      desc: "Seamlessly fuse driver monitoring, road-rule violation analysis, predictive bus tracking, and safety-speed estimation into one highly scalable hardware architecture.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
    },
  ]
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(aboutData.cards[0]);

  return (
    <section id="about" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left narrow column */}
          <div className="w-full lg:w-48 shrink-0">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff4b12]">
              {aboutData.sectionTitle}
            </span>
          </div>

          {/* Right wide column */}
          <div className="flex-1 w-full relative">
            <h2 className="font-display text-[2.5rem] font-bold tracking-tight text-[#111] md:text-[3.5rem] lg:text-[4rem] leading-[1.1]">
              {aboutData.headline}
            </h2>

            {/* Horizontal Tabs */}
            <div className="mt-16 flex flex-wrap gap-8 border-b border-gray-200 pb-6">
              {aboutData.cards.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c)}
                  className={`text-[12px] font-bold tracking-[0.1em] uppercase transition-all ${
                    activeTab.id === c.id 
                    ? "text-[#111] flex items-center gap-3 drop-shadow-md" 
                    : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {activeTab.id === c.id && <span className="text-[#ff4b12] text-[18px] leading-[0]">•</span>}
                  {c.title}
                </button>
              ))}
            </div>

            {/* Content Layout */}
            <div className="mt-16 flex flex-col md:flex-row items-center relative gap-8 lg:gap-0 lg:pl-16">
              
              {/* Number indicator */}
              <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 text-[12px] font-extrabold tracking-[0.2em] text-gray-300 select-none">
                {activeTab.id}
              </span>

              {/* Image side */}
              <div className="w-full md:w-[45%] h-[350px] sm:h-[450px] shrink-0 rounded-[3rem] overflow-hidden bg-white z-0 relative shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    src={activeTab.image}
                    className="absolute inset-0 w-full h-full object-cover "
                    alt={activeTab.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                </AnimatePresence>
              </div>

              {/* Dark Glass Card Overlapping */}
              <div className="w-full md:w-[65%] lg:-ml-24 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-white/90 backdrop-blur-2xl rounded-[3rem] p-10 sm:p-14 shadow-2xl border border-gray-200"
                  >
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#111] mb-6 leading-tight">
                      {activeTab.title}
                    </h3>
                    <p className="text-[15px] leading-[1.8] text-gray-600 font-medium max-w-lg mb-10">
                      {activeTab.desc}
                    </p>
                    <a href="#" className="text-[#ff4b12] text-[11px] font-bold uppercase tracking-[0.15em] hover:text-[#111] transition-colors flex items-center gap-2 group w-fit">
                      Learn More <span className="text-lg group-hover:translate-x-2 transition-transform">&rarr;</span>
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Bottom pagination */}
            <div className="mt-16 border-t border-gray-200 pt-8 flex justify-between items-center w-full max-w-[120px]">
              <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#111]">
                {activeTab.id}<span className="text-gray-300">/03</span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
