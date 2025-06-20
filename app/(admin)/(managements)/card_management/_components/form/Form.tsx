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
import { CardType } from "@/types";
import CardTypeSelect from "./CardTypeSelect";
import UsernameSelect from "./UsernameSelect";
// import { Switch } from "@/components/ui/switch";
import { useCardMutation } from "@/hooks/card/useMutation";
import { CardFormSchema, CardFormType } from "@/schemas/card";

interface CardFormProps {
  title: string;
  state: string;
  btnName: string;
  card?: CardType;
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
      cardType: card?.cardType ? String(card?.cardType) : "",
    },
    disabled: cardMutation.isPending,
  });

  const onSubmit = async (value: CardFormType) => {
    if (state === "addUser") {
      if (!value.username) {
        form.setError("username", { message: "user is required!" });
        return;
      }
    }
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
                <FormItem
                  className={`w-full ${
                    state === "addUser" && "cursor-not-allowed"
                  } `}
                >
                  <FormLabel>Card Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={state === "addUser" ? true : field.disabled}
                      {...field}
                      placeholder="card name..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Card Type Field */}
            <FormField
              control={form.control}
              name="cardType"
              render={({ field }) => (
                <CardTypeSelect
                  disabled={
                    state === "addUser" ? true : field.disabled ?? false
                  }
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />

            {/* username Field */}
            {state !== "register" && (
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <UsernameSelect
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            )}

            {/* Status Field */}
            {/* <FormField
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
            /> */}
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
