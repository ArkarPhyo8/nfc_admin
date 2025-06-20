"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { useAllCardQuery } from "@/hooks/card/useQuery";
import { CardType } from "@/types";
import React from "react";

interface CheckCardNameProps {
  cardId: string;
}
export const CheckCardName = ({ cardId }: CheckCardNameProps) => {
  const { data, isFetching } = useAllCardQuery();
  if (isFetching) {
    return <Skeleton className="w-full h-10 rounded-md" />;
  }
  if (data?.all_cards.length <= 0) {
    return <span>-</span>;
  }
  const findUser = data?.all_cards?.find((item: CardType) => item.id === cardId);
  if (!findUser) {
    return <span>-</span>;
  }
  return <span>{findUser.cardName}</span>;
};

