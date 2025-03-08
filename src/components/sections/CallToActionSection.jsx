
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
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
  );
};

export default CallToActionSection;
