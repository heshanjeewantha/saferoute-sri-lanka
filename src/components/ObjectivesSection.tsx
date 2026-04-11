import { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import systemArch from "@/assets/system-architecture.jpg"; // Re-using as placeholder image instead of engine

const casesData = {
  sectionTitle: "CASE STUDIES",
  headline: "Research Integration Flow",
  description: "Unlock the future of public transportation development with SafeTransit360°, representing an all-access pass to integrated IoT and Edge AI models.",
  cases: [
    {
      id: "01",
      title: "Driver Behavior Monitoring Module",
      content: "Combining Edge devices with Convolutional Neural Networks (CNNs) to precisely detect driver drowsiness, yawning, head turns, phone usage, and seat belt compliance in real-time. As part of its commitment to safety and innovation, SafeTransit enables preemptive correction algorithms within public transport.",
      image: "https://images.unsplash.com/photo-1616010078864-deddfc9b8f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "02",
      title: "Geospatial Safety Analytics Dashboard",
      content: "A unified system mapping exact incident locations via GPS telemetry overlay. Uses temporal-spatial bounding blocks allowing monitoring supervisors to replay any vehicle incident safely and intuitively rather than sifting through unoptimized raw footage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    }
  ],
  footerTags: ["Enhanced Engagement", "Improved Safety Awareness", "Operational Efficiency"]
};

const ObjectivesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev === casesData.cases.length - 1 ? 0 : prev + 1));
  };
  const prevCase = () => {
    setCurrentIndex((prev) => (prev === 0 ? casesData.cases.length - 1 : prev - 1));
  };

  const activeCase = casesData.cases[currentIndex];

  return (
    <section id="objectives" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Title Column */}
          <div className="w-full lg:w-48 shrink-0">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff4b12]">
              {casesData.sectionTitle}
            </span>
          </div>

          {/* Right Wide Column */}
          <div className="flex-1 w-full relative">
            <h2 className="font-display text-[2.5rem] md:text-5xl lg:text-[4rem] font-bold tracking-tight text-[#111] leading-[1.05]">
              {casesData.headline}
            </h2>
            <p className="mt-6 text-[17px] font-medium leading-[1.8] text-[#111]/50 max-w-xl">
              {casesData.description}
            </p>

            {/* Giant Gray Container Wrapper -> Dark Container */}
            <div className="mt-16 bg-white border border-gray-200/50 rounded-[3.5rem] p-4 lg:p-6 overflow-hidden relative shadow-2xl">
              
              {/* Dynamic decorative BG vectors could go here */}

              {/* Inner Layout Header */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center sm:bg-white rounded-full sm:pl-8 sm:pr-3 py-3 border border-gray-200/50 shadow-2xl">
                <span className="font-display font-bold text-lg text-[#111] hidden sm:block">IoT Sensor Fusion</span>
                <div className="flex bg-white sm:bg-transparent rounded-full p-3 sm:p-0 items-center gap-6 w-full sm:w-auto shadow-sm sm:shadow-none">
                  <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#111]">
                    {activeCase.id}<span className="text-[#111]/30">/0{casesData.cases.length}</span>
                  </span>
                  <div className="flex items-center gap-2 bg-white rounded-full p-2 border border-gray-200/50">
                    <button onClick={prevCase} className="p-3 bg-white text-[#111] rounded-full shadow-lg hover:scale-105 transition-transform"><FaArrowLeft size={10} /></button>
                    <button onClick={nextCase} className="p-3 bg-white text-[#111] rounded-full shadow-lg hover:scale-105 transition-transform"><FaArrowRight size={10} /></button>
                  </div>
                </div>
              </div>

              {/* Main Interactive Carousel Area */}
              <div className="py-8 sm:py-16 lg:py-24 px-4 sm:px-8 relative flex flex-col xl:flex-row gap-8 lg:gap-12 items-stretch min-h-[500px]">
                
                {/* Left Floating Play Button Overlay (Decorative line) */}
                <div className="hidden xl:flex items-center justify-center relative w-32 shrink-0">
                   <div className="h-32 w-32 absolute border border-[#ff4b12]/30 rounded-full clip-left shrink-0"></div>
                   <button className="h-16 w-16 bg-[#ff4b12] rounded-full flex items-center justify-center text-[#111] shadow-[0_0_0_8px_rgba(255,75,18,0.2)] hover:scale-110 transition-transform z-10 shrink-0">
                      <FaPlay size={14} className="ml-1" />
                   </button>
                </div>

                {/* Left Card (Content) */}
                <div className="flex-1 relative z-10 w-full flex flex-col justify-center sm:px-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCase.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white border border-gray-200/50 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl h-auto flex flex-col"
                    >
                      <span className="text-[12px] font-extrabold text-[#ff4b12] mb-6 tracking-[0.2em]">{activeCase.id}</span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111] mb-6 leading-snug">
                        {activeCase.title}
                      </h3>
                      <p className="text-[15px] leading-[1.8] font-medium text-[#111]/50">
                        {activeCase.content}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Card (Image) */}
                <div className="flex-1 relative z-10 min-h-[350px] sm:min-h-[450px]">
                  {/* Floating Action Button */}
                  <div className="absolute -top-6 -left-6 z-20 hidden md:flex items-center justify-center h-24 w-24 rounded-full bg-white text-[#111] text-[9px] font-black tracking-widest uppercase hover:scale-110 hover:-rotate-12 transition-transform cursor-pointer overflow-hidden text-center shadow-2xl leading-tight px-4 ring-8 ring-[#1a1a1a]">
                    OPEN CASE
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCase.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full bg-white rounded-[2.5rem] p-3 sm:p-5 shadow-2xl border border-gray-200/50 relative overflow-hidden flex items-center justify-center group"
                    >
                      <span className="absolute top-8 right-8 text-[11px] font-extrabold text-[#111] tracking-widest z-20 bg-black/50 backdrop-blur-md border border-gray-200/50 px-3 py-1 rounded-full">{activeCase.id}</span>
                      <img src={activeCase.image} alt={activeCase.title} className="w-full h-full object-cover rounded-[2rem] transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 mix-blend-screen" />
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

              {/* Bottom Footer Tags Area */}
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center bg-white border border-gray-200/50 rounded-full p-2 pl-8 gap-4 shadow-2xl w-full">
                <div className="flex flex-wrap items-center gap-4 text-[11px] font-extrabold tracking-wide text-[#111]/50">
                  {casesData.footerTags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span>{tag}</span>
                      {i !== casesData.footerTags.length - 1 && <span className="text-[#ff4b12] text-[16px] leading-[0]">•</span>}
                    </div>
                  ))}
                </div>
                <button className="bg-[#ff4b12] hover:bg-[#e04310] text-[#111] rounded-full px-8 py-4 w-full sm:w-auto flex justify-between items-center gap-12 group transition-colors shadow-lg shadow-primary/30">
                  <span className="text-[12px] font-extrabold uppercase tracking-[0.2em]">ALL CASES</span>
                  <div className="overflow-hidden relative h-4 w-4">
                     <FaArrowRight className="absolute text-sm transform -translate-x-full group-hover:translate-x-0 transition-transform" />
                     <FaArrowRight className="absolute text-sm transform translate-x-0 group-hover:translate-x-full transition-transform" />
                  </div>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
