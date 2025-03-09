
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AlumniProfileCard from "@/components/AlumniProfileCard";

const AlumniProfileSection = () => {
  return (
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
  );
};

export default AlumniProfileSection;
