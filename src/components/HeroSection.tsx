import { ArrowRight, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <img
      src={heroBg}
      alt="Sri Lankan public transport"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-foreground/60" />

    {/* Floating shapes */}
    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float" />
    <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

    <div className="container relative z-10 mx-auto text-center">
      <p className="animate-fade-up mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
        University Research Project
      </p>

      <h1 className="animate-fade-up animate-fade-up-delay-1 mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
        Real-Time Safety Monitoring System for Sri Lanka's Public Transport Network
      </h1>

      <p className="animate-fade-up animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
        Enhancing Passenger Safety Through Intelligent Monitoring
      </p>

      <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#about"
          className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-lg transition-all hover:shadow-accent/30 hover:scale-105"
        >
          <BookOpen className="h-5 w-5" />
          View Research
        </a>
        <a
          href="#system"
          className="group inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20 hover:scale-105"
        >
          Explore System
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
