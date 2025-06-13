"use client";
import React from "react";
import DashboardCardWrapper from "./CardWrapper";
import { useCardQuery } from "@/hooks/card/useQuery";
import { CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const DashboardCardNumber = () => {
  const { data,isFetching } = useCardQuery();
  const cardCount = data?.cards?.length;

  return (
    <>
      <DashboardCardWrapper title={"Cards"} className={"bg-cyan-100"}>
        <CardContent>
          {isFetching ? (
            <span>
              <Skeleton className=" bg-gray-400 h-8 w-20" />
            </span>
          ) : (
            <span className="text-4xl font-bold text-blue-500">{cardCount}</span>
          )}
        </CardContent>
      </DashboardCardWrapper>
    </>
  );
};

export default DashboardCardNumber;
