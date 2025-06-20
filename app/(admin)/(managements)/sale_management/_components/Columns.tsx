import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import TableAction from "./TableAction";
import { SaleCardType } from "@/types";
import ViewCardName from "./cells/ViewCardName";

export const columns: ColumnDef<SaleCardType>[] = [
  {
    id: "customer name",
    header: "Customer Name",
    accessorKey: "customer_name",
  },
  {
    id: "card name",
    header: "Card name",
    cell: ({ row }) =>
      row.original.cardID.length !== 0 && (
        <ViewCardName cardNameId={row.original.cardID} />
      ),
  },
  {
    id: "quantity",
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    id: "price",
    header: "Price",
    cell: ({ row }) => (
      <p>{new Intl.NumberFormat("en-US").format(Number(row.original.price))}</p>
    ),
  },
  {
    id: "payment type",
    header: "Payment Type",
    cell: ({ row }) => {
      const paymentType = row.original.payment_status.name;
      return (
        <>
          <span>{paymentType}</span>
        </>
      );
    },
  },
  {
    id: "phone",
    header: "Phone",
    accessorKey: "phone",
  },
  {
    id: "address",
    header: "Address",
    accessorKey: "address",
  },
  {
    id: "sale date",
    header: "Sale Date",
    cell: ({ row }) => (
      <div>{format(new Date(row.original.sale_date), "PP")}</div>
    ),
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
    cell: ({ row }) => <TableAction saleInfo={row.original} />,
  },
];
