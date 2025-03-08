
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";
import CommunityStatsSection from "@/components/sections/CommunitySectionSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import AlumniProfileSection from "@/components/sections/AlumniProfileSection";
import CallToActionSection from "@/components/sections/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <WhyJoinSection />
        <CommunityStatsSection />
        <TestimonialSection />
        <AlumniProfileSection />
        <CallToActionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
