import { getAllPaymentType } from "@/services/paymentType.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const usePaymentTypeQuery = () => {
  return useQuery({
    queryKey: ["payment_type"],
    queryFn: getAllPaymentType,
    placeholderData: keepPreviousData,
    staleTime: 15 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

export { usePaymentTypeQuery };
