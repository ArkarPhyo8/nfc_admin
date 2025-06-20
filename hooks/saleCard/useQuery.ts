
import { getAllSaleCard } from "@/services/saleCard.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type useSaleCardQueryParams = {
  page?: number;
  limit?: number;
  searchKey?: string;
};
const useSaleCardQuery = ({
  page = 1,
  limit = 10,
  searchKey = "",
}: useSaleCardQueryParams = {}) => {
  return useQuery({
    queryKey: ["scale_card", searchKey, page, limit],
    queryFn: () => getAllSaleCard(page, limit, searchKey),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

export { useSaleCardQuery };
