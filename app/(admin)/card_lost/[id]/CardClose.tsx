"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useCardByIdQuery } from "@/hooks/card/useQuery";
import { useCardLostByIdQuery } from "@/hooks/card_lost/useQuery";
import { CheckCardType } from "@/reusable/CheckCardType";
import { CheckUsername } from "@/reusable/CheckUsername";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import Actions from "./Actions";

const CardClose = ({ cardID }: { cardID: string }) => {
  const router = useRouter();
  const { data: cardLostData, isFetching: cardLostFetching } =
    useCardLostByIdQuery(cardID);
  const { data: cardData, isFetching: cardFetching } = useCardByIdQuery(cardID);

  const approved = cardLostData?.card_loss.status == "APPROVED";
  const active = cardData?.card?.status;
  return (
    <div>
      <Button
        onClick={() => router.push("/card_lost")}
        className="cursor-pointer"
      >
        <ArrowLeft />
        Back
      </Button>
      <div className="w-[50%] mt-12">
        <Card className="shadow-xl rounded-3xl overflow-hidden border border-gray-200">
          <CardContent className="px-4 space-y-8">
            {/* NFC Card Display */}
            <div className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white py-20 rounded-xl shadow-inner text-center text-3xl font-bold tracking-wide uppercase">
              NFC Card
            </div>

            {/* Card Info Section */}
            <div className="grid grid-cols-2 gap-6 text-sm sm:text-base">
              <div className="space-y-4 text-gray-600 font-medium">
                <div>
                  <p className="mb-1 text-gray-500">Card ID</p>
                  <div className="text-gray-800 font-semibold">
                    {cardFetching ? (
                      <Skeleton className="w-full h-10 rounded-md" />
                    ) : (
                      cardData?.card.id
                    )}
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-gray-500">Card Name</p>
                  <div className="text-gray-800 font-semibold">
                    {cardFetching ? (
                      <Skeleton className="w-full h-10 rounded-md" />
                    ) : (
                      cardData?.card.cardName
                    )}
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-gray-500">Username</p>
                  <div className="text-gray-800 font-semibold">
                    {cardFetching ? (
                      <Skeleton className="w-full h-10 rounded-md" />
                    ) : (
                      <CheckUsername userId={cardData?.card.userID} />
                    )}
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-gray-500">Card Type</p>
                  <div className="text-gray-800 font-semibold">
                    {cardFetching ? (
                      <Skeleton className="w-full h-10 rounded-md" />
                    ) : (
                      <CheckCardType cardTypeId={cardData?.card?.cardType} />
                    )}
                  </div>
                </div>
              </div>

              {/* Optionally add more card details, like status/date */}
              <div className="space-y-4 text-gray-600 font-medium">
                <div className="flex items-center gap-16">
                  <div>
                    <p className="mb-1 text-gray-500">Card Status</p>
                    <div
                      className={` ${
                        active ? "text-green-600" : "text-slate-500"
                      }  font-semibold`}
                    >
                      {cardFetching ? (
                        <Skeleton className="w-full h-10 rounded-md" />
                      ) : cardData?.card?.status ? (
                        "Active"
                      ) : (
                        "Inactive"
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-gray-500">Status</p>
                    <div
                      className={` ${
                        approved ? "text-green-600" : "text-yellow-500"
                      }  font-semibold`}
                    >
                      {cardLostFetching ? (
                        <Skeleton className="w-full h-10 rounded-md" />
                      ) : (
                        cardLostData?.card_loss.status
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-gray-500">Apply Date</p>
                  <div className="text-gray-800 font-semibold">
                    {cardLostFetching ? (
                      <Skeleton className="w-full h-10 rounded-md" />
                    ) : (
                      <span>
                        {format(
                          new Date(cardLostData?.card_loss.applyDate),
                          "PP"
                        )}
                      </span>
                    )}
                  </div>
                </div>
                {cardLostFetching && cardFetching ? (
                  <div className="space-x-3 mt-16 flex items-center">
                    <Skeleton className="w-full h-10 rounded-md" />
                    <Skeleton className="w-full h-10 rounded-md" />
                  </div>
                ) : (
                  <Actions
                    cardLostID={cardLostData?.card_loss.id}
                    cardID={cardID}
                    cardStatus={active}
                    cardLostStatus={approved}
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardClose;
