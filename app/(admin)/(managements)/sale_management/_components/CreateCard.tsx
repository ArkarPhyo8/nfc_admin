"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { SaleForm } from "./form/Form";

const CreateUserAccount = () => {
  const [openedDialog, setOpenedDialog] = useState<"create" | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) setOpenedDialog(null); // Reset only when closing
        setOpen(open);
      }}
    >
      <DialogTrigger
        asChild
        onClick={() => {
          setOpenedDialog("create");
        }}
      >
        <Button className="flex cursor-pointer">
          <Plus />
          Add Sale Card
        </Button>
      </DialogTrigger>

      {openedDialog == "create" && (
        <SaleForm
          key={openedDialog}
          title={"Create Sale"}
          state={"create"}
          btnName={"Create"}
          onClose={() => {
            setOpenedDialog(null); // Pass function to close dialog
            setOpen(false);
          }}
        />
      )}
    </Dialog>
  );
};

export default CreateUserAccount;
