import { FaArrowRight, FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const heroContent = {
  title: "Real-Time Safety\nMonitoring System",
  subtitle: "Trusted by transport operators, safety managers, and public commuters world-wide",
  buttons: [
    { label: "CONTACT SALES", link: "#contact", primary: true },
    // { label: "DOWNLOAD BROCHURE", link: "#brochure", primary: false }
  ],
  // widget: {
  //   title: "WATCH VIDEO",
  //   subtitle: "How it works",
  //   icon: FaVideo
  // }
};

const HeroSection = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center justify-start overflow-hidden bg-white"
  >
    {/* Global full-bleed image container */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-full w-full overflow-hidden"
      >
        <img
          src={heroBg}
          alt="Sri Lankan public transport"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Soft light gradient matching the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
        <div className="absolute inset-0 bg-white/30" /> {/* Extra lightening for text */}
      </motion.div>
    </div>

    <div className="container relative z-10 mx-auto px-6 lg:px-16 pt-32 pb-24 text-left">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl font-display text-[4rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#111] sm:text-[5rem] md:text-[6rem] lg:text-[6.5rem]"
      >
        {heroContent.title.split('\n').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 max-w-lg text-[17px] text-gray-700 font-medium leading-[1.7]"
      >
        {heroContent.subtitle}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 flex flex-col sm:flex-row items-center gap-4 border-t border-gray-200/50 pt-10 w-fit pr-10"
      >
        {heroContent.buttons.map((btn, idx) => (
          <a
            key={idx}
            href={btn.link}
            className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-all hover:scale-105 w-full sm:w-auto ${
              btn.primary
                ? "bg-[#ff4b12] text-white shadow-xl shadow-primary/20 hover:bg-[#e04310]"
                : "bg-white/80 text-[#111] border border-gray-200 hover:bg-gray-50 shadow-sm"
            }`}
          >
            {btn.label}
          </a>
        ))}
      </motion.div>
    </div>

    {/* Bottom Right Widget like the screenshot */}
    {/* <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 right-8 hidden lg:flex items-center justify-between gap-6 rounded-full bg-white/90 p-3 pr-8 backdrop-blur-2xl border border-gray-200/50 shadow-xl cursor-pointer hover:bg-white transition-all hover:scale-105 group"
      >
        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#ff4b12] text-white shadow-lg group-hover:scale-110 transition-transform">
           <heroContent.widget.icon className="h-6 w-6 text-white ml-1" />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="font-display text-[13px] font-extrabold text-[#111] tracking-[0.05em] uppercase">{heroContent.widget.title}</h4>
          <p className="text-[12px] font-medium text-gray-600">{heroContent.widget.subtitle}</p>
        </div>
    </motion.div> */}
  </section>
);

export default HeroSection;
