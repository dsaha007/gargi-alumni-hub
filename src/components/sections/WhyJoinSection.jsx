
import { Users, GraduationCap, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";

const WhyJoinSection = () => {
  return (
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
  );
};

export default WhyJoinSection;
