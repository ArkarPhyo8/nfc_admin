import { TriangleAlert } from "lucide-react";
import React from "react";

interface ErrorProps {
  message?: string;
}
const ErrorMessage = ({ message }: ErrorProps) => {
  if (!message) return;
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-2 text-sm text-destructive">
      <TriangleAlert />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
