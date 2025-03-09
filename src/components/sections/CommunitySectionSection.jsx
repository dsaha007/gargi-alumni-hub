
import { Users, GraduationCap, Trophy } from "lucide-react";
import StatCard from "@/components/StatCard";

const CommunityStatsSection = () => {
  return (
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
  );
};

export default CommunityStatsSection;
