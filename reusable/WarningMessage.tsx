import { TriangleAlert } from "lucide-react";
import React from "react";

interface ErrorProps {
  message?: string;
}
const WarningMessage = ({ message }: ErrorProps) => {
  if (!message) return;
  return (
    <div className="bg-yellow-50 p-3 rounded-md flex items-center gap-2 text-sm text-yellow-500">
      <TriangleAlert />
      <p>{message}</p>
    </div>
  );
};

export default WarningMessage;
