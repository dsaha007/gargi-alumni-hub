
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const StepThree = () => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-6">
        <CheckCircle className="h-8 w-8" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">Registration Successful!</h3>
      <p className="text-muted-foreground mb-8">
        Thank you for registering with the GMIT Alumni Association. Your payment has been processed successfully.
      </p>
      <div className="bg-muted p-6 rounded-lg mb-8 max-w-md mx-auto">
        <div className="text-left space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Membership ID:</span>
            <span className="font-medium">GMIT-AL-{Math.floor(10000 + Math.random() * 90000)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Payment Amount:</span>
            <span className="font-medium">₹2,040.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Payment Status:</span>
            <span className="font-medium text-emerald-600">Completed</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Transaction ID:</span>
            <span className="font-medium">TRX-{Math.floor(1000000 + Math.random() * 9000000)}</span>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          We've sent you an email with all the details. You can now access all alumni benefits.
        </p>
        <Button onClick={() => window.location.href = "/"}>
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
