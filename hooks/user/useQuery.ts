import { getAllUser } from "@/services/user.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type UserAccountQueryParams = {
  page?: number;
  limit?: number;
  searchKey?: string;
};
const useUserQuery = ({
  page = 1,
  limit = 10,
  searchKey = "",
}: UserAccountQueryParams = {}) => {
  return useQuery({
    queryKey: ["userAccount", searchKey, page, limit],
    queryFn: () => getAllUser(page, limit, searchKey),
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

export { useUserQuery };
