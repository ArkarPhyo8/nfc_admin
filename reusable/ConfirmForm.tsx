import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { TriangleAlert } from "lucide-react";
import React from "react";

interface ConfirmCreateProps {
  description: string;
  btnName: string;
  confirmHandler: () => void;
}
const ConfirmForm = ({ description, btnName, confirmHandler }: ConfirmCreateProps) => {
  return (
    <AlertDialogContent>
      <AlertDialogHeader className="flex flex-row items-center gap-5">
        <div className="bg-orange-100 text-orange-600 rounded-full p-2">
          <TriangleAlert size={30} />
        </div>
        <div>
          <AlertDialogTitle className="text-orange-600 font-bold">
            Confirm Action?
          </AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          
          </AlertDialogDescription>
        </div>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={confirmHandler}>{btnName}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default ConfirmForm;
