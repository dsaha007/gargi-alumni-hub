
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Removed the optional props to simplify integration
const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute w-96 h-96 rounded-full bg-primary/5 top-1/4 -right-20 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute w-64 h-64 rounded-full bg-primary/5 bottom-1/4 -left-10 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute w-48 h-48 rounded-full bg-primary/5 top-1/3 left-1/4 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium animate-fade-in">
            Gargi Memorial Institute of Technology
          </span>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight animate-slide-in-up">
            Connect, Collaborate, <br className="hidden sm:block" />
            <span className="text-primary">Grow Together</span>
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl animate-slide-in-up animate-delay-100">
            Join the exclusive alumni network of Gargi Memorial Institute of Technology.
            Connect with fellow graduates, access premium events, and unlock career opportunities.
          </p>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-slide-in-up animate-delay-200">
            <Link to="/register">
              <Button size="lg" className="px-8 py-6 text-base">
                Register Now
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-6 text-base">
              Learn More
            </Button>
          </div>
          
          <div className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fade-in animate-delay-500">
            <button 
              onClick={scrollToNextSection}
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">Discover More</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
