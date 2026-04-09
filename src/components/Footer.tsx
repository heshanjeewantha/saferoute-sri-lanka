import { FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const footerData = {
  brand: "SafeTransit",
  description: "A university research project elegantly engineered to enhance public transport safety in Sri Lanka through AI-driven, real-time edge monitoring.",
  year: new Date().getFullYear(),
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Objectives", href: "#objectives" },
    { label: "System", href: "#system" },
    { label: "Features", href: "#features" },
    { label: "Team", href: "#team" },
  ]
};

const Footer = () => (
  <footer className="border-t border-gray-200 bg-white pt-16 pb-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 items-center justify-items-center md:justify-items-start text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
              <FaShieldAlt className="h-6 w-6 text-white" />
            </div>
            <span className="font-display text-3xl font-black text-foreground tracking-tight">
              {footerData.brand}
            </span>
          </div>
          <p className="max-w-md text-base text-muted-foreground leading-relaxed">
            {footerData.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:justify-self-end flex flex-col"
        >
          <h4 className="font-display text-lg font-bold text-foreground mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4">
            {footerData.links.slice(0, 3).map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:justify-self-end flex flex-col"
        >
          <h4 className="font-display text-lg font-bold text-foreground mb-6 uppercase tracking-wider opacity-0 hidden md:block">More Links</h4>
          <ul className="space-y-4">
            {footerData.links.slice(3).map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p className="text-sm font-medium text-muted-foreground text-center md:text-left">
          © {footerData.year} SafeTransit Research Team. All rights reserved.
        </p>
        <p className="text-sm font-medium text-muted-foreground text-center md:text-right">
          Designed with precision & passion.
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
