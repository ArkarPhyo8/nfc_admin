import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardWrapperProps {
  children: React.ReactNode;
  title: string;
  className: string;
}
const DashboardCardWrapper = ({
  children,
  title,
  className
}: DashboardCardWrapperProps) => {

  return (
    <Card className={cn("",className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold uppercase">{title}</CardTitle>
        <CardDescription className="sr-only" />
      </CardHeader>
      {children}
    </Card>
  );
};

export default DashboardCardWrapper;
