import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Meet 2024",
      date: "August 15, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "GMIT Main Campus, Balarampur",
      description: "Join us for our flagship annual event where alumni from all batches come together to reconnect, network, and celebrate the GMIT legacy.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Tech Symposium 2024",
      date: "September 10, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "GMIT Auditorium",
      description: "A day-long symposium featuring talks from GMIT alumni who have made significant contributions to the technology industry.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Career Mentorship Workshop",
      date: "October 5, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "Virtual (Zoom)",
      description: "An interactive online workshop where experienced alumni mentor recent graduates on career planning and professional development.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Alumni Sports Tournament 2023",
      date: "November 12, 2023",
      location: "GMIT Sports Complex",
      description: "A day of friendly competition featuring cricket, football, and volleyball matches between alumni teams.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Homecoming Weekend 2023",
      date: "July 22-23, 2023",
      location: "GMIT Campus",
      description: "A weekend celebration featuring campus tours, department reunions, and an alumni gala dinner.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      title: "Entrepreneurship Summit 2023",
      date: "March 15, 2023",
      location: "GMIT Business School",
      description: "A gathering of alumni entrepreneurs who shared their journeys, challenges, and success stories with current students.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Events</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay connected with your alma mater through our diverse range of events designed to bring the GMIT community together.
            </p>
          </motion.div>

          <Tabs defaultValue="upcoming" className="mb-16">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div 
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-6">{event.description}</p>
                      <Button variant="default" size="sm">Register Now</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="past" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <motion.div 
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500 opacity-80"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-6">{event.description}</p>
                      <Button variant="outline" size="sm">View Gallery</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gmit-50 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Have an event idea?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for fresh ideas to bring our alumni community together. 
              If you have a suggestion for an event, we'd love to hear from you!
            </p>
            <Button variant="default">Submit Event Proposal</Button>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
