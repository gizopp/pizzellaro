"use client";

import { OrderItem } from "@/app/types/orderItem.type";
import { getCoookieClient } from "@/lib/cookieClient";
import { api } from "@/services/app";
import { createContext, useState } from "react";

type OrderContextData = {
  isOpen: boolean;
  onRequestOpen: (order_id: string) => Promise<void>;
  onRequestClose: () => void;
  order: OrderItem[];
};

type OrderProviderProps = {
  children: React.ReactNode;
};

export const OrderContext = createContext({} as OrderContextData);

export function OrderProvider({ children }: OrderProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState<OrderItem[]>([]);

  async function onRequestOpen(order_id: string) {
    const token = getCoookieClient();

    const response = await api.get("/orderdetails", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        order_id,
      },
    });

    console.log(response.data);

    setOrder(response.data);
    setIsOpen(true);
  }

  function onRequestClose() {
    setIsOpen(false);
  }

  return (
    <OrderContext.Provider
      value={{ isOpen, onRequestOpen, onRequestClose, order }}
    >
      {children}
    </OrderContext.Provider>
  );
}
