import { CardFormType } from "@/schemas/card";
import {
  addUserIntoCard,
  changeStatus,
  deleteCard,
  registerCard,
} from "@/services/card.service";
import { queryFnResponse } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import InvalidateAllCardQuery from "../reusable/InvalidateAllCardQuery";

const useCardMutation = (state: string, id: string | undefined) => {
  const keysToInvalidate = ["cardAll", "card", "available_cards", "sold_cards"];
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [`card ${state}`],
    mutationFn: (value: CardFormType) =>
      state === "addUser" && id
        ? addUserIntoCard(id, value)
        : registerCard(value),
    onSuccess: (data: queryFnResponse) => {
      toast.dismiss();
      if (data.success) {
        toast.success(data.message);
        InvalidateAllCardQuery(queryClient, keysToInvalidate);
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
  const keysToInvalidate = ["cardAll", "card", "available_cards", "sold_cards"];
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["card_delete", id],
    mutationFn: deleteCard,
    onSuccess: (data: queryFnResponse) => {
      toast.dismiss();
      if (data.success) {
        toast.success(data.message);
        InvalidateAllCardQuery(queryClient, keysToInvalidate);
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

const useStatusChangeMutation = () =>
  // guid: string,
  // setChecked?: React.Dispatch<React.SetStateAction<boolean>>,
  // checked?: boolean
  {
    const keysToInvalidate = [
      "cardAll",
      "card",
      "available_cards",
      "sold_cards",
      "card_by_id",
    ];
    const queryClient = useQueryClient();

    return useMutation({
      mutationKey: ["status_change"],
      mutationFn: changeStatus,
      onSuccess: (data: queryFnResponse) => {
        toast.dismiss();
        if (data.success) {
          toast.success(data.message);
          InvalidateAllCardQuery(queryClient, keysToInvalidate);
        }
        // else {
        //   setChecked(checked);
        //   toast.error(data.message);
        // }
      },
      onError(error) {
        toast.dismiss();
        console.error(error);
        toast.error(error.message);
      },
    });
  };

export { useCardMutation, useCardDeleteMutation, useStatusChangeMutation };
