"use client";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { AvailableCardTable } from "./Table";
import { Skeleton } from "@/components/ui/skeleton";
import { CardType } from "@/types";
import { useAllCardQuery } from "@/hooks/card/useQuery";

const AvailableCards = () => {
  const { data, isFetching } = useAllCardQuery();

  //Filter Card without userId
  const cardWithoutUser = data?.all_cards.filter(
    (card: CardType) => card.userID === null
  ).length;

  return (
    <div className="space-y-8">
      <Card className="w-[20%] bg-green-100">
        <CardContent>
          {isFetching ? (
            <Skeleton className=" bg-gray-200 h-16 w-22" />
          ) : (
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Stock</h1>
              <span className="text-4xl font-bold">{cardWithoutUser}</span>
            </div>
          )}
        </CardContent>
      </Card>

      <AvailableCardTable />
    </div>
  );
};

export default AvailableCards;
