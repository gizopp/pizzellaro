"use client";

import { RefreshCw } from "lucide-react";
import styles from "./styles.module.scss";
import { OrderModal } from "../modal";
import { OrderContext } from "@/providers/order";
import { use } from "react";

interface Orders {
  orders: Order[];
}

export function Orders({ orders }: Orders) {
  const { isOpen, onRequestOpen } = use(OrderContext);

  const handleOrderDetails = async (order_id: string) => {
    await onRequestOpen(order_id);
  };

  return (
    <>
      <main className={styles.container}>
        <section className={styles.containerHeader}>
          <h1>Last orders</h1>
          <button>
            <RefreshCw size={24} color="#3fffa3" />
          </button>
        </section>
        <section className={styles.listOrders}>
          {orders.map((order) => (
            <button
              key={order.id}
              className={styles.orderItem}
              onClick={() => handleOrderDetails(order.id)}
            >
              <div className={styles.tag}></div>
              <span>Table {order.table}</span>
            </button>
          ))}
        </section>
      </main>
      {isOpen && <OrderModal />}
    </>
  );
}
