"use client";
import React from "react";
import DashboardCardWrapper from "./CardWrapper";
import { CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { useSaleCardQuery } from "@/hooks/saleCard/useQuery";

const DashboardSaleCardNumber = () => {
  const { data,isFetching } = useSaleCardQuery();
  const saleCardCount = data?.sale_cards?.length;

  return (
    <>
      <DashboardCardWrapper title={"Sale Cards"} className={"bg-emerald-100"}>
        <CardContent>
          {isFetching ? (
            <span>
              <Skeleton className=" bg-gray-200 h-8 w-20" />
            </span>
          ) : (
            <span className="text-4xl font-bold text-emerald-500">{saleCardCount}</span>
          )}
        </CardContent>
      </DashboardCardWrapper>
    </>
  );
};

export default DashboardSaleCardNumber;
