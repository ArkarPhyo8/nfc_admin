"use client";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SaleCardType } from "@/types";
import { SaleCardFormSchema, SaleCardFormType } from "@/schemas/saleCard";
import { Textarea } from "@/components/ui/textarea";
import { useSaleCardMutation } from "@/hooks/saleCard/useMutation";
import PaymentTypeSelect from "./PaymentTypeSelect";
import CardNameSelect from "./CardNameSelect";
import { useCardQuery } from "@/hooks/card/useQuery";
import WarningMessage from "@/reusable/WarningMessage";
import { useEffect, useState } from "react";

interface SaleFormProps {
  title: string;
  state: string;
  btnName: string;
  sale?: SaleCardType;
  onClose: () => void; // New prop for closing dialog
}

export const SaleForm = ({
  title,
  state,
  btnName,
  sale,
  onClose,
}: SaleFormProps) => {
  const [warningMessage, setWarningMessage] = useState("");
  const { data } = useCardQuery();

  const saleMutation = useSaleCardMutation(state, sale?.id);
  const form = useForm<SaleCardFormType>({
    resolver: zodResolver(SaleCardFormSchema),
    defaultValues: {
      cardName: sale?.cardID ?? [],
      customerName: sale?.customer_name ?? "",
      quantity: sale?.quantity ? Number(sale.quantity) : 0, // number only
      price: sale?.price ? Number(sale.price) : 0, // number only
      paymentType: sale?.payment_status ? String(sale?.payment_status) : "",
      phone: sale?.phone ?? "",
      address: sale?.address ?? "",
    },
    disabled: Boolean(warningMessage) ?? saleMutation.isPending,
  });

  const onSubmit = async (value: SaleCardFormType) => {
    // console.log("value--->", value);
    toast.loading(`Processing....`);
    await saleMutation.mutateAsync(value);
    onClose?.(); // Close the dialog
    form.reset();
  };

  useEffect(() => {
    if (data?.cards.length <= 0) {
      setWarningMessage("Card name is empty! Please add cards");
    }
  }, [data]);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="sr-only" />
      </DialogHeader>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <WarningMessage message={warningMessage} />
            {/* Card Name Field */}
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <CardNameSelect
                  cardData={data?.cards}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />

            {/* Customer Name Field */}
            <FormField
              control={form.control}
              name="customerName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Customer Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={field.disabled}
                      {...field}
                      placeholder="customer name..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Quantity Name Field */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={field.disabled}
                      value={
                        Number.isNaN(field.value) || field.value === null
                          ? ""
                          : field.value
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value === "" ? null : Number(value));
                      }}
                      placeholder="0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price Field */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={field.disabled}
                      value={
                        Number.isNaN(field.value) || field.value === null
                          ? ""
                          : field.value
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value === "" ? null : Number(value));
                      }}
                      placeholder="0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Payment type Field */}
            <FormField
              control={form.control}
              name="paymentType"
              render={({ field }) => (
                <PaymentTypeSelect
                  disabled={field.disabled}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      disabled={field.disabled}
                      {...field}
                      placeholder="09"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Address Field */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={field.disabled}
                      {...field}
                      placeholder="Address..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={Boolean(warningMessage) ?? saleMutation.isPending}
              className="float-right cursor-pointer"
            >
              {saleMutation.isPending ? `${btnName}...` : `${btnName}`}
            </Button>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};
