
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  monochrome?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, monochrome = false, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl md:text-3xl"
  };

  return (
    <div className={cn("flex items-center font-medium", sizeClasses[size], className)}>
      <span className={cn(
        "font-semibold tracking-tight transition-colors", 
        monochrome ? "text-current" : "text-primary"
      )}>
        GMIT
      </span>
      <span className="mx-1">|</span>
      <span className="tracking-tight">Alumni</span>
    </div>
  );
};

export default Logo;
