
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Calendar, CheckCircle, Upload } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Create a form schema using zod
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  graduationYear: z.string().min(4, "Please select your graduation year"),
  department: z.string().min(1, "Please select your department"),
  rollNumber: z.string().min(1, "Please enter your roll number"),
  registrationNumber: z.string().min(1, "Please enter your registration number"),
  currentOrganization: z.string().optional(),
  designation: z.string().optional(),
  dateOfBirth: z.date({
    required_error: "Please select your date of birth",
  }),
  address: z.string().min(1, "Please enter your address"),
  message: z.string().optional(),
  resume: z
    .instanceof(FileList)
    .refine((files) => files.length === 0 || files.length === 1, "Please upload only one file")
    .refine(
      (files) => {
        if (files.length === 0) return true;
        const file = files[0];
        return file.type === "application/pdf";
      },
      "Only PDF files are accepted"
    )
    .refine(
      (files) => {
        if (files.length === 0) return true;
        const file = files[0];
        return file.size <= 5 * 1024 * 1024; // 5 MB in bytes
      },
      "File size must be less than 5MB"
    )
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

const departments = [
  "Computer Science & Engineering",
  "Information Technology",
  "Electronics & Communication Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Biotechnology",
];

const graduationYears = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString());

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [resumeFileName, setResumeFileName] = useState("");
  
  const form = useForm<FormValues>({
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
  
  const onSubmit = (data: FormValues) => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setResumeFileName(files[0].name);
    } else {
      setResumeFileName("");
    }
    form.setValue("resume", e.target.files as FileList, { shouldValidate: true });
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress indicator */}
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
      
      {/* Step 1: Registration Form */}
      {step === 1 && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="input-focus" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} className="input-focus" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} className="input-focus" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal h-10",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <Calendar className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1940-01-01")
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {departments.map((department) => (
                          <SelectItem key={department} value={department}>
                            {department}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="graduationYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Graduation Year</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {graduationYears.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="rollNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roll Number</FormLabel>
                    <FormControl>
                      <Input placeholder="123456" {...field} className="input-focus" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="registrationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Registration Number</FormLabel>
                    <FormControl>
                      <Input placeholder="REG123456" {...field} className="input-focus" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="currentOrganization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Organization</FormLabel>
                    <FormControl>
                      <Input placeholder="Company/Institution name" {...field} className="input-focus" />
                    </FormControl>
                    <FormDescription>Optional</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Designation</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer" {...field} className="input-focus" />
                    </FormControl>
                    <FormDescription>Optional</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* PDF Resume Upload Field */}
            <FormField
              control={form.control}
              name="resume"
              render={() => (
                <FormItem>
                  <FormLabel>Resume/CV (PDF)</FormLabel>
                  <div className="flex items-center gap-2">
                    <Input
                      type="file"
                      id="resume"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-grow-0"
                      onClick={() => document.getElementById("resume")?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" /> Select PDF
                    </Button>
                    <div className="flex-grow border rounded-md px-3 py-2 text-sm truncate">
                      {resumeFileName ? resumeFileName : "No file selected"}
                    </div>
                    {resumeFileName && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setResumeFileName("");
                          form.setValue("resume", undefined, { shouldValidate: true });
                          const fileInput = document.getElementById("resume") as HTMLInputElement;
                          if (fileInput) fileInput.value = "";
                        }}
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                  <FormDescription>
                    Upload your resume in PDF format (max 5MB)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Your current address" 
                      {...field} 
                      className="resize-none input-focus"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Anything you'd like to share with the alumni association" 
                      {...field} 
                      className="resize-none input-focus"
                    />
                  </FormControl>
                  <FormDescription>
                    Tell us about your journey after graduation or if you have any specific questions
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">Continue to Payment</Button>
          </form>
        </Form>
      )}
      
      {/* Step 2: Payment (This would be replaced with a real payment integration) */}
      {step === 2 && (
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
              onClick={() => setStep(3)} 
              className="w-full"
            >
              Pay ₹2,040.00
            </Button>
            
            <div className="pt-4 text-xs text-center text-muted-foreground">
              Your payment information is secured with industry-standard encryption.
            </div>
          </div>
        </div>
      )}
      
      {/* Step 3: Confirmation */}
      {step === 3 && (
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
      )}
    </div>
  );
};

export default RegisterForm;
