"use client";
import { Pencil, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { DeleteConfirm } from "@/reusable/DeleteConfirm";
import { SaleForm } from "./form/Form";
import { toast } from "sonner";
import { SaleCardType } from "@/types";
import { useSaleCardDeleteMutation } from "@/hooks/saleCard/useMutation";

interface TableActionProps {
  saleInfo: SaleCardType;
}
const TableAction = ({ saleInfo }: TableActionProps) => {
  const [openedDialog, setOpenedDialog] = useState<"delete" | "update" | null>(
    null
  );
  const [open, setOpen] = useState(false);

  //delete process
  const saleCardDeleteMutation = useSaleCardDeleteMutation(saleInfo.id);
  const handleDeleteProcess = async () => {
    toast.loading("Processing...");
    await saleCardDeleteMutation.mutateAsync(saleInfo.id);
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) setOpenedDialog(null); // Reset only when closing
        setOpen(open);
      }}
    >
      <AlertDialog>
        <div className="flex items-center">
          <DialogTrigger
            asChild
            onClick={() => {
              setOpenedDialog("update");
              setOpen(true); // Ensure dialog opens immediately
            }}
          >
            <Button variant={"ghost"} className="cursor-pointer">
              <Pencil size={20} className="text-blue-500" />
            </Button>
          </DialogTrigger>
          <AlertDialogTrigger
            asChild
            onClick={() => {
              setOpenedDialog("delete");
            }}
          >
            <Button variant={"ghost"} className="cursor-pointer">
              <Trash size={20} className="text-red-600" />
            </Button>
          </AlertDialogTrigger>
        </div>

        {openedDialog === "update" ? (
          <SaleForm
            key={openedDialog}
            title={"Update Sale"}
            state={"update"}
            btnName={"Update"}
            sale={saleInfo}
            onClose={() => {
              setOpenedDialog(null); // Pass function to close dialog
              setOpen(false);
            }}
          />
        ) : (
          <DeleteConfirm handleDeleteProcess={handleDeleteProcess} />
        )}
      </AlertDialog>
    </Dialog>
  );
};

export default TableAction;
