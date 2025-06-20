"use client";
import { useState } from "react";
import { columns } from "./Columns";
import { PaginationProps } from "@/types";
import { DataTable } from "@/reusable/DataTable";
import { Pagination } from "@/reusable/Pagination";
import { useAvailableCardQuery } from "@/hooks/card/useQuery";
import SearchInput from "@/reusable/SearchInput";

export const AvailableCardTable = () => {
  const [searchKey, setSearchKey] = useState("");
  const [pagination, setPagination] = useState<PaginationProps>({
    pageIndex: 1,
    pageSize: 5,
  });
  const { data, isFetching } = useAvailableCardQuery({
    page: pagination.pageIndex,
    limit: pagination.pageSize,
    searchKey,
  });

  return (
    <div className="space-y-3">
      <SearchInput setSearchKey={setSearchKey} placeholder={"Search..."} />
      <DataTable
        columns={columns}
        data={data?.available_cards || []}
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
        className="h-[330px]"
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
    </div>
  );
};
