import { getAllCardType } from "@/services/cardType.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useCardTypeQuery = () => {
  return useQuery({
    queryKey: ["card_type"],
    queryFn: getAllCardType,
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

export { useCardTypeQuery };
