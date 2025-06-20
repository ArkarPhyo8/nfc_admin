import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { useCardQuery } from "@/hooks/card/useQuery";
import { CardType } from "@/types";

interface ViewCardNameProps {
  cardNameId: string[];
}
const ViewCardName = ({ cardNameId }: ViewCardNameProps) => {
  const { data, isFetching } = useCardQuery();

  if (isFetching) {
    return <Skeleton className="w-full h-10 rounded-md" />;
  }
  // Filter matching card names
  const cardNames = data?.cards.filter((card: CardType) =>
    cardNameId.includes(card.id)
  );
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"}>View Card Name</Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-wrap gap-2">
        {cardNames.length <= 0 ? (
          <div className="w-full">
            <span className="flex items-center justify-center text-xl font-semibold">
              No card name
            </span>
          </div>
        ) : (
          cardNames.map((cardName: CardType) => {
            return (
              <div
                key={cardName.id}
                className="border border-slate-300 rounded-md bg-slate-200 cursor-default hover:opacity-80 px-4 py-1"
              >
                <span>{cardName.cardName}</span>
              </div>
            );
          })
        )}
      </PopoverContent>
    </Popover>
  );
};

export default ViewCardName;
