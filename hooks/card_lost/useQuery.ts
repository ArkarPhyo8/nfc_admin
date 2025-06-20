import { getCardLost, getCardLostByCardId } from "@/services/card_lost.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type useCardLostQueryParams = {
  page?: number;
  limit?: number;
  searchKey?: string;
  tabName?: string;
};

const useCardLostQuery = ({
  page = 1,
  limit = 10,
  searchKey = "",
}: useCardLostQueryParams = {}) => {
  return useQuery({
    queryKey: ["card_lost", searchKey, page, limit],
    queryFn: () => getCardLost(page, limit, searchKey),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

const useCardLostByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["card_lost_by_cardId", id],
    queryFn: () => getCardLostByCardId(id),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

export { useCardLostQuery,useCardLostByIdQuery };
