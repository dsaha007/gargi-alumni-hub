
import { motion } from "framer-motion";
import { Bookmark, BookOpen, GraduationCap, Users } from "lucide-react";

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About GMIT Alumni Association</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building a community of successful graduates who are proud to be part of the GMIT legacy.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Bookmark className="mr-2 h-6 w-6 text-primary" />
              Our Mission
            </h2>
            <p className="text-muted-foreground">
              To foster a vibrant community of GMIT alumni by providing valuable networking opportunities, 
              professional development resources, and meaningful ways to give back to the institution that 
              shaped their careers. We aim to strengthen the bond between former students and their alma mater, 
              creating a powerful network that benefits all members.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-lg p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-primary" />
              Our Vision
            </h2>
            <p className="text-muted-foreground">
              To build the most engaged and influential alumni network in the region, recognized for its 
              contribution to the success of graduates, the institution, and society at large. We envision 
              a dynamic community where alumni connections drive innovation, mentorship, and opportunities 
              for current and future generations of GMIT students.
            </p>
          </motion.div>
        </div>

        {/* History Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our History</h2>
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <p className="text-muted-foreground mb-4">
              The GMIT Alumni Association was founded in 2010 with just 50 members from the inaugural graduating class. 
              What began as informal gatherings has grown into a structured organization with thousands of members 
              spread across the globe.
            </p>
            <p className="text-muted-foreground mb-4">
              Over the years, our association has launched numerous initiatives, including the Annual Alumni Meet, 
              Mentorship Programs, and Career Development Workshops. We've established scholarships for deserving 
              students and contributed to the development of campus facilities.
            </p>
            <p className="text-muted-foreground">
              Today, the GMIT Alumni Association stands as a testament to the enduring bond between graduates and 
              their alma mater, continuing to evolve and grow with each passing year.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                We believe in the power of connection and support among our alumni, fostering relationships that last a lifetime.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We uphold the highest standards in all we do, reflecting the quality education received at GMIT.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new ideas and approaches, staying at the forefront of alumni engagement practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
