
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import AlumniProfileCard from "@/components/AlumniProfileCard";
import { ArrowRight, GraduationCap, Users, Calendar, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
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
        
        {/* Student Testimonials Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gray-800">STUDENT </span>
                <span className="text-primary">TESTIMONIAL</span>
              </h2>
            </div>
            
            <div className="relative">
              <div className="flex gap-6 overflow-hidden">
                <TestimonialCard 
                  image="/placeholder.svg"
                  name="Dipankar Basera"
                  batch="CSE, Batch 2019"
                  className="min-w-[300px] md:min-w-[350px]"
                />
                <TestimonialCard 
                  image="/placeholder.svg"
                  name="Anowar Hussain"
                  batch="ECE, Batch 2020"
                  className="min-w-[300px] md:min-w-[350px]"
                />
                <TestimonialCard 
                  image="/placeholder.svg"
                  name="Anjali Kumari"
                  batch="CSE, Batch 2019"
                  className="min-w-[300px] md:min-w-[350px]"
                />
                <TestimonialCard 
                  image="/placeholder.svg"
                  name="Rajesh Dey"
                  batch="ME, Batch 2021"
                  className="min-w-[300px] md:min-w-[350px]"
                />
              </div>
              
              <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors z-10">
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              
              <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors z-10">
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>
          </div>
        </section>
        
        {/* Our Alumni, Our Pride Section */}
        <section className="py-16 px-4 bg-gmit-50">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-primary">OUR ALUMNI</span>
                <span className="text-gray-800">, OUR PRIDE</span>
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Wherever our students go, they carry the rich legacy and heritage of GMIT inside them. 
                Our 3000+ Strong Alumni are making their mark in all sectors and making us proud for 
                choosing us to be a part of their journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AlumniProfileCard 
                image="/placeholder.svg"
                name="ANUPAM BANERJEE"
                department="Computer Sc. & Engg"
                batch="2017"
                company="TCS"
                position="Software Engineer"
                description="India's top IT Services, Consulting and Business Solutions Company with Global presence."
              />
              <AlumniProfileCard 
                image="/placeholder.svg"
                name="GOURAV SAHA"
                department="Computer Sc. & Engg"
                batch="2019"
                company="TCS"
                position="Systems Engineer"
                description="India's top IT Services, Consulting and Business Solutions Company with Global presence."
              />
              <AlumniProfileCard 
                image="/placeholder.svg"
                name="SOURAV GHOSHAL"
                department="Computer Sc. & Engg"
                batch="2015"
                company="Wipro"
                position="Technical Lead"
                description="India's Big name in IT Services world over."
              />
              <AlumniProfileCard 
                image="/placeholder.svg"
                name="AMRENDRA SAHNI"
                department="Electronics & Comm. Engg"
                batch="2018"
                company="UNILEVER"
                position="Process Engineer"
                description="India's top FMCG Company, a part of MNC Lever Brothers."
              />
              <AlumniProfileCard 
                image="/placeholder.svg"
                name="KAZI ABDUL SAHID"
                department="Mechanical Engg"
                batch="2017"
                company="INDIAN RAILWAYS"
                position="Mechanical Engineer"
                description="Indian Railways, nation's Biggest mass transit provider."
              />
              <AlumniProfileCard 
                image="/placeholder.svg"
                name="ARINDAM MONDAL"
                department="Mechanical Engg"
                batch="2017"
                company="INDIAN RAILWAYS"
                position="Junior Engineer"
                description="Indian Railways, nation's Biggest mass transit provider."
              />
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" className="gap-2">
                Load More
                <ArrowRight className="h-4 w-4" />
              </Button>
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
