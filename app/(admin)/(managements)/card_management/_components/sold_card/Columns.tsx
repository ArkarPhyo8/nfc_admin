import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { CardType } from "@/types";
import CardTypeCell from "../reusable/CardType";
import StatusChange from "../reusable/StatusChange";
import { CheckUsername } from "@/reusable/CheckUsername";

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
      return <>{userId ? <CheckUsername userId={userId} /> : <span>-</span>}</>;
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
          <StatusChange cardID={row.original.id} active={active} />
        </>
      );
    },
  },
  {
    id: "date",
    header: "Date",
    cell: ({ row }) => (
      <>
        <div>{format(new Date(row.original.updated_at), "PP")}</div>
        <div>{format(new Date(row.original.updated_at), "pp")}</div>
      </>
    ),
  },
];
