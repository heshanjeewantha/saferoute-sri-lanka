import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DomainSection from "@/components/DomainSection";
import MilestonesSection from "@/components/MilestonesSection";
import DocumentsSection from "@/components/DocumentsSection";
import PresentationsSection from "@/components/PresentationsSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <DomainSection />
    <MilestonesSection />
    <DocumentsSection />
    <PresentationsSection />
    <TeamSection />
    <GallerySection />
    <ContactSection />
    <Footer />
    <Toaster />
  </div>
);

export default Index;
