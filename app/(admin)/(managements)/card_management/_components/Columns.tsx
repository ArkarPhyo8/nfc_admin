import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import TableAction from "./TableAction";
import { CardType } from "@/types";
import UsernameCell from "./cells/Username";
import CardTypeCell from "./cells/CardType";

export const columns: ColumnDef<CardType>[] = [
  {
    id: "cardName",
    header: "Card Name",
    accessorKey: "cardName",
  },
  {
    id: "username",
    header: "Username",
    cell: ({ row }) => {
      const userId = row.original.userID;
      return <>{userId ? <UsernameCell userId={userId} /> : <span>-</span>}</>;
    },
  },
  {
    id: "Card Type",
    header: "Card Type",
    cell: ({ row }) => {
      const cardTypeId = row.original.cardType;
      return (
        <>
          {cardTypeId ? (
            <CardTypeCell cardTypeId={cardTypeId} />
          ) : (
            <span>-</span>
          )}
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
