import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import React from "react";

interface LoadingUIProps {
  className?: string;
}
const LoadingUI = ({ className }: LoadingUIProps) => {
  return <Loader className={cn("h-4 w-4 animate-spin", className)} />;
};

export default LoadingUI;
