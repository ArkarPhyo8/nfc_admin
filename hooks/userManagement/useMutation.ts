
import { UserAccountFormType } from "@/schemas/userManagement";
import {
  createUserAccount,
  deleteUserAccount,
  updateUserAccount,
} from "@/services/userManagement.service";
import { queryFnResponse } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useUserAccountsMutation = (state: string, id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [`userAccount ${state}`],
    mutationFn: (value: UserAccountFormType) =>
      state === "update" && id
        ? updateUserAccount(id, value)
        : createUserAccount(value),
    onSuccess: (data: queryFnResponse) => {
      toast.dismiss();
      if (data.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["userAccount"] });
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

const useUserAccountsDeleteMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["userAccountDelete", id],
    mutationFn: deleteUserAccount,
    onSuccess: (data: queryFnResponse) => {
      toast.dismiss();
      if (data.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["userAccount"] });
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

export { useUserAccountsMutation, useUserAccountsDeleteMutation };
