import { z } from "zod";
// export const clientFormValidation = z.object({
//   regNumber: z
//     .string()
//     .regex(/^\S.*$/, {
//       message: "Registration Number cannot start with a space",
//     })
//     .min(1, "Registration number is required"),
//   name: z.string().min(1, "name is required"),
//   phoneNumber: z
//     .string()
//     .regex(/^\d{11}$/, "Mobile number must be exactly 11 digits"),

//   email: z.string().email("Invalid email address").optional(),
//   age: z.string().min(1, "age is required").optional(),
//   gender: z.enum(["Male", "Female"]),
//   marital: z.enum(["Single", "Married", "Divorced", "Widowed"]),
//   address: z.string().min(1, "Address is required").optional(),
//   nextOfKin: z.string().min(1, "Next of kin is required").optional(),
//   nextOfKinPhoneNumber: z
//     .string()
//     .regex(/^\d{11}$/, "Mobile number must be between 10 and 15 digits")
//     .optional(),

//   medicalClearance: z.enum(["true", "false"]),
//   currentHealthIssue: z.string().optional(),
//   currentWeight: z.string().min(1, "Weight is required").optional(),
//   currentHeight: z.string().min(1, "Height is required").optional(),
//   typeOfSubscription: z.string().min(1, "Subscription type is required"),
//   dateOfRegistration: z.date(),
//   subscriptionStartingDate: z.date(),
//   paymentConfirmed: z.enum(["true", "false"]),
// });

export const clientFormValidation = z.object({
  regNumber: z
    .string()
    .regex(/^\S.*$/, {
      message: "Registration Number cannot start with a space",
    })
    .min(1, "Registration number is required"),
  name: z.string().min(1, "Name is required"),
  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, "Mobile number must be exactly 11 digits"),

  email: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal("").optional()),
  age: z.string().optional(),
  gender: z.enum(["Male", "Female"]),
  marital: z.enum(["Single", "Married", "Divorced", "Widowed"]),
  address: z.string().optional(),
  nextOfKin: z.string().optional(),
  nextOfKinPhoneNumber: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{11}$/.test(val), {
      message: "Mobile number must be exactly 11 digits",
    }),
  medicalClearance: z.enum(["true", "false"]),
  currentHealthIssue: z.string().optional(),
  currentWeight: z.string().optional(),
  currentHeight: z.string().optional(),
  typeOfSubscription: z.string().min(1, "Subscription type is required"),
  dateOfRegistration: z.date(),
  subscriptionStartingDate: z.date(),
  paymentConfirmed: z.enum(["true", "false"]),
});

export const registerFormValidation = z.object({
  regNumber: z.string().min(1, "Registration number is required"),
  name: z.string().min(1, "name is required"),
  typeOfSubscription: z.string().min(1, "Subscription type is required"),
  subscriptionStartingDate: z.date(),
  paymentConfirmed: z.enum(["true", "false"]),
});
