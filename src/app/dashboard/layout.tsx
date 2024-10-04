import React from "react";
import Header from "../components/header";
import { Orders } from "../components/orders";
import { OrderProvider } from "@/providers/order";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <OrderProvider>{children}</OrderProvider>
    </>
  );
}
