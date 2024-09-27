import { RefreshCw } from "lucide-react";
import styles from "./styles.module.scss";

export function Orders() {
  return (
    <main className={styles.container}>
      <section className={styles.containerHeader}>
        <h1>Last orders</h1>
        <button>
          <RefreshCw size={24} color="#3fffa3" />
        </button>
      </section>
      <section className={styles.listOrders}>
        <button className={styles.orderItem}>
          <div className={styles.tag}></div>
          <span>Table 10</span>
        </button>
        <button className={styles.orderItem}>
          <div className={styles.tag}></div>
          <span>Table 12</span>
        </button>
      </section>
    </main>
  );
}
