
import { cn } from "@/lib/utils";

interface AlumniProfileCardProps {
  image: string;
  name: string;
  department: string;
  batch: string;
  company: string;
  position: string;
  description: string;
  className?: string;
}

const AlumniProfileCard = ({
  image,
  name,
  department,
  batch,
  company,
  position,
  description,
  className,
}: AlumniProfileCardProps) => {
  return (
    <div className={cn(
      "border border-border/50 rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="p-4 flex flex-col items-center">
          <div className="w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-primary/20">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-center">{name}</h3>
          <p className="text-sm text-muted-foreground text-center mb-1">{department} - {batch}</p>
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mt-1 mb-2">
            {company}
          </div>
          <p className="text-xs text-center text-muted-foreground">{position}</p>
        </div>
        
        <div className="px-4 pb-4 mt-auto">
          <p className="text-xs text-muted-foreground line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfileCard;
