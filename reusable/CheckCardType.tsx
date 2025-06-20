"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { useCardTypeQuery } from "@/hooks/cardType/useQuery";
import { CardType_Type } from "@/types";
import React from "react";

interface CheckCardTypeProps {
  cardTypeId: string;
}
export const CheckCardType = ({ cardTypeId }: CheckCardTypeProps) => {
  const { data:cardTypeData, isFetching } = useCardTypeQuery();

  if (isFetching) {
    return <Skeleton className="w-full h-10 rounded-md" />;
  }
  if (cardTypeData.length <= 0) {
    return <span>-</span>;
  }
  const findCardType = cardTypeData?.find(
    (item: CardType_Type) => item.id === cardTypeId
  );
  if (!findCardType) {
    return <span>-</span>;
  }
  return <span>{findCardType.name}</span>;
};
