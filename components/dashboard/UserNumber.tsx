"use client";
import React from "react";
import DashboardCardWrapper from "./CardWrapper";
import { useUserAccountQuery } from "@/hooks/userManagement/useQuery";
import { CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const DashboardUserNumber = () => {
  const { data, isFetching } = useUserAccountQuery();
  const userCount = data?.userAccounts?.length;

  return (
    <>
      <DashboardCardWrapper title={"Users"} className={"bg-blue-100"}>
        <CardContent>
          {isFetching ? (
            <span>
              <Skeleton className=" bg-gray-400 h-8 w-20" />
            </span>
          ) : (
            <span className="text-4xl font-bold text-green">{userCount}</span>
          )}
        </CardContent>
      </DashboardCardWrapper>
    </>
  );
};

export default DashboardUserNumber;
