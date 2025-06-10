import { z } from "zod";

// Create schema
export const UserAccountFormSchema = z.object({
  username: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, { message: "Name cannot be empty" }),
  phoneNo: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone must be a string",
    })
    .regex(/^\+?[0-9]{7,15}$/, {
      message: "Phone number must be valid (digits only, 7 to 15 characters)",
    })
});
export type UserAccountFormType = z.infer<typeof UserAccountFormSchema>;
