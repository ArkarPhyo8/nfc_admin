import { getAllCard } from "@/services/cardManagement.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useCardQuery = (
  page: number = 0,
  limit: number = 10,
  searchKey: string
) => {
  return useQuery({
    queryKey: ["card", searchKey, page, limit],
    queryFn: () => getAllCard(page, limit, searchKey),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

export { useCardQuery };
