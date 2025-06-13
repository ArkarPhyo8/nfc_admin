import { Skeleton } from "@/components/ui/skeleton";
import { useUserQuery } from "@/hooks/user/useQuery";
import { UserType } from "@/types";
import React from "react";

interface UsernameCellProps {
  userId: string;
}
const UsernameCell = ({ userId }: UsernameCellProps) => {
  const { data, isFetching } = useUserQuery();
  if (isFetching) {
    return <Skeleton className="w-full h-10 rounded-md" />;
  }
  if (data?.users.length <= 0) {
    return <span>-</span>;
  }
  const findUser = data?.users?.find((item: UserType) => item.id === userId);
  if (!findUser) {
    return <span>-</span>;
  }
  return <span>{findUser.username}</span>;
};

export default UsernameCell;
