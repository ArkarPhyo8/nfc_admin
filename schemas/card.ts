import { z } from "zod";

// Create schema
export const CardFormSchema = z.object({
  cardName: z.string().min(1, { message: "card name must be number" }),
  username: z.string({
    required_error: "Username is required",
  }),
  cardType: z.string().min(1, "card type is required"),
  status: z.boolean({
    required_error: "status is required",
    invalid_type_error: "status must be a boolean",
  }),
});

export type CardFormType = z.infer<typeof CardFormSchema>;
