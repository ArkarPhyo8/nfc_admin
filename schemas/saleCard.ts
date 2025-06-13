import { z } from "zod";

// Create schema
export const SaleCardFormSchema = z.object({
  cardName: z
    .array(
      z
        .string({
          required_error: "Card name is required",
          invalid_type_error: "Card name must be string",
        })
        .min(1, { message: "Card name must not be empty" })
    )
    .min(1, { message: "At least one card name is required" }),
  customerName: z
    .string({
      required_error: "Customer name is required",
      invalid_type_error: "Customer name must be string",
    })
    .min(1, { message: "Customer name is not empty" }),
  quantity: z
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a number",
    })
    .positive("Quantity must be greater than 0"),

  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .positive("Price must be greater than 0"),
  paymentType: z
    .string({
      required_error: "Payment status is required",
    })
    .min(1, { message: "Payment status cannot be empty" }),
  phone: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone must be a string",
    })
    .regex(/^[0-9]{7,20}$/, {
      message: "Phone number must be between 7–20 digits",
    }),
  address: z
    .string({
      required_error: "Address is required",
    })
    .min(1, { message: "Address cannot be empty" }),
});
export type SaleCardFormType = z.infer<typeof SaleCardFormSchema>;
