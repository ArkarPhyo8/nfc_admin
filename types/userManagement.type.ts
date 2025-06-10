import { users } from "@/generated/prisma";

export type UserManagementType = Omit<users, "created_at" | "updated_at"> & {
  created_at: string;
  updated_at: string;
};
