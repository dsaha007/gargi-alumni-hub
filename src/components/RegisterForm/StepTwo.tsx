
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface StepTwoProps {
  onContinue: () => void;
}

const StepTwo = ({ onContinue }: StepTwoProps) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-border/50 shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Membership Payment</h3>
      <p className="text-muted-foreground mb-6">Complete your alumni registration by paying the membership fee.</p>
      
      <div className="p-4 bg-muted rounded-lg mb-6">
        <div className="flex justify-between items-center mb-2">
          <span>Membership Fee</span>
          <span className="font-medium">₹2,000.00</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>Processing Fee</span>
          <span className="font-medium">₹40.00</span>
        </div>
        <div className="border-t border-border mt-3 pt-3 flex justify-between items-center">
          <span className="font-medium">Total</span>
          <span className="font-bold">₹2,040.00</span>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name on Card</label>
          <Input placeholder="John Doe" className="input-focus" />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Card Number</label>
          <Input placeholder="1234 5678 9012 3456" className="input-focus" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Expiry Date</label>
            <Input placeholder="MM/YY" className="input-focus" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">CVC</label>
            <Input placeholder="123" className="input-focus" />
          </div>
        </div>
        
        <Button 
          onClick={onContinue} 
          className="w-full"
        >
          Pay ₹2,040.00
        </Button>
        
        <div className="pt-4 text-xs text-center text-muted-foreground">
          Your payment information is secured with industry-standard encryption.
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
