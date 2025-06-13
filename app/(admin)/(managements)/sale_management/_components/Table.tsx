"use client";
import { useState } from "react";
import { columns } from "./Columns";
import { PaginationProps } from "@/types";
import { DataTable } from "@/reusable/DataTable";
import { Pagination } from "@/reusable/Pagination";
import { useSaleCardQuery } from "@/hooks/saleCard/useQuery";

interface SaleManagementTableProps {
  searchKey: string;
}
export const SaleManagementTable = ({
  searchKey,
}: SaleManagementTableProps) => {
  const [pagination, setPagination] = useState<PaginationProps>({
    pageIndex: 1,
    pageSize: 5,
  });
  const { data, isFetching } = useSaleCardQuery({
    page: pagination.pageIndex,
    limit: pagination.pageSize,
    searchKey,
  });

  return (
    <>
      <DataTable
        columns={columns}
        data={data?.sale_cards || []}
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

      <div className="float-right mt-5">
        <Pagination
          currentPage={data?.pagination?.currentPage}
          pageCount={data?.pagination?.totalPages}
          previousPage={() =>
            setPagination({
              ...pagination,
              pageIndex: pagination.pageIndex - 1,
            })
          }
          nextPage={() =>
            setPagination({
              ...pagination,
              pageIndex: pagination.pageIndex + 1,
            })
          }
        />
      </div>
    </>
  );
};
