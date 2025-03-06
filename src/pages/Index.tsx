
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, GraduationCap, Users, Calendar, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Join Our Alumni Network?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Connect with Alumni"
                description="Build meaningful relationships with graduates across different batches and disciplines."
              />
              <FeatureCard 
                icon={<GraduationCap className="h-10 w-10 text-primary" />}
                title="Mentorship Opportunities"
                description="Guide current students or get mentored by industry experts from our alumni base."
              />
              <FeatureCard 
                icon={<Calendar className="h-10 w-10 text-primary" />}
                title="Exclusive Events"
                description="Participate in alumni-exclusive workshops, reunions, and networking sessions."
              />
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/register">
                <Button className="gap-2">
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-gmit-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Growing Community</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StatCard 
                icon={<Users className="h-10 w-10 text-primary" />}
                value={5000}
                label="Alumni Members"
                suffix="+"
              />
              <StatCard 
                icon={<GraduationCap className="h-10 w-10 text-primary" />}
                value={50}
                label="Countries Represented"
                suffix="+"
              />
              <StatCard 
                icon={<Trophy className="h-10 w-10 text-primary" />}
                value={200}
                label="Events Per Year"
                suffix="+"
              />
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Become an official member of the Gargi Memorial Institute of Technology Alumni Network and unlock a lifetime of connections and opportunities.
            </p>
            <Link to="/register">
              <Button size="lg" className="gap-2">
                Register as Alumni
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
