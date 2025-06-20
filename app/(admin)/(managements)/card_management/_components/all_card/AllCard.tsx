"use client";
import { Card, CardContent } from "@/components/ui/card";
import { AllCardTable } from "./Table";
import { useAllCardQuery } from "@/hooks/card/useQuery";
import { CardType } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
const AllCard = () => {
  const { data, isFetching } = useAllCardQuery();

  //Total Card
  const totalCard = data?.all_cards.length;

  //Filter Card with userId
  const cardWithUser = data?.all_cards.filter(
    (card: CardType) => card.userID !== null
  ).length;

  //Filter Card without userId
  const cardWithoutUser = data?.all_cards.filter(
    (card: CardType) => card.userID === null
  ).length;

  return (
    <div className="space-y-4">
      <div className="border-b border-e-border pb-4">
        <Card className="w-[20%] bg-green-100">
          <CardContent>
            <div className="flex items-start gap-4 justify-around">
              {isFetching ? (
                <Skeleton className=" bg-green-200 h-16 w-28" />
              ) : (
                <div className="flex flex-col items-center">
                  <h1 className="text-lg font-medium">Total Card</h1>
                  <span className="text-3xl font-bold">{totalCard}</span>
                </div>
              )}

              {isFetching ? (
                <Skeleton className=" bg-green-200 h-16 w-28" />
              ) : (
                <div className="flex flex-col items-center">
                  <h1 className="text-lg font-medium">Stock</h1>
                  <span className="text-3xl font-bold">{cardWithoutUser}</span>
                </div>
              )}

              {isFetching ? (
                <Skeleton className=" bg-green-200 h-16 w-28" />
              ) : (
                <div className="flex flex-col items-center">
                  <h1 className="text-lg font-medium">Sold</h1>
                  <span className="text-base font-bold">
                    {isNaN((cardWithUser / totalCard) * 100)
                      ? 0
                      : Math.round((cardWithUser / totalCard) * 100)}
                    %
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <AllCardTable />
    </div>
  );
};

export default AllCard;
