"use server";

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { SignInFormType } from "@/schemas/auth";

export const signInAction = async (value: SignInFormType) => {
  // console.log("value-->", value);
  try {
    const existingAccount = await prisma.admin.findUnique({
      where: { email: value.email },
    });
    // console.log("existing-->", existingAccount);

    // If author doesn't exist, don't reveal that directly
    if (!existingAccount) {
      return { error: "Invalid username or password." };
    }

    const res = await signIn("credentials", {
      redirect: false,
      email: value.email,
      password: value.password,
    });
    if (res?.error) {
      return { error: res.error || "Invalid username or password" };
    } else {
      return { success: true };
    }
  } catch (err) {
    console.error("signInError-->", err);
    return { error: `Invalid email or password,${err}` };
  }
};
