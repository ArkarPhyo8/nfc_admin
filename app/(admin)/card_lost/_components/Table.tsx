"use client";
import { useState } from "react";
import { columns } from "./Columns";
import { PaginationProps } from "@/types";
import { DataTable } from "@/reusable/DataTable";
import { useCardLostQuery } from "@/hooks/card_lost/useQuery";

export const CardLossTable = () => {
  const [pagination, setPagination] = useState<PaginationProps>({
    pageIndex: 1,
    pageSize: 5,
  });
  const { data, isFetching } = useCardLostQuery();
  return (
    <>
      <DataTable
        columns={columns}
        data={data?.cards_loss || []}
        isFetching={isFetching}
        pagination={{
          page: pagination?.pageIndex,
          pageSize: pagination?.pageSize,
        }}
        setPagination={(newPagination: { page: number; pageSize: number }) =>
          setPagination({
            pageIndex: newPagination.page,
            pageSize: newPagination.pageSize,
          })
        }
        paginationMode="server"
      />
    </>
  );
};
