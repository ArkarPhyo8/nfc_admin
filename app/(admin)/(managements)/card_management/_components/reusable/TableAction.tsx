"use client";
import { Trash, UserPlus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { DeleteConfirm } from "@/reusable/DeleteConfirm";

import { toast } from "sonner";
import { CardType } from "@/types";
import { useCardDeleteMutation } from "@/hooks/card/useMutation";
import { CardForm } from "../form/Form";

interface TableActionProps {
  cardInfo: CardType;
}

const TableAction = ({ cardInfo }: TableActionProps) => {
  const [openedDialog, setOpenedDialog] = useState<"delete" | "update" | null>(
    null
  );
  const [open, setOpen] = useState(false);

  //delete process
  const cardDeleteMutation = useCardDeleteMutation(cardInfo.id);
  const handleDeleteProcess = async () => {
    toast.loading("Processing...");
    await cardDeleteMutation.mutateAsync(cardInfo.id);
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
              <UserPlus size={20} className="text-blue-500" />
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
          <CardForm
            key={openedDialog}
            title={"Add user into card"}
            state={"addUser"}
            btnName={"Add"}
            card={cardInfo}
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
