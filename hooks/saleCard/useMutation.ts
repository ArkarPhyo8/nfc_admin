import { SaleCardFormType } from "@/schemas/saleCard";
import {
  createSaleCard,
  deleteSaleCard,
  updateSaleCard,
} from "@/services/saleCard.service";
import { queryFnResponse } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useSaleCardMutation = (state: string, id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [`scale_card ${state}`],
    mutationFn: (value: SaleCardFormType) =>
      state === "update" && id
        ? updateSaleCard(id, value)
        : createSaleCard(value),
    onSuccess: (data: queryFnResponse) => {
      toast.dismiss();
      if (data.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["scale_card"] });
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

const useSaleCardDeleteMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["scale_card_delete", id],
    mutationFn: deleteSaleCard,
    onSuccess: (data: queryFnResponse) => {
      toast.dismiss();
      if (data.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["scale_card"] });
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

export { useSaleCardMutation, useSaleCardDeleteMutation };
