"use client";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCardTypeQuery } from "@/hooks/cardType/useQuery";
import LoadingUI from "@/reusable/LoadingUI";
import { CardType_Type } from "@/types";

interface CardTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}
const CardTypeSelect = ({ value, onChange }: CardTypeSelectProps) => {
  console.log("value--->",value);
  
  const { data: cardTypes, isFetching } = useCardTypeQuery();
  return (
    <>
      <FormItem>
        <FormLabel>Card Type</FormLabel>
        <Select onValueChange={onChange} defaultValue={value}>
          <FormControl>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select card type" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {isFetching ? (
              <div className="h-32 flex gap-2 items-center justify-center">
                <LoadingUI className="w-6 h-6" />
                Loading . . .
              </div>
            ) : (
              cardTypes.map((cardType: CardType_Type) => (
                <SelectItem key={cardType.id} value={cardType.id}>
                  {cardType.name}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </>
  );
};

export default CardTypeSelect;
