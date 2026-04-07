import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import SystemDesignSection from "@/components/SystemDesignSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResultsSection from "@/components/ResultsSection";
import PublicationsSection from "@/components/PublicationsSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ObjectivesSection />
    <SystemDesignSection />
    <FeaturesSection />
    <ResultsSection />
    <PublicationsSection />
    <TeamSection />
    <GallerySection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
