"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pagination?: {
    page: number;
    pageSize: number;
  };
  paginationMode: "client" | "server";
  setPagination?: (pagination: { page: number; pageSize: number }) => void;
  isFetching?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pagination,
  paginationMode = "client",
  setPagination,
  isFetching,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    pageCount: pagination
      ? Math.ceil(data.length / pagination.pageSize)
      : undefined,
    onPaginationChange:
      pagination && setPagination
        ? (updater) => {
            if (typeof updater === "function") {
              const newState = updater({
                pageIndex: pagination.page - 1,
                pageSize: pagination.pageSize,
              });
              setPagination({
                page: newState.pageIndex + 1,
                pageSize: newState.pageSize,
              });
            } else {
              setPagination({
                page: updater.pageIndex + 1,
                pageSize: updater.pageSize,
              });
            }
          }
        : undefined,
    manualPagination: paginationMode === "server",
  });
  return (
    <div className="rounded-md border h-[485px] overflow-scroll w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isFetching ? (
            Array.from({ length: pagination?.pageSize ?? 5 }).map(
              (_, index: number) => (
                <TableRow key={index} className="h-20">
                  {columns.map((cell) => (
                    <TableCell key={`${index}-${cell.id}`} width={"100px"}>
                      <Skeleton className="w-full h-10 rounded-md" />
                    </TableCell>
                  ))}
                </TableRow>
              )
            )
          ) : table.getRowModel().rows ? (
            table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No Result
                </TableCell>
              </TableRow>
            )
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
