
import { UserFormType } from "@/schemas/user";
import { createUser, deleteUser, updateUser } from "@/services/user.service";

import { queryFnResponse } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useUserMutation = (state: string, id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [`userAccount ${state}`],
    mutationFn: (value: UserFormType) =>
      state === "update" && id
        ? updateUser(id, value)
        : createUser(value),
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

const useUserDeleteMutation = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["userAccountDelete", id],
    mutationFn: deleteUser,
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

export { useUserMutation, useUserDeleteMutation };
