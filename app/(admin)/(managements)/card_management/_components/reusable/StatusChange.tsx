"use client";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Switch } from "@/components/ui/switch";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useStatusChangeMutation } from "@/hooks/card/useMutation";
import ConfirmForm from "@/reusable/ConfirmForm";

const StatusChange = ({
  cardID,
  active,
}: {
  cardID: string;
  active: boolean;
}) => {
  const [checked, setChecked] = useState<boolean>(active);
  const [pendingChecked, setPendingChecked] = useState<boolean | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const changeStatusMutation = useStatusChangeMutation();
  // guid,
  // setChecked,
  // checked

  const handleToggle = (nextChecked: boolean) => {
    setPendingChecked(nextChecked);
    setOpenDialog(true);
  };

  const confirmChange = async () => {
    if (pendingChecked === null) return;
    setChecked(pendingChecked); // Optimistic update
    await changeStatusMutation.mutateAsync({ cardID, status: pendingChecked });
    setPendingChecked(null);
    setOpenDialog(false);
  };

  useEffect(() => {
    setChecked(active); // sync state with props
  }, [active]);
  return (
    <div>
      <div className="flex items-center justify-start">
        {changeStatusMutation.isPending ? (
          <div className="relative flex items-center justify-start">
            <Switch
              className="data-[state=checked]:bg-slate-600 data-[state=unchecked]:bg-slate-600 absolute"
              checked={checked}
              disabled
              aria-readonly
            />
            <Loader
              size={18}
              className={`absolute animate-spin cursor-not-allowed  ${
                checked ? "left-[17px]" : "left-0"
              }`}
            />
          </div>
        ) : (
          <Switch
            className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-red-600"
            checked={checked}
            onCheckedChange={handleToggle}
            //   id={`active-switch-${guid}`}
          />
        )}
      </div>

      <AlertDialog
        open={openDialog}
        onOpenChange={(open) => {
          setOpenDialog(open);
          setPendingChecked(null);
        }}
      >
        <ConfirmForm
          description={`Do you really want to ${
            pendingChecked ? "activate" : "deactivate"
          } this status?`}
          btnName={"Confirm"}
          confirmHandler={confirmChange}
        />
      </AlertDialog>
    </div>
  );
};

export default StatusChange;
