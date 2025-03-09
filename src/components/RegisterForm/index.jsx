
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import ProgressIndicator from "./ProgressIndicator";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { FormValues, formSchema } from "./schema";

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [resumeFileName, setResumeFileName] = useState("");
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      graduationYear: "",
      department: "",
      rollNumber: "",
      registrationNumber: "",
      currentOrganization: "",
      designation: "",
      address: "",
      message: "",
    },
  });
  
  const onSubmit = (data) => {
    console.log("Form data:", data);
    
    // Check if resume was provided and log file info
    if (data.resume && data.resume.length > 0) {
      const file = data.resume[0];
      console.log("Resume:", file.name, file.type, `${(file.size / 1024 / 1024).toFixed(2)} MB`);
      toast.success(`Resume "${file.name}" uploaded successfully`);
    }
    
    // In a real app, we would submit to an API here
    // Then move to payment step
    setStep(2);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress indicator */}
      <ProgressIndicator step={step} />
      
      {/* Step 1: Registration Form */}
      {step === 1 && (
        <StepOne 
          form={form} 
          onSubmit={onSubmit} 
          resumeFileName={resumeFileName} 
          setResumeFileName={setResumeFileName} 
        />
      )}
      
      {/* Step 2: Payment */}
      {step === 2 && (
        <StepTwo onContinue={() => setStep(3)} />
      )}
      
      {/* Step 3: Confirmation */}
      {step === 3 && <StepThree />}
    </div>
  );
};

export default RegisterForm;
