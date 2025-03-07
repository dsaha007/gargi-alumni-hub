
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";

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

const TestimonialSection = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

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
  );
};

export default TestimonialSection;
