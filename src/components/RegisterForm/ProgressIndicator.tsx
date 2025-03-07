
import React from "react";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  step: number;
}

const ProgressIndicator = ({ step }: ProgressIndicatorProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm",
          step >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
        )}>
          1
        </div>
        <div className={cn(
          "h-1 w-12 md:w-24 mx-2",
          step >= 2 ? "bg-primary" : "bg-muted"
        )} />
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm",
          step >= 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
        )}>
          2
        </div>
        <div className={cn(
          "h-1 w-12 md:w-24 mx-2",
          step >= 3 ? "bg-primary" : "bg-muted"
        )} />
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm",
          step >= 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
        )}>
          3
        </div>
      </div>
      
      <div className="text-sm font-medium">
        {step === 1 && "Personal Details"}
        {step === 2 && "Payment"}
        {step === 3 && "Confirmation"}
      </div>
    </div>
  );
};

export default ProgressIndicator;
