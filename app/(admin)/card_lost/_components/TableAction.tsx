"use client";
import { ChevronsRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TableActionProps {
  cardID: string;
}
const TableAction = ({ cardID }: TableActionProps) => {
  return (
    <div>
      <Link href={`/card_lost/${cardID}`}>
      <Button
        variant={"outline"}
        className="cursor-pointer"
      >
        <ChevronsRight size={32} className="text-blue-500" />
      </Button>
      </Link>
    </div>
  );
};

export default TableAction;
