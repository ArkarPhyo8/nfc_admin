"use client";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardType } from "@/types";
import { useMemo } from "react";
import Select from "react-select";

interface OptionProps {
  value: string;
  label: string;
}

interface CardNameSelectProps {
  cardData: CardType[];
  value: string[];
  onChange: (value: string[]) => void;
}
const CardNameSelect = ({ cardData, value, onChange }: CardNameSelectProps) => {
  console.log("cardData-->",cardData);
  
  // Generate brand options for the select input
  const categoryOptions: OptionProps[] = useMemo(() => {
    return (
      cardData?.map((card: { id: string; cardName: string }) => ({
        value: card.id,
        label: card.cardName,
      })) || []
    );
  }, [cardData]);

  return (
    <>
      <FormItem>
        <FormLabel>Card Name</FormLabel>
        <FormControl>
          <Select
            isDisabled={cardData?.length <= 0}
            isMulti
            options={categoryOptions}
            value={categoryOptions.filter((option) =>
              value?.includes(option.value)
            )}
            onChange={(selectedOptions) => {
              const values = selectedOptions.map((opt) => opt.value);
              onChange(values);
            }}
            maxMenuHeight={200}
            menuPlacement="auto"
            instanceId="category-select"
            classNamePrefix="select"
            theme={(theme) => ({
              ...theme,
              border: 0,
              colors: {
                ...theme.colors,
                primary25: "Gainsboro",
                primary: "gray",
              },
            })}
            styles={{
              control: (base) => ({
                ...base,
                borderWidth: "1px",
                boxShadow: "none",
              }),
            }}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </>
  );
};

export default CardNameSelect;
