"use client";
import ProgressBarProvider from "@/context/ProgressBarProvider";
import React from "react";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressBarProvider>
      {children}
      <Toaster richColors />
    </ProgressBarProvider>
  );
};

export default Providers;
