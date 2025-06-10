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
import { CardManagementType } from "@/types";
import { CardFormSchema, CardFormType } from "@/schemas/cardManagement";
import CardTypeSelect from "./CardTypeSelect";
import UsernameSelect from "./UsernameSelect";
import { Switch } from "@/components/ui/switch";
import { useCardMutation } from "@/hooks/cardManagement/useMutation";

interface CardFormProps {
  title: string;
  state: string;
  btnName: string;
  card?: CardManagementType;
  onClose: () => void; // New prop for closing dialog
}

export const CardForm = ({
  title,
  state,
  btnName,
  card,
  onClose,
}: CardFormProps) => {
  const schema = CardFormSchema;
  const cardMutation = useCardMutation(state, card?.id);

  const form = useForm<CardFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      cardName: card ? card.cardName : "",
      username: card?.userID ? String(card?.userID) : "",
      cardType: card?.cardType ? card?.cardType : "",
      status: card?.status ? card?.status : false,
    },
    disabled: cardMutation.isPending,
  });

  const onSubmit = async (value: CardFormType) => {
    console.log("value--->", value);
    toast.loading(`Processing....`);
    await cardMutation.mutateAsync(value);
    onClose?.(); // Close the dialog
    form.reset();
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="sr-only" />
      </DialogHeader>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Card Name Field */}
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Card Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={field.disabled}
                      {...field}
                      placeholder="card name..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <UsernameSelect value={field.value} onChange={field.onChange} />
              )}
            />

            {/* Card Type Field */}
            <FormField
              control={form.control}
              name="cardType"
              render={({ field }) => (
                <CardTypeSelect onChange={field.onChange} value={field.value} />
              )}
            />

            {/* Status Field */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Status</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={cardMutation.isPending}
              className="float-right cursor-pointer"
            >
              {cardMutation.isPending ? `${btnName}...` : `${btnName}`}
            </Button>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};
