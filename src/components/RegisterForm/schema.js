
import { z } from "zod";

// Create a form schema using zod
export const formSchema = z.object({
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

export const departments = [
  "Computer Science & Engineering",
  "Information Technology",
  "Electronics & Communication Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Biotechnology",
];

export const graduationYears = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString());
