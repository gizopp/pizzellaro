import { RefreshCw } from "lucide-react";
import styles from "./styles.module.scss";

interface Orders {
  orders: Order[];
}

export function Orders({ orders }: Orders) {
  return (
    <main className={styles.container}>
      <section className={styles.containerHeader}>
        <h1>Last orders</h1>
        <button>
          <RefreshCw size={24} color="#3fffa3" />
        </button>
      </section>
      <section className={styles.listOrders}>
        {orders.map((order) => (
          <button key={order.id} className={styles.orderItem}>
            <div className={styles.tag}></div>
            <span>Table {order.table}</span>
          </button>
        ))}
      </section>
    </main>
  );
}
