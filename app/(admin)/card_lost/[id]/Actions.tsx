import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useStatusChangeMutation } from "@/hooks/card/useMutation";
import { toast } from "sonner";
import { useApproveMutation } from "@/hooks/card_lost/useMutation";
import ConfirmForm from "@/reusable/ConfirmForm";

type ActionsProps = {
  cardLostID: string;
  cardID: string;
  cardStatus: boolean;
  cardLostStatus: boolean;
};
const Actions = ({
  cardLostID,
  cardID,
  cardStatus,
  cardLostStatus,
}: ActionsProps) => {
  const [openAlertDialog, setOpenAlertDialog] = useState<
    "close" | "approved" | null
  >(null);

  const changeStatusMutation = useStatusChangeMutation();
  const onCloseCardHandler = async () => {
    toast.loading("Processing...");
    await changeStatusMutation.mutateAsync({ cardID, status: false });
  };

  const approveMutation = useApproveMutation();
  const onApproveHandler = async () => {
    toast.loading("Processing...");
    await approveMutation.mutateAsync({ cardLostID, status: "APPROVED" });
  };
  return (
    <div className="space-x-3 mt-16">
      <AlertDialog>
        <AlertDialogTrigger
          asChild
          onClick={() => {
            setOpenAlertDialog("close");
          }}
          disabled={!cardStatus}
        >
          <Button className="cursor-pointer">Close</Button>
        </AlertDialogTrigger>
        <AlertDialogTrigger
          asChild
          onClick={() => {
            setOpenAlertDialog("approved");
          }}
          disabled={cardLostStatus}
        >
          <Button className="cursor-pointer">Approve</Button>
        </AlertDialogTrigger>
        {openAlertDialog === "close" ? (
          <ConfirmForm
            description="This action cannot be undone. This will permanently close the user card."
            btnName="Close Card"
            confirmHandler={onCloseCardHandler}
          />
        ) : (
          <ConfirmForm
            description="This action will approve the user that requested to close the card."
            btnName="Approve"
            confirmHandler={onApproveHandler}
          />
        )}
      </AlertDialog>
    </div>
  );
};

export default Actions;
