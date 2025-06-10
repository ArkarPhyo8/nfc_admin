import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import TableAction from "./TableAction";
import { CardManagementType } from "@/types";
import { Minus } from "lucide-react";

export const columns: ColumnDef<CardManagementType>[] = [
  {
    id: "cardName",
    header: "Card Name",
    accessorKey: "cardName",
  },
  {
    id: "username",
    header: "Username",
    cell: ({ row }) => {
      const username = row.original.users.username;
      return (
        <>
          {username ? (
            <span>{username}</span>
          ) : (
            <Minus className="opacity-50" />
          )}
        </>
      );
    },
  },
  {
    id: "Card Type",
    header: "Card Type",
    accessorKey: "cardType",
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
    cell: ({ row }) => <TableAction cardInfo={row.original} />,
  },
];
