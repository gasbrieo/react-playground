import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long." }),
    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Please enter a valid email address." }),
    password: z.string().min(1, { message: "Password is required." }),
    confirmPassword: z.string().min(1, { message: "Please confirm your password." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof RegisterSchema>;
