
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const TestimonialCard = ({ image, name, batch, quote, className }) => {
  return (
    <div className={cn("relative group overflow-hidden rounded-lg", className)}>
      <div 
        className="w-full aspect-video bg-cover bg-center rounded-lg group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <button 
            className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm
            border border-white/30 transition-all duration-300 hover:bg-white/30"
          >
            <Play className="h-6 w-6 text-white fill-white" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="font-medium text-white">{name}</h3>
        <p className="text-sm text-white/80">{batch}</p>
        <p className="text-xs text-white/70 line-clamp-2 mt-1">{quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
