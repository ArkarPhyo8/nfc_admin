"use client";
import { Card, CardContent } from "@/components/ui/card";
import { SoldCardTable } from "./Table";
import { useAllCardQuery } from "@/hooks/card/useQuery";
import { CardType } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

const SoldCards = () => {
  const { data, isFetching } = useAllCardQuery();

  //Filter Card with userId
  const cardWithUser = data?.all_cards.filter(
    (card: CardType) => card.userID !== null
  ).length;
  return (
    <div className="space-y-8">
      <Card className="w-[20%] bg-green-100">
        <CardContent>
          {isFetching ? (
            <Skeleton className=" bg-gray-200 h-16 w-22" />
          ) : (
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Sold Out</h1>
              <span className="text-4xl font-bold">{cardWithUser}</span>
            </div>
          )}
        </CardContent>
      </Card>

      <SoldCardTable />
    </div>
  );
};

export default SoldCards;
