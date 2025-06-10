"use client";
import { Pencil, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { DeleteConfirm } from "@/reusable/DeleteConfirm";
import { UserAccountForm } from "./Form";
import { toast } from "sonner";
import { UserManagementType } from "@/types";
import { useUserAccountsDeleteMutation } from "@/hooks/userManagement/useMutation";

interface TableActionProps {
  userInfo: UserManagementType;
}
const TableAction = ({ userInfo }: TableActionProps) => {
  const [openedDialog, setOpenedDialog] = useState<"delete" | "update" | null>(
    null
  );
  const [open, setOpen] = useState(false);

  //delete process
    const userAccountDeleteMutation= useUserAccountsDeleteMutation(userInfo.id)
  const handleDeleteProcess = async() => {
    toast.loading("Processing...")
    await userAccountDeleteMutation.mutateAsync(userInfo.id)
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
          <UserAccountForm
            key={openedDialog}
            title={"Update User Account"}
            state={"update"}
            btnName={"Update"}
            userAccount={userInfo}
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
