"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { CardForm } from "./form/Form";

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
          Create Card
        </Button>
      </DialogTrigger>

      {openedDialog == "create" && (
        <CardForm
          key={openedDialog}
          title={"Create Card"}
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
