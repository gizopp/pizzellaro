import React from "react";
import Header from "./components/header";
import { Orders } from "./components/orders";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
