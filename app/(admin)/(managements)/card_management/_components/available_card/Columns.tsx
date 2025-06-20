import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { CardType } from "@/types";
import TableAction from "../reusable/TableAction";
import StatusChange from "../reusable/StatusChange";

export const columns: ColumnDef<CardType>[] = [
  {
    id: "cardName",
    header: "Card Name",
    accessorKey: "cardName",
  },
  {
    id: "Status",
    header: "Active",
    cell: ({ row }) => {
      const active = row.original.status;
      return (
        <>
          <StatusChange cardID={row.original.id} active={active} />
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
