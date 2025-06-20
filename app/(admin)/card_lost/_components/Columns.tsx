

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import TableAction from "./TableAction";
import { CheckUsername } from "@/reusable/CheckUsername";
import { CheckCardName } from "@/reusable/CheckCardName";

export type RawCardLossType = {
  id: string;
  cardID: string;
  userID: string;
  description: string;
  status: string;
  applyDate: string;
  issueDate: string;
};
export const columns: ColumnDef<RawCardLossType>[] = [
  {
    id: "username",
    header: "Username",
    cell: ({ row }) => {
      const userId = row.original.userID;
      return <>{userId ? <CheckUsername userId={userId} /> : <span>-</span>}</>;
    },
  },
  {
    id: "card Name",
    header: "Card Name",
    cell: ({ row }) => {
      const cardId = row.original.cardID;
      return <>{cardId ? <CheckCardName cardId={cardId} /> : <span>-</span>}</>;
    },
  },
  {
    id: "description",
    header: "Description",
    accessorKey: "description",
  },
  {
    id: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status.toLowerCase();
      const pending = status == "pending";
      return (
        <>
          <div>
            <span
              className={`${
                pending ? "bg-yellow-300" : "bg-green-400"
              } rounded-2xl px-4 py-1 font-semibold text-slate-800`}
            >
              {status}
            </span>
          </div>
        </>
      );
    },
  },
  {
    id: "issue data",
    header: "Issue Data",
    cell: ({ row }) => {
      const pending = row.original.status.toLowerCase() == "pending";
      if (pending) return;
      return <div>{format(new Date(row.original.issueDate), "PP")}</div>;
    },
  },
  {
    id: "apply data",
    header: "Apply Date",
    cell: ({ row }) => (
      <div>{format(new Date(row.original.applyDate), "PP")}</div>
    ),
  },

  {
    id: "action",
    header: "Action",
    cell: ({ row }) => <TableAction cardID={row.original.cardID} />,
  },
];
