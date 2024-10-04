"use client";

import { createContext, useState } from "react";

type OrderContextData = {
  isOpen: boolean;
  onRequestOpen: (order_id: string) => void;
  onRequestClose: () => void;
};

type OrderProviderProps = {
  children: React.ReactNode;
};

export const OrderContext = createContext({} as OrderContextData);

export function OrderProvider({ children }: OrderProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onRequestOpen(order_id: string) {
    setIsOpen(true);
  }

  function onRequestClose() {
    setIsOpen(false);
  }

  return (
    <OrderContext.Provider value={{ isOpen, onRequestOpen, onRequestClose }}>
      {children}
    </OrderContext.Provider>
  );
}
