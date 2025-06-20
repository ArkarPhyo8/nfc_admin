import { z } from "zod";

// Create schema
export const CardFormSchema = z.object({
  cardName: z.string().min(1, { message: "card name must be number" }),
  username: z
    .string({
      required_error: "Username is required",
    })
    .optional(),
  cardType: z.string().min(1, "card type is required"),
});

export type CardFormType = z.infer<typeof CardFormSchema>;
