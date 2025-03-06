
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  icon?: React.ReactNode;
}

const StatCard = ({
  value,
  label,
  prefix = "",
  suffix = "",
  className,
  duration = 2000,
  icon
}: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`stat-${label.replace(/\s+/g, "-").toLowerCase()}`);
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [label]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const step = Math.ceil(value / (duration / 16)); // 16ms per frame (60fps)
    
    const timer = setInterval(() => {
      start += step;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, duration, isVisible]);
  
  return (
    <div
      id={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className={cn(
        "p-6 rounded-xl bg-white border border-border/50 text-center premium-card",
        className
      )}
    >
      {icon && <div className="flex justify-center mb-3">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
};

export default StatCard;
