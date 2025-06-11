"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Eye, EyeOff, LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ErrorMessage from "@/reusable/ErrorMessage";
import { useForm } from "react-hook-form";
import { SignInFormSchema, SignInFormType } from "@/schemas/auth";
import { signInAction } from "@/actions/auth/signInAction";
import { Card, CardContent, CardHeader } from "../ui/card";
import LoadingUI from "@/reusable/LoadingUI";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const form = useForm<SignInFormType>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    disabled: isLoading,
  });

  const onSubmit = async (value: SignInFormType) => {
    // console.log("value--->", value);
    try {
      setError("");
      setIsLoading(true);
      const res = await signInAction(value);
      if (res?.error) {
        setError(res.error);
      } else {
        toast.success("Login is successfully!");
        router.push("/");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="w-full flex items-center flex-col">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <p className="text-muted-foreground text-base">welcome back</p>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ErrorMessage message={error} />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={field.disabled}
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        disabled={field.disabled}
                        {...field}
                        placeholder="Password"
                        className="pr-10" // space for the icon
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        tabIndex={-1} // avoid tab focusing on icon
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                    <Button
                      size="sm"
                      className="w-full justify-end font-normal"
                      variant="link"
                      asChild
                    >
                      <Link href={"#"} className="text-text-1">
                        Forgot password?
                      </Link>
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer"
            >
              {isLoading ? (
                <>
                  <LoadingUI />
                  Signing In...
                </>
              ) : (
                <>
                  <LogIn />
                  Sign In
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
