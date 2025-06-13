import { ColumnDef } from "@tanstack/react-table";
import { UserType } from "@/types";
import { Minus } from "lucide-react";
import { format } from "date-fns";
import TableAction from "./TableAction";

export const columns: ColumnDef<UserType>[] = [
  {
    id: "username",
    header: "Username",
    accessorKey: "username",
  },
  {
    id: "phone",
    header: "Phone",
    cell: ({ row }) => {
      return (
        <>
          {row.original.phoneNo ? (
            <span>{row.original.phoneNo}</span>
          ) : (
            <Minus className="opacity-50" />
          )}
        </>
      );
    },
  },
  {
    id: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <div>{format(new Date(row.original.created_at), "PP")}</div>
    ),
  },
  {
    id: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => (
      <div>{format(new Date(row.original.updated_at), "PP")}</div>
    ),
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => <TableAction userInfo={row.original} />,
  },
];
