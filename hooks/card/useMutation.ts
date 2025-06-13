
import { CardFormType } from "@/schemas/card";
import { createCard, deleteCard, updateCard } from "@/services/card.service";
import { queryFnResponse } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useCardMutation = (state: string, id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [`card ${state}`],
    mutationFn: (value: CardFormType) =>
      state === "update" && id
        ? updateCard(id, value)
        : createCard(value),
    onSuccess: (data: queryFnResponse) => {
      toast.dismiss();
      if (data.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["card"] });
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });
};

const useCardDeleteMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["card_delete", id],
    mutationFn: deleteCard,
    onSuccess: (data: queryFnResponse) => {
      toast.dismiss();
      if (data.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["card"] });
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });
};

export { useCardMutation, useCardDeleteMutation };
