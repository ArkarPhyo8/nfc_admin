"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useCardTypeQuery } from "@/hooks/cardType/useQuery";
import { CardType_Type } from "@/types";
import React from "react";

interface CardTypeCellProps {
  cardTypeId: string;
}
const CardTypeCell = ({ cardTypeId }: CardTypeCellProps) => {
  const { data: cardTypes, isFetching } = useCardTypeQuery();

  if (isFetching) {
    return <Skeleton className="w-full h-10 rounded-md" />;
  }
  const cardType = cardTypes?.find(
    (card: CardType_Type) => card.id === cardTypeId
  ).name;
  return <span>{cardType}</span>;
};

export default CardTypeCell;
