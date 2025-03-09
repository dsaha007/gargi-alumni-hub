
import { cn } from "@/lib/utils";

const FeatureCard = ({
  icon,
  title,
  description,
  className,
  iconClassName,
}) => {
  return (
    <div
      className={cn(
        "group p-6 rounded-xl bg-white hover:shadow-elegant border border-border/50 transition-all duration-300 premium-card",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white",
          iconClassName
        )}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
