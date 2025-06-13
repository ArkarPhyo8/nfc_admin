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
import { UserType } from "@/types";
import {
  UserFormSchema,
  UserFormType,
} from "@/schemas/user";
import { useUserMutation } from "@/hooks/user/useMutation";

interface UserFormProps {
  title: string;
  state: string;
  btnName: string;
  user?: UserType;
  onClose: () => void; // New prop for closing dialog
}
export const UserForm = ({
  title,
  state,
  btnName,
  user,
  onClose,
}: UserFormProps) => {
  const schema = UserFormSchema;
  const userMutation = useUserMutation(state, user?.id);

  const form = useForm<UserFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: user ? user.username : "",
      phoneNo: user?.phoneNo ? String(user?.phoneNo) : "",
    },
    disabled: userMutation.isPending,
  });

  const onSubmit = async (value: UserFormType) => {
    // console.log("value--->", value);
    toast.loading("Processing....");
    await userMutation.mutateAsync(value);
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
              disabled={userMutation.isPending}
              className="float-right cursor-pointer"
            >
              {userMutation.isPending ? `${btnName}...` : `${btnName}`}
            </Button>
          </form>
        </Form>
      </div>
    </DialogContent>
  );
};
