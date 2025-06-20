import {
  getAllCard,
  getAvailableCards,
  getCard,
  getCardByCardId,
  getSoldCards,
} from "@/services/card.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type useCardQueryParams = {
  page?: number;
  limit?: number;
  searchKey?: string;
  tabName?: string;
};

const useAllCardQuery = () => {
  return useQuery({
    queryKey: ["cardAll"],
    queryFn: () => getAllCard(),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

const useCardQuery = ({
  page = 1,
  limit = 10,
  searchKey = "",
}: useCardQueryParams = {}) => {
  return useQuery({
    queryKey: ["card", searchKey, page, limit],
    queryFn: () => getCard(page, limit, searchKey),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

const useAvailableCardQuery = ({
  page = 1,
  limit = 10,
  searchKey = "",
}: useCardQueryParams = {}) => {
  return useQuery({
    queryKey: ["available_cards", searchKey, page, limit],
    queryFn: () => getAvailableCards(page, limit, searchKey),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

const useSoldCardQuery = ({
  page = 1,
  limit = 10,
  searchKey = "",
}: useCardQueryParams = {}) => {
  return useQuery({
    queryKey: ["sold_cards", searchKey, page, limit],
    queryFn: () => getSoldCards(page, limit, searchKey),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

const useCardByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["card_by_id", id],
    queryFn: () => getCardByCardId(id),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

export {
  useAllCardQuery,
  useCardQuery,
  useAvailableCardQuery,
  useSoldCardQuery,
  useCardByIdQuery,
};
