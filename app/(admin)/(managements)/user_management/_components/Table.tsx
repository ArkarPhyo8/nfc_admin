"use client";
import { useState } from "react";
import { columns } from "./Columns";
import { useUserAccountQuery } from "@/hooks/userManagement/useQuery";
import { PaginationProps } from "@/types";
import { DataTable } from "@/reusable/DataTable";
import { Pagination } from "@/reusable/Pagination";

interface UserManagementTableProps {
  searchKey: string;
}
export const UserManagementTable = ({
  searchKey,
}: UserManagementTableProps) => {
  const [pagination, setPagination] = useState<PaginationProps>({
    pageIndex: 1,
    pageSize: 5,
  });
  const { data, isFetching } = useUserAccountQuery({
    page: pagination.pageIndex,
    limit: pagination.pageSize,
    searchKey,
  });

  return (
    <>
      <DataTable
        columns={columns}
        data={data?.userAccounts || []}
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
