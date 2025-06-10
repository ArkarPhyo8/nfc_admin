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
import { UserManagementType } from "@/types";
import {
  UserAccountFormSchema,
  UserAccountFormType,
} from "@/schemas/userManagement";
import { useUserAccountsMutation } from "@/hooks/userManagement/useMutation";

interface UserAccountFormProps {
  title: string;
  state: string;
  btnName: string;
  userAccount?: UserManagementType;
  onClose: () => void; // New prop for closing dialog
}
export const UserAccountForm = ({
  title,
  state,
  btnName,
  userAccount,
  onClose,
}: UserAccountFormProps) => {
  const schema = UserAccountFormSchema;
  const userAccountsMutation = useUserAccountsMutation(state, userAccount?.id);

  const form = useForm<UserAccountFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: userAccount ? userAccount.username : "",
      phoneNo: userAccount?.phoneNo ? String(userAccount?.phoneNo) : "",
    },
    disabled: userAccountsMutation.isPending,
  });

  const onSubmit = async (value: UserAccountFormType) => {
    // console.log("value--->", value);
    toast.loading(`User Account ${btnName}....`);
    await userAccountsMutation.mutateAsync(value);
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
            {/* Name Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      disabled={field.disabled}
                      {...field}
                      placeholder="username..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      disabled={field.disabled}
                      {...field}
                      placeholder="09"
                      type="tel"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={userAccountsMutation.isPending}
              className="float-right cursor-pointer"
            >
              {userAccountsMutation.isPending ? `${btnName}...` : `${btnName}`}
            </Button>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};
