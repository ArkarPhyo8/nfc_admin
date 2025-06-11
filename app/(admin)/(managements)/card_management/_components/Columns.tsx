import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import TableAction from "./TableAction";
import { CardManagementType } from "@/types";

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
          <span>{username}</span>
        </>
      );
    },
  },
  {
    id: "Card Type",
    header: "Card Type",
    cell: ({ row }) => {
      const cardType = row.original.cardType.name;
      return (
        <>
          <span>{cardType}</span>
        </>
      );
    },
  },
  {
    id: "Status",
    header: "Active",
    cell: ({ row }) => {
      const active = row.original.status;
      return (
        <>
          {active && (
            <span className="bg-green rounded-2xl px-3 py-1 font-bold text-text-color">
              Active
            </span>
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
    cell: ({ row }) => <TableAction cardInfo={row.original} />,
  },
];
