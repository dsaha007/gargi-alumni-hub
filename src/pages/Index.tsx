import { useState, useRef, useEffect } from "react";
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
import { motion } from "framer-motion";

const Index = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      image: "/placeholder.svg",
      name: "Dipankar Basera",
      batch: "CSE, Batch 2019",
      quote: "GMIT provided me with not just education but a foundation for my career in technology."
    },
    {
      image: "/placeholder.svg",
      name: "Anowar Hussain",
      batch: "ECE, Batch 2020",
      quote: "The practical approach to learning at GMIT has been invaluable in my professional journey."
    },
    {
      image: "/placeholder.svg",
      name: "Anjali Kumari",
      batch: "CSE, Batch 2019",
      quote: "Being part of the GMIT alumni network has opened doors to amazing career opportunities."
    },
    {
      image: "/placeholder.svg",
      name: "Rajesh Dey",
      batch: "ME, Batch 2021",
      quote: "The mentorship I received at GMIT continues to guide me in my professional life."
    }
  ];

  const navigateTestimonial = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setActiveTestimonialIndex((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    } else {
      setActiveTestimonialIndex((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    if (testimonialRef.current) {
      const scrollAmount = activeTestimonialIndex * 
        (testimonialRef.current.scrollWidth / testimonials.length);
      testimonialRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeTestimonialIndex, testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      navigateTestimonial('next');
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeTestimonialIndex]);

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
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gray-800">STUDENT </span>
                <span className="text-primary">TESTIMONIAL</span>
              </h2>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div 
                ref={testimonialRef}
                className="flex gap-6 overflow-hidden"
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={index}
                    image={testimonial.image}
                    name={testimonial.name}
                    batch={testimonial.batch}
                    quote={testimonial.quote}
                    className="min-w-[300px] md:min-w-[350px] flex-shrink-0"
                  />
                ))}
              </div>
              
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                onClick={() => navigateTestimonial('prev')}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                onClick={() => navigateTestimonial('next')}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
              
              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonialIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === activeTestimonialIndex 
                        ? "bg-primary w-4" 
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AlumniProfileCard 
                  image="/placeholder.svg"
                  name="ANUPAM BANERJEE"
                  department="Computer Sc. & Engg"
                  batch="2017"
                  company="TCS"
                  position="Software Engineer"
                  description="India's top IT Services, Consulting and Business Solutions Company with Global presence."
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AlumniProfileCard 
                  image="/placeholder.svg"
                  name="GOURAV SAHA"
                  department="Computer Sc. & Engg"
                  batch="2019"
                  company="TCS"
                  position="Systems Engineer"
                  description="India's top IT Services, Consulting and Business Solutions Company with Global presence."
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AlumniProfileCard 
                  image="/placeholder.svg"
                  name="SOURAV GHOSHAL"
                  department="Computer Sc. & Engg"
                  batch="2015"
                  company="Wipro"
                  position="Technical Lead"
                  description="India's Big name in IT Services world over."
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AlumniProfileCard 
                  image="/placeholder.svg"
                  name="AMRENDRA SAHNI"
                  department="Electronics & Comm. Engg"
                  batch="2018"
                  company="UNILEVER"
                  position="Process Engineer"
                  description="India's top FMCG Company, a part of MNC Lever Brothers."
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <AlumniProfileCard 
                  image="/placeholder.svg"
                  name="KAZI ABDUL SAHID"
                  department="Mechanical Engg"
                  batch="2017"
                  company="INDIAN RAILWAYS"
                  position="Mechanical Engineer"
                  description="Indian Railways, nation's Biggest mass transit provider."
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <AlumniProfileCard 
                  image="/placeholder.svg"
                  name="ARINDAM MONDAL"
                  department="Mechanical Engg"
                  batch="2017"
                  company="INDIAN RAILWAYS"
                  position="Junior Engineer"
                  description="Indian Railways, nation's Biggest mass transit provider."
                />
              </motion.div>
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
