import { X } from "lucide-react";
import styles from "./styles.module.scss";
import { Order } from "@/app/types/order.type";
import Button from "../../button";
import { use } from "react";
import { OrderContext } from "@/providers/order";

export const OrderModal = () => {
  const { onRequestClose, order } = use(OrderContext);

  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button
          className={styles.dialogButton}
          onClick={() => {
            onRequestClose();
          }}
        >
          <X size={24} color="#fff" />
        </button>
        <article className={styles.detailsContainer}>
          <h2>Order Details</h2>
          <div className={styles.orderInfo}>
            <span className={styles.table}>
              Table: <b>{order[0].order.table}</b>
            </span>
            {order[0].order.name && (
              <span className={styles.name}>
                Name: <b>{order[0].order.name}</b>
              </span>
            )}
          </div>
          <section className={styles.itemsContainer}>
            <h4>Items</h4>
            <ul>
              {order.map((item) => (
                <li key={item.id} className={styles.itemRow}>
                  <span className={styles.itemAmount}>{item.amount}</span>
                  <span className={styles.itemDescription}>
                    {item.product.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>
          <Button name="Finish" />
        </article>
      </section>
    </dialog>
  );
};
