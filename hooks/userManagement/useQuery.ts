import { getAllUserAccount } from "@/services/userManagement.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type UserAccountQueryParams = {
  page?: number;
  limit?: number;
  searchKey?: string;
};
const useUserAccountQuery = ({
  page = 1,
  limit = 10,
  searchKey = "",
}: UserAccountQueryParams = {}) => {
  return useQuery({
    queryKey: ["userAccount", searchKey, page, limit],
    queryFn: () => getAllUserAccount(page, limit, searchKey),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

export { useUserAccountQuery };
