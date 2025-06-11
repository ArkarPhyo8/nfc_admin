import { getAllCard } from "@/services/cardManagement.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type useCardQueryParams = {
  page?: number;
  limit?: number;
  searchKey?: string;
};
const useCardQuery = ({
  page = 1,
  limit = 10,
  searchKey = "",
}: useCardQueryParams = {}) => {
  return useQuery({
    queryKey: ["card", searchKey, page, limit],
    queryFn: () => getAllCard(page, limit, searchKey),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

export { useCardQuery };
