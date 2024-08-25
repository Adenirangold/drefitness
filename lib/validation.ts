import { z } from "zod";
export const clientFormValidation = z.object({
  regNumber: z.string().min(1, "Registration number is required"),
  name: z.string().min(1, "name is required"),
  age: z.string().min(1, "age is required"),
  email: z.string().email("Invalid email address").optional(),
  gender: z.enum(["Male", "Female"]),
  marital: z.enum(["Single", "Married", "Divorced", "Widowed"]),
  address: z.string().min(1, "Address is required"),
  phoneNumber: z
    .string()
    .regex(/^\d{10,15}$/, "Mobile number must be between 10 and 15 digits")
    .optional(),
  medicalClearance: z.enum(["true", "false"]),
  currentHealthIssue: z.string().optional(),
  nextOfKin: z.string().min(1, "Next of kin is required"),
  nextOfKinPhoneNumber: z
    .string()
    .regex(/^\d{10,15}$/, "Mobile number must be between 10 and 15 digits")
    .optional(),
  currentWeight: z.string().min(1, "Weight is required"),
  currentHeight: z.string().min(1, "Height is required"),
  // bmi: z.string().min(1, "bmi is required"),
  dateOfRegistration: z.date(),
  subscriptionStartingDate: z.date(),
  typeOfSubscription: z.string().min(1, "Subscription type is required"),
  // subscriptionCost: z.string().min(1, "Cost is required"),
  // subscriptionActive: z.enum(["true", "false"]),
  paymentConfirmed: z.enum(["true", "false"]),
});
