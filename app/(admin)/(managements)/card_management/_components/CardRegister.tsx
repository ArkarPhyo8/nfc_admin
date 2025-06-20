"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { CardForm } from "./form/Form";

const CardRegister = () => {
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
          Register
        </Button>
      </DialogTrigger>

      {openedDialog == "create" && (
        <CardForm
          key={openedDialog}
          title={"Card Register"}
          state={"register"}
          btnName={"Register"}
          onClose={() => {
            setOpenedDialog(null); // Pass function to close dialog
            setOpen(false);
          }}
        />
      )}
    </Dialog>
  );
};

export default CardRegister;
