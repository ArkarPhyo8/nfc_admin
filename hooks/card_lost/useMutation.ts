import { queryFnResponse } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import InvalidateAllCardQuery from "../reusable/InvalidateAllCardQuery";
import { cardLostApprove } from "@/services/card_lost.service";

const useApproveMutation = () => {
  const keysToInvalidate = ["card_lost", "card_lost_by_cardId"];
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["card_lost_status_change"],
    mutationFn: cardLostApprove,
    onSuccess: (data: queryFnResponse) => {
      toast.dismiss();
      if (data.success) {
        toast.success(data.message);
        InvalidateAllCardQuery(queryClient, keysToInvalidate);
      }
    },
    onError(error) {
      toast.dismiss();
      console.error(error);
      toast.error(error.message);
    },
  });
};

export { useApproveMutation };
