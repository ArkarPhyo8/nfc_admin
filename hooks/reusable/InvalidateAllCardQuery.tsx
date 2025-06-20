"use client";
import { QueryClient } from "@tanstack/react-query";

const InvalidateAllCardQuery = (queryClient:QueryClient,keysToInvalidate: string[]) => {
  keysToInvalidate.forEach((key) => {
    queryClient.invalidateQueries({ queryKey: [key] });
  });
};

export default InvalidateAllCardQuery;
